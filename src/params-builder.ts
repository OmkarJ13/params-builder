// TODO: Move this whole thing to classes

const ParamsBuilder = function () {
  this._params = {};
};

ParamsBuilder.prototype.equals = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `eq.${value}`
    }
  };

  return this;
};

ParamsBuilder.prototype.notEquals = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `neq.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.lessThan = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `lt.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.lessThanOrEqualTo = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `lte.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.greaterThan = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `gt.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.greaterThanOrEqualTo = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `gte.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.isOneOf = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `in.(${values.join(',')})`
    }
  };

  return this;
}

ParamsBuilder.prototype.isNotOneOf = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_in.(${values.join(',')})`
    }
  };

  return this;
}

ParamsBuilder.prototype.is = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `is.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.isNot = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `is_not.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.like = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `like.%${value}%`
    }
  };

  return this;
}

ParamsBuilder.prototype.notLike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_like.%${value}% `
    }
  };

  return this;
}

ParamsBuilder.prototype.ilike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `ilike.%${value}% `
    }
  };

  return this;
}

ParamsBuilder.prototype.notIlike = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_ilike.%${value}% `
    }
  };

  return this;
}

ParamsBuilder.prototype.contains = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `cs.${values.join(',')}`
    }
  };

  return this;
}

ParamsBuilder.prototype.overlaps = function (column, values) {
  this._params = {
    ...this._params,
    ...{
      [column]: `ov.(${values.join(',')})`
    }
  };

  return this;
}

ParamsBuilder.prototype.any = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `any.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.notAny = function (column, value) {
  this._params = {
    ...this._params,
    ...{
      [column]: `not_any.${value}`
    }
  };

  return this;
}

ParamsBuilder.prototype.or = function (..._params) {
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

ParamsBuilder.prototype.and = function (..._params) {
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

ParamsBuilder.prototype.build = function () {
  return this._params;
}

export default ParamsBuilder;