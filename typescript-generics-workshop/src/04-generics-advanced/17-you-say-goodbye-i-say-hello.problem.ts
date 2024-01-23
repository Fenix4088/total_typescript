import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type HelloOrGoodbye<TGreeting extends "hello" | "goodbye"> = TGreeting extends "hello" ? "goodbye" : "hello" 

function youSayGoodbyeISayHello<TGreeting extends "hello" | "goodbye">(greeting: TGreeting)  {
  return (greeting === "goodbye" ? "hello" : "goodbye") as HelloOrGoodbye<TGreeting>;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
