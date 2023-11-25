export type ArrayKeys<T> = {
  [K in keyof T as T[K] extends any[] ? K : never]: T[K] extends any[]
    ? T[K]
    : never;
};
