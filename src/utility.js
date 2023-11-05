import Parser from "./parser.js";

export const equals = function (column, value) {
  return new Parser()
    .equals(column, value)
    .build();
};

export const notEquals = function (column, value) {
  return new Parser()
    .notEquals(column, value)
    .build();
};

export const lessThan = function (column, value) {
  return new Parser()
    .lessThan(column, value)
    .build();
};

export const lessThanOrEqualTo = function (column, value) {
  return new Parser()
    .lessThanOrEqualTo(column, value)
    .build();
};

export const greaterThan = function (column, value) {
  return new Parser()
    .greaterThan(column, value)
    .build();
};

export const greaterThanOrEqualTo = function (column, value) {
  return new Parser()
    .greaterThanOrEqual(column, value)
    .build();
};

export const isOneOf = function (column, values) {
  return new Parser()
    .isOneOf(column, values)
    .build();
};

export const isNotOneOf = function (column, values) {
  return new Parser()
    .isNotOneOf(column, values)
    .build();
};

export const is = function (column, value) {
  return new Parser()
    .is(column, value)
    .build();
};

export const isNot = function (column, value) {
  return new Parser()
    .isNot(column, value)
    .build();
};

export const like = function (column, value) {
  return new Parser()
    .like(column, value)
    .build();
};

export const notLike = function (column, value) {
  return new Parser()
    .notLike(column, value)
    .build();
};

export const contains = function (column, values) {
  return new Parser()
    .contains(column, values)
    .build();
};

export const overlaps = function (column, values) {
  return new Parser()
    .overlaps(column, values)
    .build();
};

export const any = function (column, value) {
  return new Parser()
    .any(column, value)
    .build();
};

export const notAny = function (column, value) {
  return new Parser()
    .notAny(column, value)
    .build();
};

export const ilike = function (column, value) {
  return new Parser()
    .ilike(column, value)
    .build();
};

export const notIlike = function (column, value) {
  return new Parser()
    .notIlike(column, value)
    .build();
};

export const and = function (...params) {
  return new Parser()
    .and(...params)
    .build();
};

export const or = function (...params) {
  return new Parser()
    .or(...params)
    .build();
};