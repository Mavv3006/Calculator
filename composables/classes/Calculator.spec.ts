// @vitest-environment nuxt
import { assert, expect, test } from "vitest";
import { Calculator } from "./Calculator";

test("constructor", () => {
  let calculator = new Calculator("2+3");

  expect(calculator.mArguments.isEmpty()).toBeTruthy();
  expect(calculator.mOperators.isEmpty()).toBeTruthy();
  expect(calculator.mTokens.isEmpty()).not.toBeTruthy();
});

test("eval 2 + 3 = 5", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(3);
  calculator.mOperators.push("+");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(5);
});

test("eval 2 - 3 = -1", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(3);
  calculator.mOperators.push("-");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(-1);
});

test("eval 2 * 3 = 6", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(3);
  calculator.mOperators.push("*");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(6);
});

test("eval 2 / 4 = 0.5", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(4);
  calculator.mOperators.push("/");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(0.5);
});

test("eval 5 % 3 = 2", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(5);
  calculator.mArguments.push(3);
  calculator.mOperators.push("%");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(2);
});

test("eval 2 ** 3 = 8", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(3);
  calculator.mOperators.push("**");

  calculator.popAndEvaluate();

  let result = calculator.mArguments.top();

  expect(result).toBe(8);
});

test("eval other operator", () => {
  let calculator = new Calculator("2+3");

  calculator.mArguments.push(2);
  calculator.mArguments.push(3);
  calculator.mOperators.push("asfd*");

  expect(() => calculator.popAndEvaluate()).toThrowError();
});

test('evaluate 2 + 3 = 5',()=>{
    let calculator = new Calculator("2+3");

    let result = calculator.evaluate();

    expect(result).toBe(5);
});

test('evaluate 23+5*(4/2)**3',()=>{
    let calculator = new Calculator("23+5*(4/2)**3");

    let result = calculator.evaluate();

    expect(result).toBe(63);
});