import { ParamsBuilder } from "../core/params-builder";
import type { Params } from "../types/params";
import type { Flatten } from "../types/flatten";
import type { ArrayKeys } from "../types/array-keys";

// Need to figure out some way to cleanup this long template parameter, by using type variables
export function equals<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().equals(column, value).build();
}

export function notEquals<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().notEquals(column, value).build();
}

export function lessThan<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().lessThan(column, value).build();
}

export function lessThanOrEqualTo<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().lessThanOrEqualTo(column, value).build();
}

export function greaterThan<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().greaterThan(column, value).build();
}

export function greaterThanOrEqualTo<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().greaterThanOrEqualTo(column, value).build();
}

export function isOneOf<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, values: Array<Flatten<T>[K]>): Params<T> {
  return new ParamsBuilder<T>().isOneOf(column, values).build();
}

export function isNotOneOf<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, values: Array<Flatten<T>[K]>): Params<T> {
  return new ParamsBuilder<T>().isNotOneOf(column, values).build();
}

export function is<T extends Record<string, any>, K extends keyof Flatten<T>>(
  column: K,
  value: Flatten<T>[K],
): Params<T> {
  return new ParamsBuilder<T>().is(column, value).build();
}

export function isNot<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().isNot(column, value).build();
}

export function like<T extends Record<string, any>, K extends keyof Flatten<T>>(
  column: K,
  value: Flatten<T>[K],
): Params<T> {
  return new ParamsBuilder<T>().like(column, value).build();
}

export function notLike<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().notLike(column, value).build();
}

export function contains<
  T extends Record<string, any>,
  K extends keyof ArrayKeys<Flatten<T>>,
>(column: K, value: ArrayKeys<Flatten<T>>[K]): Params<T> {
  return new ParamsBuilder<T>().contains(column, value).build();
}

export function overlaps<
  T extends Record<string, any>,
  K extends keyof ArrayKeys<Flatten<T>>,
>(column: K, value: ArrayKeys<Flatten<T>>[K]): Params<T> {
  return new ParamsBuilder<T>().overlaps(column, value).build();
}

export function any<T extends Record<string, any>, K extends keyof Flatten<T>>(
  column: K,
  value: Flatten<T>[K],
): Params<T> {
  return new ParamsBuilder<T>().any(column, value).build();
}

export function notAny<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().notAny(column, value).build();
}

export function ilike<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().ilike(column, value).build();
}

export function notIlike<
  T extends Record<string, any>,
  K extends keyof Flatten<T>,
>(column: K, value: Flatten<T>[K]): Params<T> {
  return new ParamsBuilder<T>().notIlike(column, value).build();
}

export function and<T extends Record<string, any>>(
  ...params: Array<Params<Flatten<T>>>
): Params<T> {
  return new ParamsBuilder().and(...params).build();
}

export function or<T extends Record<string, any>>(
  ...params: Array<Params<Flatten<T>>>
): Params<T> {
  return new ParamsBuilder().or(...params).build();
}
