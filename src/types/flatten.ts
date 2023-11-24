import { Subtract } from "../../node_modules/ts-arithmetic/dist/ts-arithmetic";

type Primitive = string | string[] | number | number[] | boolean | boolean[] | Date | Date[] | null | undefined;

type FlattenIntoPairs<V, Prefix extends string = '', D extends number = 5, T = Required<V>> = D extends 0 ? never : {
  [K in keyof T]: T[K] extends Primitive
    ? [`${Prefix}${K & string}`, T[K]]
    : T[K] extends (infer U)[]
      ? U extends Primitive
        ? [`${Prefix}${K & string}`, U]
        : FlattenIntoPairs<U, `${Prefix}${K & string}${'->0->'}`, Subtract<D, 1>>
      : FlattenIntoPairs<T[K], `${Prefix}${K & string}${'->'}`, Subtract<D, 1>>
}[keyof T];

export type Flatten<T> = {[P in FlattenIntoPairs<T> as P[0]]: P[1]};