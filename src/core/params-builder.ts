import type { Flatten } from "../types/flatten";
import type { Params } from "../types/params";
import type { ArrayKeys } from "../types/array-keys";

export class ParamsBuilder<T extends Record<string, any>, V = Flatten<T>> {
  private params: Params<T> = {};

  equals<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `eq.${String(value)}`,
    };

    return this;
  }

  notEquals<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `neq.${String(value)}`,
    };

    return this;
  }

  lessThan<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `lt.${String(value)}`,
    };

    return this;
  }

  lessThanOrEqualTo<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `lte.${String(value)}`,
    };

    return this;
  }

  greaterThan<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `gt.${String(value)}`,
    };

    return this;
  }

  greaterThanOrEqualTo<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `gte.${String(value)}`,
    };

    return this;
  }

  isOneOf<K extends keyof V>(column: K, values: Array<V[K]>): this {
    this.params = {
      ...this.params,
      [column]: `in.(${values.join(",")})`,
    };

    return this;
  }

  isNotOneOf<K extends keyof V>(column: K, values: Array<V[K]>): this {
    this.params = {
      ...this.params,
      [column]: `not_in.(${values.join(",")})`,
    };

    return this;
  }

  is<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `is.${String(value)}`,
    };

    return this;
  }

  isNot<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `is_not.${String(value)}`,
    };

    return this;
  }

  like<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `like.${String(value)}`,
    };

    return this;
  }

  notLike<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `not_like.${String(value)}`,
    };

    return this;
  }

  ilike<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `ilike.${String(value)}`,
    };

    return this;
  }

  notIlike<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `not_ilike.${String(value)}`,
    };

    return this;
  }

  contains<K extends keyof ArrayKeys<V>>(
    column: K,
    values: ArrayKeys<V>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `cs.[${values.join(",")}]`,
    };

    return this;
  }

  overlaps<K extends keyof ArrayKeys<V>>(
    column: K,
    values: ArrayKeys<V>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `ov.[${values.join(",")}]`,
    };

    return this;
  }

  any<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `any.${String(value)}`,
    };

    return this;
  }

  notAny<K extends keyof V>(column: K, value: V[K]): this {
    this.params = {
      ...this.params,
      [column]: `not_any.${String(value)}`,
    };

    return this;
  }

  or(...params: Array<Params<T>>): this {
    this.params = {
      ...this.params,
      or: `(${this.combineParams(params)})`,
    };

    return this;
  }

  and(...params: Array<Params<T>>): this {
    this.params = {
      ...this.params,
      and: `(${this.combineParams(params)})`,
    };

    return this;
  }

  build(): Params<T> {
    return this.params;
  }

  private combineParams(params: Array<Params<T>>): string {
    const formattedParams = params.map((param) => {
      const key = Object.keys(param)[0];
      const value = param[key];
      return `${key}.${value}`;
    });

    return `${formattedParams.join(",")}`;
  }
}
