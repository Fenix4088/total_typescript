import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";


//!------Solution 1 (generics)----------
/* type Run<RunResult> = () =>  RunResult;

type Generator<RunResult> = {
  run: Run<RunResult>
} | Run<RunResult>

function runGenerator<RunResult>(generator: Generator<RunResult>) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
} 
*/

//!------Solution 2 (overloads)----------
function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: { run: () => string } | (() => string)) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
