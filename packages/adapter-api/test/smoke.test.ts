import { describe, expect, it } from 'vitest';
import { PACKAGE_NAME } from '../src/index.js';

describe('@t800r/adapter-api', () => {
  it('exporta su nombre de package', () => {
    expect(PACKAGE_NAME).toBe('@t800r/adapter-api');
  });
});
