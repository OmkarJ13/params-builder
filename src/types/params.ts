export type Params<T> = {
  [K in keyof T]?: string;
} & {
  or?: string;
  and?: string;
};