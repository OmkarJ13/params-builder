import {
  and,
  any,
  contains,
  equals,
  greaterThan,
  greaterThanOrEqualTo,
  ilike,
  is,
  isNot,
  isNotOneOf,
  isOneOf,
  lessThan,
  lessThanOrEqualTo,
  like,
  notAny,
  notEquals,
  notIlike,
  notLike,
  or,
  overlaps,
} from "../src/utils/operators";

describe("operators", () => {
  it("equals(): should build equals params", () => {
    const params = equals("key", "value");
    expect(params).toEqual({ key: "eq.value" });
  });

  it("notEquals(): should build not equals params", () => {
    const params = notEquals("key", "value");
    expect(params).toEqual({ key: "neq.value" });
  });

  it("greaterThan(): should build greater than params", () => {
    const params = greaterThan("key", 10);
    expect(params).toEqual({ key: "gt.10" });
  });

  it("greaterThanOrEqualTo(): should build greater than or equal to params", () => {
    const params = greaterThanOrEqualTo("key", 10);
    expect(params).toEqual({ key: "gte.10" });
  });

  it("lessThan(): should build less than params", () => {
    const params = lessThan("key", 10);
    expect(params).toEqual({ key: "lt.10" });
  });

  it("lessThanOrEqualTo(): should build less than or equal to params", () => {
    const params = lessThanOrEqualTo("key", 10);
    expect(params).toEqual({ key: "lte.10" });
  });

  it("isOneOf(): should build is one of params", () => {
    const params = isOneOf("key", ["value1", "value2"]);
    expect(params).toEqual({ key: "in.(value1,value2)" });
  });

  it("isNotOneOf(): should build is not one of params", () => {
    const params = isNotOneOf("key", ["value1", "value2"]);
    expect(params).toEqual({ key: "not_in.(value1,value2)" });
  });

  it("is(): should build is params", () => {
    const params = is("key", "value");
    expect(params).toEqual({ key: "is.value" });
  });

  it("isNot(): should build is not params", () => {
    const params = isNot("key", "value");
    expect(params).toEqual({ key: "is_not.value" });
  });

  it("like(): should build like params", () => {
    const params = like("key", "value");
    expect(params).toEqual({ key: "like.value" });
  });

  it("notLike(): should build not like params", () => {
    const params = notLike("key", "value");
    expect(params).toEqual({ key: "not_like.value" });
  });

  it("contains(): should build contains params", () => {
    const params = contains("key", ["value1", "value2"]);
    expect(params).toEqual({ key: "cs.[value1,value2]" });
  });

  it("overlaps(): should build overlaps params", () => {
    const params = overlaps("key", ["value1", "value2"]);
    expect(params).toEqual({ key: "ov.[value1,value2]" });
  });

  it("any(): should build any params", () => {
    const params = any("key", ["value1"]);
    expect(params).toEqual({ key: "any.value1" });
  });

  it("notAny(): should build not any params", () => {
    const params = notAny("key", ["value1"]);
    expect(params).toEqual({ key: "not_any.value1" });
  });

  it("ilike(): should build ilike params", () => {
    const params = ilike("key", "value");
    expect(params).toEqual({ key: "ilike.value" });
  });

  it("notIlike(): should build not ilike params", () => {
    const params = notIlike("key", "value");
    expect(params).toEqual({ key: "not_ilike.value" });
  });

  it("or(): should build or params", () => {
    const params1 = equals("key1", "value1");
    const params2 = equals("key2", "value2");

    const params = or(params1, params2);

    expect(params).toEqual({ or: "(key1.eq.value1,key2.eq.value2)" });
  });

  it("and(): should build and params", () => {
    const params1 = equals("key1", "value1");
    const params2 = equals("key2", "value2");

    const params = and(params1, params2);

    expect(params).toEqual({ and: "(key1.eq.value1,key2.eq.value2)" });
  });
});
