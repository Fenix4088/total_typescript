import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type GetIdKey<K> = K extends 'id' | `${string}Id` ? K : never;

type OnlyIdKeys<T> = {
    [K in keyof T as GetIdKey<K>]: T[K]
};


let test: OnlyIdKeys<Example> = {
    id: 'string',
    organisationId: 'string',
    groupId: 'string',
}

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
