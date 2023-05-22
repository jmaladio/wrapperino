import { test, expect } from 'vitest';
import subtract from './subtract';

test('subtract two numbers', () => {
    expect(subtract(7, 4)).toBe(3);
});