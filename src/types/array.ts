export type ArrayKeys<T> = {
  [K in keyof T as T[K] extends any[] ? K : never]: T[K] extends any[]
    ? T[K]
    : never;
};

export type NonArrayKeys<T> = Omit<T, keyof ArrayKeys<T>>;

export type RemoveArray<T> = T extends Array<infer U> ? U : never;
