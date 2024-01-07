// @vitest-environment nuxt
import { assert, expect, test } from "vitest";
import { useEvalBefore } from "./useEvalBefore";

test("( => false", () => {
  expect(useEvalBefore("(", "")).toBeFalsy();
});

test("o1 > o2 => true", () => {
  expect(useEvalBefore("*", "-")).toBeTruthy();
});

test("o1 = o2 => true", () => {
  expect(useEvalBefore('+','+')).toBeTruthy();
});

test("o1 = o2 => true (2)", () => {
  expect(useEvalBefore('+','-')).toBeTruthy();
});

test("o1 < o2 => false", () => {
  expect(useEvalBefore('+','**')).toBeFalsy();
});
