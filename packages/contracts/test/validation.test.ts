import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { compileSchema, validateAgainst } from '../src/index.js';

const SCHEMAS = new URL('../schemas/_smoke/', import.meta.url);

async function json(name: string): Promise<unknown> {
  return JSON.parse(await readFile(new URL(name, SCHEMAS), 'utf8')) as unknown;
}

describe('compileSchema (CA7)', async () => {
  const schema = (await json('smoke.schema.json')) as object;
  const valid = await json('valid.json');
  const invalid = await json('invalid.json');

  it('el fixture válido pasa', () => {
    expect(compileSchema(schema)(valid)).toEqual({ ok: true });
  });

  it('el fixture inválido falla con un diagnóstico por restricción, con ruta JSON Pointer', () => {
    const result = compileSchema(schema)(invalid);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    const keywords = result.diagnostics.map((d) => `${d.path} ${d.keyword}`);
    expect(keywords).toEqual([
      ' additionalProperties',
      '/extensions additionalProperties',
      '/name minLength',
      '/revision minimum',
      '/schema const',
      '/tags uniqueItems',
      '/tags/0 pattern',
    ]);
  });

  it('una propiedad desconocida en el núcleo se rechaza (núcleo cerrado, S11 l. 72)', () => {
    const result = validateAgainst(schema, { schema: '_smoke/smoke', revision: 1, name: 'x', extra: 1 });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.diagnostics).toEqual([
      {
        path: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'extra' },
      },
    ]);
  });

  it('una extensión namespaced se admite; una sin namespace no', () => {
    const base = { schema: '_smoke/smoke', revision: 1, name: 'x' };
    expect(validateAgainst(schema, { ...base, extensions: { 'acme.algo': {} } })).toEqual({ ok: true });
    const result = validateAgainst(schema, { ...base, extensions: { algo: {} } });
    expect(result.ok).toBe(false);
  });

  it('el diagnóstico es determinista: misma entrada, misma salida, entre llamadas y entre compilaciones', () => {
    const v1 = compileSchema(schema);
    const v2 = compileSchema(schema);
    const a = v1(invalid);
    const b = v1(invalid);
    const c = v2(invalid);
    expect(a).toEqual(b);
    expect(a).toEqual(c);
    expect(JSON.stringify(a)).toBe(JSON.stringify(c));
  });

  it('modo estricto: un schema con una palabra clave desconocida no compila', () => {
    expect(() => compileSchema({ type: 'object', propiedades: {} })).toThrow(/strict mode|unknown keyword/i);
  });
});
