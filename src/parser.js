const Parser = function () {
  this._params = {};
};

Parser.prototype.equals = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `eq.${value}`
    }
  };

  return this;
};

Parser.prototype.notEquals = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `neq.${value}`
    }
  };

  return this;
}

Parser.prototype.lessThan = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `lt.${value}`
    }
  };

  return this;
}

Parser.prototype.lessThanOrEqualTo = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `lte.${value}`
    }
  };

  return this;
}

Parser.prototype.greaterThan = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `gt.${value}`
    }
  };

  return this;
}

Parser.prototype.greaterThanOrEqualTo = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `gte.${value}`
    }
  };

  return this;
}

Parser.prototype.isOneOf = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `in.(${values.join(',')})`
    }
  };

  return this;
}

Parser.prototype.isNotOneOf = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_in.(${values.join(',')})`
    }
  };

  return this;
}

Parser.prototype.is = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `is.${value}`
    }
  };

  return this;
}

Parser.prototype.isNot = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `is_not.${value}`
    }
  };

  return this;
}

Parser.prototype.like = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `like.%${value}%`
    }
  };

  return this;
}

Parser.prototype.notLike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_like.%${value}% `
    }
  };

  return this;
}

Parser.prototype.ilike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `ilike.%${value}% `
    }
  };

  return this;
}

Parser.prototype.notIlike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_ilike.%${value}% `
    }
  };

  return this;
}

Parser.prototype.contains = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `cs.${values.join(',')}`
    }
  };

  return this;
}

Parser.prototype.overlaps = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `ov.(${values.join(',')})`
    }
  };

  return this;
}

Parser.prototype.any = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `any.${value}`
    }
  };

  return this;
}

Parser.prototype.notAny = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_any.${value}`
    }
  };

  return this;
}

Parser.prototype.or = function (..._params) {
  const orFormattedParams = _params.map((param) => {
    const key = Object.keys(param)[0];
    const value = param[key];
    return `${key}.${value}`;
  });

  this._params = {
    ...this._params,
    ...{
      or: `(${orFormattedParams.join(',')})`
    }
  };

  return this;
}

Parser.prototype.and = function (..._params) {
  const andFormattedParams = _params.map((param) => {
    const key = Object.keys(param)[0];
    const value = param[key];
    return `${key}.${value}`;
  });

  this._params = {
    ...this._params,
    ...{
      and: `(${andFormattedParams.join(',')})`
    }
  };

  return this;
}

Parser.prototype.build = function () {
  return this._params;
}

export default Parser;