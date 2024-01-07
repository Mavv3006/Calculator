// @vitest-environment nuxt
import { assert, expect, test } from "vitest";
import { Stack } from "./Stack";

test("top of stack - throw error", () => {
  let stack = new Stack<string>();
  expect(() => stack.top()).toThrowError("top of empty stack");
});

test("top of stack - 1 element", () => {
  let stack = new Stack<string>();
  stack.push("test");
  expect(stack.top()).toBe("test");
});

test("top of stack - 2 elements", () => {
  let stack = new Stack<string>();
  stack.push("1");
  stack.push("2");
  expect(stack.top()).toBe("2");
});

test("is empty when not empty", () => {
  let stack = new Stack<string>();
  stack.push("test");
  expect(stack.isEmpty()).toBeFalsy();
});

test("is empty when empty", () => {
  let stack = new Stack<string>();
  expect(stack.isEmpty()).toBeTruthy();
});

test("copying stacks", () => {
  let stack = new Stack<string>();
  stack.push("1");
  stack.push("2");

  let stack2 = stack.copy();

  expect(stack.top()).toBe("2");
  stack.pop();
  expect(stack.top()).toBe("1");

  expect(stack2.top()).toBe("2");
  stack2.pop();
  expect(stack2.top()).toBe("1");
});

test("pushing works", () => {
  let stack = new Stack<number>();
  expect(stack.isEmpty()).toBeTruthy();

  stack.push(2);

  expect(stack.isEmpty()).not.toBeTruthy();
});

test('error when popping without elements', ()=>{
    let stack = new Stack();

    expect(()=>stack.pop()).toThrowError();
})