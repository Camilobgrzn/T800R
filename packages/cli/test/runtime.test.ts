import { describe, expect, it } from 'vitest';
import { checkRuntime, majorOf, SUPPORTED_MAJOR } from '../src/index.js';

describe('checkRuntime (CA9)', () => {
  const recommended = '24.21.0';

  it('la major soportada es 24', () => {
    expect(SUPPORTED_MAJOR).toBe(24);
  });

  it('Node 24.x pasa sin diagnóstico', () => {
    expect(checkRuntime({ found: '24.21.0', recommended })).toEqual({ ok: true });
    expect(checkRuntime({ found: '24.0.0', recommended })).toEqual({ ok: true });
  });

  it('otra major produce un diagnóstico que nombra la versión soportada y la encontrada', () => {
    for (const found of ['25.8.2', '22.14.0', '26.0.0']) {
      const result = checkRuntime({ found, recommended });
      expect(result.ok).toBe(false);
      if (result.ok) continue;
      expect(result.message).toContain('Node 24.x');
      expect(result.message).toContain(recommended);
      expect(result.message).toContain(found);
      expect(result.message).toContain('Remediación:');
    }
  });

  it('una versión ilegible no pasa', () => {
    expect(majorOf('')).toBe(-1);
    expect(checkRuntime({ found: 'x', recommended }).ok).toBe(false);
  });
});
