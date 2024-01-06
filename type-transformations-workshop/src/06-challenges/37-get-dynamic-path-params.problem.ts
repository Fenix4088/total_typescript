import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type Split<S extends string, D extends string> =
    string extends S ? string[] :
        S extends '' ? [] :
            S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type test = Split<UserPath, '/'>
type test2 = Split<UserOrganisationPath, '/'>

type ExtractPathParams<Path extends string> = {
  [K in Split<Path, '/'>[number] as K extends `:${infer Key}` ? Key : never]: string
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
