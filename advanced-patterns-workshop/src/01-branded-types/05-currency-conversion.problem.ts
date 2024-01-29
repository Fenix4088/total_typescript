import { describe, it } from "vitest";
import { Brand } from "../helpers/Brand";

interface User {
  id: string;
  name: string;
  maxConversionAmount: number;
}

type AuthUser = Brand<User, 'User'>
type ConvertedAmout = Brand<number, 'ConvertedAmount'>;

// Mocks a function that uses an API to convert
// One currency to another
const getConversionRateFromApi = async (
  amount: number,
  from: string,
  to: string,
): Promise<ConvertedAmout> => {
  return Promise.resolve((amount * 0.82) as ConvertedAmout);
};

// Mocks a function which actually performs the conversion
const performConversion = async (user: AuthUser, to: string, amount: ConvertedAmout) => {};

const ensureUserCanConvert = (user: User, amount: ConvertedAmout): AuthUser => {
  if (user.maxConversionAmount < amount) {
    throw new Error("User cannot convert currency");
  }

  return user as AuthUser;
};

describe("Possible implementations", () => {
  it("Should error if you do not authorize the user first", () => {
    const handleConversionRequest = async (
      user: User,
      from: string,
      to: string,
      amount: number,
    ) => {
      const convertedAmount = await getConversionRateFromApi(amount, from, to);

      // @ts-expect-error
      await performConversion(user, to, convertedAmount);
    };
  });

  it("Should error if you do not convert the amount first", () => {
    const handleConversionRequest = async (
      user: User,
      from: string,
      to: string,
      amount: number,
    ) => {
      // @ts-expect-error
      const authorizedUser = ensureUserCanConvert(user, amount);

      // @ts-expect-error
      await performConversion(authorizedUser, to, amount);
    };
  });

  it("Should pass type checking if you authorize the user AND convert the amount", () => {
    const handleConversionRequest = async (
      user: User,
      from: string,
      to: string,
      amount: number,
    ) => {
      const convertedAmount = await getConversionRateFromApi(amount, from, to);
      const authorizedUser = ensureUserCanConvert(user, convertedAmount);

      await performConversion(authorizedUser, to, convertedAmount);
    };
  });
});
