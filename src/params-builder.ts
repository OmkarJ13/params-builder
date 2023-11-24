import { Flatten } from "./types/flatten";
import { Params } from "./types/params";

export class ParamsBuilder<T extends Record<string, any>, V = Flatten<T>> {
  private params: Params<T> = {};

  equals<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `eq.${value}`
    };

    return this;
  }

  notEquals<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `neq.${value}`
    };

    return this;
  }

  lessThan<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `lt.${value}`
    };

    return this;
  }

  lessThanOrEqualTo<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `lte.${value}`
    };

    return this;
  }

  greaterThan<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `gt.${value}`
    };

    return this;
  }

  greaterThanOrEqualTo<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `gte.${value}`
    };

    return this;
  }

  isOneOf<K extends keyof V>(column: K, values: V[K][]) {
    this.params = {
      ...this.params,
      [column]: `in.(${values.join(',')})`
    };

    return this;
  }

  isNotOneOf<K extends keyof V>(column: K, values: V[K][]) {
    this.params = {
      ...this.params,
      [column]: `not_in.(${values.join(',')})`
    };

    return this;
  }

  is<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `is.${value}`
    };

    return this;
  }

  isNot<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `is_not.${value}`
    };

    return this;
  }


  like<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `like.${value}`
    };

    return this;
  }

  notLike<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `not_like.${value}`
    };

    return this;
  }

  ilike<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `ilike.${value}`
    };

    return this;
  }

  notIlike<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `not_ilike.${value}`
    };

    return this;
  }

  contains<K extends keyof V>(column: K, values: V[K]) {
    this.params = {
      ...this.params,
      [column]: `cs.${values}`
    };

    return this;
  }

  overlaps<K extends keyof V>(column: K, values: V[K]) {
    this.params = {
      ...this.params,
      [column]: `ov.(${values})`
    };

    return this;
  }


  any<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `any.(${value})`
    };

    return this;
  }

  notAny<K extends keyof V>(column: K, value: V[K]) {
    this.params = {
      ...this.params,
      [column]: `not_any.(${value})`
    };

    return this;
  }

  or(...params: Params<T>[]) {
    this.params = {
      ...this.params,
      or: `(${this.combineParams(params)})`
    };

    return this;
  }

  and(...params: Params<T>[]) {
    this.params = {
      ...this.params,
      and: `(${this.combineParams(params)})`
    };

    return this;
  }

  build() {
    return this.params;
  }

  private combineParams(params: Params<T>[]) {
    const formattedParams = params.map((param) => {
      const key = Object.keys(param)[0];
      const value = param[key];
      return `${key}.${value}`;
    });

    return `(${formattedParams.join(',')})`;
  }
}