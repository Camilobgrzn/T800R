import { describe, expect, it } from 'vitest';
import { PACKAGE_NAME } from '../src/index.js';

describe('@t800r/runtime', () => {
  it('exporta su nombre de package', () => {
    expect(PACKAGE_NAME).toBe('@t800r/runtime');
  });
});
