// This is only to have an example for testing,
// Once we have real examples, this can be removed
import { test, expect } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

test("add 2 numbers", () => {
  expect(sum(2, 3)).toEqual(5);
});
