export type Maybe<T extends {}> = T | null | undefined;

export type Maybe2<T extends {wow: boolean}> = T | null | undefined;
type Example = Maybe2<{wow: true, hello: string}>

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
