import { Equal, Expect } from "../helpers/type-utils";

/**
 * This time, let's solve this with function overloads!
 */

type ReturnWhatIPass = {
  (p: 1): 1;
  (p: "matt"): "matt"
}
const returnWhatIPassIn: ReturnWhatIPass = (t: any) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
