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

export const lessThanOrEqual = function (column, value) {
  return new Parser()
    .lessThanOrEqual(column, value)
    .build();
};

export const greaterThan = function (column, value) {
  return new Parser()
    .greaterThan(column, value)
    .build();
};

export const greaterThanOrEqual = function (column, value) {
  return new Parser()
    .greaterThanOrEqual(column, value)
    .build();
};

export const oneOf = function (column, values) {
  return new Parser()
    .oneOf(column, values)
    .build();
};

export const notOneOf = function (column, values) {
  return new Parser()
    .notOneOf(column, values)
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