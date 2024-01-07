// @vitest-environment nuxt
import { assert, expect, test } from 'vitest'

test('evaluate 2 + 3 = 5',()=>{
    let result = useCalculator("2+3");

    expect(result).toBe(5);
});