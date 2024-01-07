// @vitest-environment nuxt
import { assert, expect, test } from 'vitest'
import { useCreateStack } from './useCreateStack';

test('creating stack', () => {
    let stack = useCreateStack('2+3');

    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.top()).toBe("2");
    stack.pop();
    expect(stack.top()).toBe('+');
    stack.pop();
    expect(stack.top()).toBe('3');
})