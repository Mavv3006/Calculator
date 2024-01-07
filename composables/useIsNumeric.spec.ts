// @vitest-environment nuxt
import { assert, expect, test } from 'vitest'
import { useIsNumeric } from './useIsNumeric'

test('that "123" is numeric', () => {
    expect(useIsNumeric("123")).toBeTruthy();
})

test('123 to be numeric', () => {
    expect(useIsNumeric(123)).toBeTruthy();
})

test('that a string is not numeric', () => {
    expect(useIsNumeric("alsdfjkaös")).not.toBeTruthy();
})