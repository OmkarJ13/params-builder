import type { Subtract } from "../../node_modules/ts-arithmetic/dist/ts-arithmetic";

type Primitive =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | Date
  | Date[]
  | null
  | undefined;

type FlattenIntoPairs<
  V,
  Prefix extends string = "",
  // Max depth is 3, Platform API doesn't support more than 3 levels of nesting
  D extends number = 3,
  T = Required<V>,
> = D extends 0
  ? never
  : {
      [K in keyof T]: T[K] extends Primitive
        ? [`${Prefix}${K & string}`, T[K]]
        : T[K] extends Array<infer U>
          ? U extends Primitive
            ? [`${Prefix}${K & string}`, U]
            : FlattenIntoPairs<
                U,
                `${Prefix}${K & string}${"->0->"}`,
                Subtract<D, 1>
              >
          : FlattenIntoPairs<
              T[K],
              `${Prefix}${K & string}${"->"}`,
              Subtract<D, 1>
            >;
    }[keyof T];

export type Flatten<T> = { [P in FlattenIntoPairs<T> as P[0]]: P[1] };
