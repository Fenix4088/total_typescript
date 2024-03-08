import { Equal, Expect } from "../helpers/type-utils";

type ConfigObj<TConfig extends object> = {
  [K in keyof TConfig]: (name: K) => void;
}

export function makeEventHandlers<TConfig extends object>(obj: ConfigObj<TConfig>) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
