import { test, expect } from 'vitest';
import sum from './sum';

test('sum two numbers', () => {
    expect(sum(4, 7)).toBe(11);
});