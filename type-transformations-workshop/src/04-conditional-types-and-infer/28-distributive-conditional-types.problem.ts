import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type GetAppleOrBanana<T> = T extends  "apple" | "banana" ? T : never

type AppleOrBanana = GetAppleOrBanana<Fruit>;
type AppleOrBanana2 = Fruit extends infer T ? T extends "apple" | "banana" ? T : never : never;

type Test = AppleOrBanana
type Test2 = AppleOrBanana2

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
