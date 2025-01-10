import { isActive } from '@utils/header';

describe('isActive function', () => {
  test("it returns 'active' if isActive is true", () => {
    expect(isActive({ isActive: true })).toBe('active');
  });

  test("it returns '' if isActive is false", () => {
    expect(isActive({ isActive: false })).toBe('');
  });
});
