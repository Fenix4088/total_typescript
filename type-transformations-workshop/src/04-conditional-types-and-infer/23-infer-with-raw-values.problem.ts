import { Equal, Expect } from "../helpers/type-utils";

type GetDataValue<T> = T extends Record<string, infer TData> ? TData : never;
type GetDataValue2<T> = T extends { data: infer TData} ? TData : never;

type foo = GetDataValue<string>


type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
