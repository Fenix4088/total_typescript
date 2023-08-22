import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends () => infer Result 
? Result 
: T extends {[K in keyof T]: infer Result} 
? Result extends () => unknown 
? ReturnType<Result> 
: never : never;

type GetParserResult2<T> = T extends | {
  parse: () => infer Result,
} | {
  extract: () => infer Result,
} | (() => infer Result) ? Result : never;

type Test = GetParserResult<typeof parser3>

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
