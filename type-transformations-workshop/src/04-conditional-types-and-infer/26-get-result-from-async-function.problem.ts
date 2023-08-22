import { Await } from "ts-toolbelt/out/Any/Await";
import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFunction<T extends () => Promise<unknown>> = Await<ReturnType<T>> extends {props: infer Payload} ? Payload : never;

type InferPropsFromServerSideFunction2<T> = T extends () => Promise<{props: infer P}>? P : never;


type Test = InferPropsFromServerSideFunction<typeof getServerSideProps>
type Test2 = InferPropsFromServerSideFunction2<typeof getServerSideProps>

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
