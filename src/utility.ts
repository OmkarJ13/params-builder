import ParamsBuilder from "./params-builder";

export const equals = function (column, value) {
  return new ParamsBuilder()
    .equals(column, value)
    .build();
};

export const notEquals = function (column, value) {
  return new ParamsBuilder()
    .notEquals(column, value)
    .build();
};

export const lessThan = function (column, value) {
  return new ParamsBuilder()
    .lessThan(column, value)
    .build();
};

export const lessThanOrEqualTo = function (column, value) {
  return new ParamsBuilder()
    .lessThanOrEqualTo(column, value)
    .build();
};

export const greaterThan = function (column, value) {
  return new ParamsBuilder()
    .greaterThan(column, value)
    .build();
};

export const greaterThanOrEqualTo = function (column, value) {
  return new ParamsBuilder()
    .greaterThanOrEqualTo(column, value)
    .build();
};

export const isOneOf = function (column, values) {
  return new ParamsBuilder()
    .isOneOf(column, values)
    .build();
};

export const isNotOneOf = function (column, values) {
  return new ParamsBuilder()
    .isNotOneOf(column, values)
    .build();
};

export const is = function (column, value) {
  return new ParamsBuilder()
    .is(column, value)
    .build();
};

export const isNot = function (column, value) {
  return new ParamsBuilder()
    .isNot(column, value)
    .build();
};

export const like = function (column, value) {
  return new ParamsBuilder()
    .like(column, value)
    .build();
};

export const notLike = function (column, value) {
  return new ParamsBuilder()
    .notLike(column, value)
    .build();
};

export const contains = function (column, values) {
  return new ParamsBuilder()
    .contains(column, values)
    .build();
};

export const overlaps = function (column, values) {
  return new ParamsBuilder()
    .overlaps(column, values)
    .build();
};

export const any = function (column, value) {
  return new ParamsBuilder()
    .any(column, value)
    .build();
};

export const notAny = function (column, value) {
  return new ParamsBuilder()
    .notAny(column, value)
    .build();
};

export const ilike = function (column, value) {
  return new ParamsBuilder()
    .ilike(column, value)
    .build();
};

export const notIlike = function (column, value) {
  return new ParamsBuilder()
    .notIlike(column, value)
    .build();
};

export const and = function (...params) {
  return new ParamsBuilder()
    .and(...params)
    .build();
};

export const or = function (...params) {
  return new ParamsBuilder()
    .or(...params)
    .build();
};