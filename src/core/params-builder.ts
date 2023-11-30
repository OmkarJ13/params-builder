import type { Flatten } from "../types/flatten";
import type { Params } from "../types/params";
import type { ArrayKeys, NonArrayKeys, RemoveArray } from "../types/array";

export class ParamsBuilder<
  T extends Record<string, any>,
  TFlattened = Flatten<T>,
  TArrayKeys = ArrayKeys<TFlattened>,
  TNonArrayKeys = NonArrayKeys<TFlattened>,
> {
  private params: Params<TFlattened> = {};

  equals<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `eq.${String(value)}`,
    };

    return this;
  }

  notEquals<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `neq.${String(value)}`,
    };

    return this;
  }

  lessThan<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `lt.${String(value)}`,
    };

    return this;
  }

  lessThanOrEqualTo<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `lte.${String(value)}`,
    };

    return this;
  }

  lessThanOrEqualToAbsolute<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `alte.${String(value)}`,
    };

    return this;
  }

  greaterThan<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `gt.${String(value)}`,
    };

    return this;
  }

  greaterThanOrEqualTo<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `gte.${String(value)}`,
    };

    return this;
  }

  greaterThanEqualToAbsolute<K extends keyof TNonArrayKeys>(
    column: K,
    value: TNonArrayKeys[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `agte.${String(value)}`,
    };

    return this;
  }

  isOneOf<K extends keyof TNonArrayKeys>(
    column: K,
    values: Array<TNonArrayKeys[K]>,
  ): this {
    this.params = {
      ...this.params,
      [column]: `in.(${values.join(",")})`,
    };

    return this;
  }

  isNotOneOf<K extends keyof TNonArrayKeys>(
    column: K,
    values: Array<TNonArrayKeys[K]>,
  ): this {
    this.params = {
      ...this.params,
      [column]: `not_in.(${values.join(",")})`,
    };

    return this;
  }

  is<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `is.${String(value)}`,
    };

    return this;
  }

  isNot<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `is_not.${String(value)}`,
    };

    return this;
  }

  like<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `like.${String(value)}`,
    };

    return this;
  }

  notLike<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `not_like.${String(value)}`,
    };

    return this;
  }

  ilike<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `ilike.${String(value)}`,
    };

    return this;
  }

  notIlike<K extends keyof TFlattened>(column: K, value: TFlattened[K]): this {
    this.params = {
      ...this.params,
      [column]: `not_ilike.${String(value)}`,
    };

    return this;
  }

  // This doesn't support objects yet, to add this as per use case
  contains<K extends keyof ArrayKeys<TFlattened>>(
    column: K,
    values: ArrayKeys<TFlattened>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `cs.[${values.join(",")}]`,
    };

    return this;
  }

  // This doesn't support objects yet, to add this as per use case
  containsOrIsNull<K extends keyof ArrayKeys<TFlattened>>(
    column: K,
    values: ArrayKeys<TFlattened>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `csn.[${values.join(",")}]`,
    };

    return this;
  }

  // This doesn't support objects yet, to add this as per use case
  containedBy<K extends keyof ArrayKeys<TFlattened>>(
    column: K,
    values: ArrayKeys<TFlattened>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `cd.[${values.join(",")}]`,
    };

    return this;
  }

  // This doesn't support objects yet, to add this as per use case
  notContainedBy<K extends keyof ArrayKeys<TFlattened>>(
    column: K,
    values: ArrayKeys<TFlattened>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `not_cd.[${values.join(",")}]`,
    };

    return this;
  }

  overlaps<K extends keyof ArrayKeys<TFlattened>>(
    column: K,
    values: ArrayKeys<TFlattened>[K],
  ): this {
    this.params = {
      ...this.params,
      [column]: `ov.[${values.join(",")}]`,
    };

    return this;
  }

  any<K extends keyof TArrayKeys>(
    column: K,
    value: RemoveArray<TArrayKeys[K]>,
  ): this {
    this.params = {
      ...this.params,
      [column]: `any.${String(value)}`,
    };

    return this;
  }

  notAny<K extends keyof TArrayKeys>(
    column: K,
    value: RemoveArray<TArrayKeys[K]>,
  ): this {
    this.params = {
      ...this.params,
      [column]: `not_any.${String(value)}`,
    };

    return this;
  }

  or(...params: Array<Params<TFlattened>>): this {
    this.params = {
      ...this.params,
      or: `(${this.combineParams(params)})`,
    };

    return this;
  }

  and(...params: Array<Params<TFlattened>>): this {
    this.params = {
      ...this.params,
      and: `(${this.combineParams(params)})`,
    };

    return this;
  }

  offset(by: number): this {
    this.params = {
      ...this.params,
      offset: by,
    };

    return this;
  }

  limit(by: number): this {
    this.params = {
      ...this.params,
      limit: by,
    };

    return this;
  }

  order<K extends keyof TFlattened>(
    column: K,
    direction: "asc" | "desc",
  ): this {
    const order = this.params.order ?? "";

    if (order === "") {
      this.params = {
        ...this.params,
        order: `${String(column)}.${direction}`,
      };
    } else {
      this.params = {
        ...this.params,
        order: `${order},${String(column)}.${direction}`,
      };
    }

    return this;
  }

  build(): Params<TFlattened> {
    return this.params;
  }

  private combineParams(params: Array<Params<TFlattened>>): string {
    const formattedParams = params.map((param) => {
      const key = Object.keys(param)[0] as keyof Params<TFlattened>;
      const value = param[key];

      return `${String(key)}.${value}`;
    });

    return `${formattedParams.join(",")}`;
  }
}
