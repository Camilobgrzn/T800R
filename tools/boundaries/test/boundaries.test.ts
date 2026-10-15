import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cruise } from 'dependency-cruiser';
import { ESLint } from 'eslint';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const ROOT = resolve(fileURLToPath(import.meta.url), '../../../..');
const require = createRequire(import.meta.url);
const graph = require('../graph.cjs') as typeof import('../graph.cjs');
const depcruiseConfig = require('../../../.dependency-cruiser.cjs') as {
  forbidden: { name: string }[];
  options: Record<string, unknown>;
};

let eslint: ESLint;
beforeAll(() => {
  eslint = new ESLint({ cwd: ROOT });
});

async function lintImport(filePath: string, specifier: string): Promise<string[]> {
  const [result] = await eslint.lintText(`import '${specifier}';\n`, { filePath: join(ROOT, filePath) });
  return (result?.messages ?? []).map((m) => m.message);
}

function expectViolation(messages: string[], rule: string): void {
  expect(messages.length, 'debe haber al menos un error').toBeGreaterThan(0);
  const match = messages.find((m) => m.includes(`[${rule}]`));
  expect(match, `el error debe venir de la regla ${rule}`).toBeDefined();
  expect(match).toContain(graph.PREFIX);
}

describe('fronteras entre packages (CA4, CA6)', () => {
  it('(a) contracts → runtime falla con remediación', async () => {
    expectViolation(await lintImport('packages/contracts/src/x.ts', '@t800r/runtime'), 'frontera-contracts');
  });
  it('(b) un adapter → otro adapter falla en ambos sentidos con remediación', async () => {
    expectViolation(
      await lintImport('packages/adapters/claude-code/src/x.ts', '@t800r/adapter-prueba'),
      'frontera-adapters',
    );
    expectViolation(
      await lintImport('packages/adapters/prueba/src/x.ts', '@t800r/adapter-claude-code'),
      'frontera-adapters',
    );
  });
  it('adapter-api → runtime y runtime → cli/adapter fallan con remediación', async () => {
    expectViolation(await lintImport('packages/adapter-api/src/x.ts', '@t800r/runtime'), 'frontera-adapter-api');
    expectViolation(await lintImport('packages/runtime/src/application/x.ts', '@t800r/cli'), 'frontera-runtime');
    expectViolation(
      await lintImport('packages/runtime/src/application/x.ts', '@t800r/adapter-claude-code'),
      'frontera-runtime',
    );
  });
  it('las direcciones permitidas no producen errores', async () => {
    expect(await lintImport('packages/adapter-api/src/x.ts', '@t800r/contracts')).toEqual([]);
    expect(await lintImport('packages/runtime/src/application/x.ts', '@t800r/contracts')).toEqual([]);
    expect(await lintImport('packages/adapters/claude-code/src/x.ts', '@t800r/adapter-api')).toEqual([]);
    expect(await lintImport('packages/cli/src/x.ts', '@t800r/runtime')).toEqual([]);
    expect(await lintImport('packages/cli/src/x.ts', '@t800r/adapter-claude-code')).toEqual([]);
  });
});

describe('fronteras dentro de runtime (CA5, CA6)', () => {
  it('(d) core → application falla con remediación', async () => {
    expectViolation(await lintImport('packages/runtime/src/core/x.ts', '../application/index.js'), 'capa-core');
  });
  it('policy/evidence → adoption falla con remediación', async () => {
    expectViolation(await lintImport('packages/runtime/src/policy/x.ts', '../adoption/index.js'), 'capa-policy');
    expectViolation(await lintImport('packages/runtime/src/evidence/x.ts', '../application/index.js'), 'capa-evidence');
  });
  it('application → core y policy → core están permitidos', async () => {
    expect(await lintImport('packages/runtime/src/application/x.ts', '../core/index.js')).toEqual([]);
    expect(await lintImport('packages/runtime/src/policy/x.ts', '../core/index.js')).toEqual([]);
  });
});

describe('ciclos con dependency-cruiser (CA4 c, CA6)', () => {
  let dir: string;
  beforeAll(async () => {
    dir = await mkdtemp(join(tmpdir(), 't800r-ciclo-'));
    await mkdir(join(dir, 'packages/alfa/src'), { recursive: true });
    await mkdir(join(dir, 'packages/beta/src'), { recursive: true });
    await writeFile(join(dir, 'packages/alfa/src/index.ts'), "import '../../beta/src/index.js';\n");
    await writeFile(join(dir, 'packages/beta/src/index.ts'), "import '../../alfa/src/index.js';\n");
  });
  afterAll(async () => {
    await rm(dir, { recursive: true, force: true });
  });
  it('(c) un ciclo entre dos packages falla y la salida de `err` contiene la remediación', async () => {
    const result = await cruise(['packages'], {
      ...depcruiseConfig.options,
      tsConfig: undefined,
      ruleSet: depcruiseConfig,
      validate: true,
      baseDir: dir,
      outputType: 'err',
    } as Parameters<typeof cruise>[1]);
    expect(result.exitCode).toBeGreaterThan(0);
    const output = String(result.output);
    expect(output).toContain(`${graph.CIRCULAR.rule}:`);
    expect(output).toContain(graph.PREFIX);
    expect(output).toContain('packages/alfa/src/index.ts');
  });
});

describe('toda regla propia lleva remediación (CA6)', () => {
  it('reglas de dependency-cruiser', () => {
    expect(depcruiseConfig.forbidden.length).toBeGreaterThanOrEqual(8);
    for (const rule of depcruiseConfig.forbidden) {
      expect(rule.name, rule.name).toContain(graph.PREFIX);
    }
  });
  it('reglas de ESLint', () => {
    const blocks = graph.eslintConfigs();
    expect(blocks.length).toBeGreaterThanOrEqual(7);
    for (const block of blocks) {
      const rule = block.rules['@typescript-eslint/no-restricted-imports'] as [string, { patterns: { message: string }[] }];
      for (const pattern of rule[1].patterns) {
        expect(pattern.message, block.name).toContain(graph.PREFIX);
      }
    }
  });
});
