import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';

type Example = YouSayGoodbyeAndISayHello<"hello">;
type Example2 = YouSayGoodbyeAndISayHello<"goodbye">

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
