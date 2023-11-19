export type Params<T> = {
  [K in keyof T]?: string;
} & {
  or?: string;
  and?: string;
}

export class ParamsBuilder<T extends Record<string, any>> {
  private params: Params<T> = {};

  equals<K extends keyof T>(column: K, value: T[K]): this {
    this.params = {
      ...this.params,
      [column]: `eq.${value}`
    };

    return this;
  }

  notEquals<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `neq.${value}`
    };

    return this;
  }

  lessThan<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `lt.${value}`
    };

    return this;
  }

  lessThanOrEqualTo<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `lte.${value}`
    };

    return this;
  }

  greaterThan<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `gt.${value}`
    };

    return this;
  }

  greaterThanOrEqualTo<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `gte.${value}`
    };

    return this;
  }

  isOneOf<K extends keyof T>(column: K, values: T[K][]) {
    this.params = {
      ...this.params,
      [column]: `in.(${values.join(',')})`
    };

    return this;
  }

  isNotOneOf<K extends keyof T>(column: K, values: T[K][]) {
    this.params = {
      ...this.params,
      [column]: `not_in.(${values.join(',')})`
    };

    return this;
  }

  is<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `is.${value}`
    };

    return this;
  }

  isNot<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `is_not.${value}`
    };

    return this;
  }


  like<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `like.${value}`
    };

    return this;
  }

  notLike<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `not_like.${value}`
    };

    return this;
  }

  ilike<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `ilike.${value}`
    };

    return this;
  }

  notIlike<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `not_ilike.${value}`
    };

    return this;
  }

  contains<K extends keyof T>(column: K, values: T[K]) {
    this.params = {
      ...this.params,
      [column]: `cs.${values.join(',')}`
    };

    return this;
  }

  overlaps<K extends keyof T>(column: K, values: T[K]) {
    this.params = {
      ...this.params,
      [column]: `ov.(${values.join(',')})`
    };

    return this;
  }


  any<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `any.(${value.join(',')})`
    };

    return this;
  }

  notAny<K extends keyof T>(column: K, value: T[K]) {
    this.params = {
      ...this.params,
      [column]: `not_any.(${value.join(',')})`
    };

    return this;
  }

  or(...params: Params<T>[]) {
    const formattedParams = params.map((param) => {
      const key = Object.keys(param)[0];
      // @ts-ignore
      // Fix this
      const value = param[key];
      return `${key}.${value}`;
    });

    this.params = {
      ...this.params,
      or: `(${formattedParams.join(',')})`
    };

    return this;
  }

  and(...params: Params<T>[]) {
    const formattedParams = params.map((param) => {
      const key = Object.keys(param)[0];
      // @ts-ignore
      // Fix this
      const value = param[key];
      return `${key}.${value}`;
    });

    this.params = {
      ...this.params,
      and: `(${formattedParams.join(',')})`
    };

    return this;
  }

  build() {
    return this.params;
  }
}