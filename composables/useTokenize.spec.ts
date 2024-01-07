// @vitest-environment nuxt
import { assert, expect, test } from "vitest";

test('tokenize "2+3"', () => {
  expect(useTokenize("2+3")).toStrictEqual(["3", "+", "2"]);
});

test('tokenize "23+4-5*(23/2)"', () => {
  expect(useTokenize("23+4-5*(23/2)")).toStrictEqual([
    ")",
    "2",
    "/",
    "23",
    "(",
    "*",
    "5",
    "-",
    "4",
    "+",
    "23",
  ]);
});
