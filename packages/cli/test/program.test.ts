import { describe, expect, it } from 'vitest';
import { buildProgram, readPackageInfo } from '../src/index.js';

describe('programa t800r (CA9)', () => {
  it('lee el manifiesto del package', () => {
    const info = readPackageInfo();
    expect(info.name).toBe('@t800r/cli');
    expect(info.version).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('--version imprime la versión del package y sale 0', () => {
    const program = buildProgram({ name: '@t800r/cli', version: '1.2.3' }).exitOverride();
    let out = '';
    program.configureOutput({ writeOut: (s) => void (out += s) });
    expect(() => program.parse(['node', 't800r', '--version'])).toThrow(expect.objectContaining({ exitCode: 0 }));
    expect(out.trim()).toBe('1.2.3');
  });
});
