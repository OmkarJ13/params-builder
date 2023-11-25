import { ParamsBuilder } from "../params-builder";

describe("ParamsBuilder", () => {
  it("should initialise params", () => {
    const params = new ParamsBuilder().build();

    expect(params).toEqual({});
  });

  it("should build equals params", () => {
    const params = new ParamsBuilder().equals("key", "value").build();

    expect(params).toEqual({ key: "eq.value" });
  });

  it("should build not equals params", () => {
    const params = new ParamsBuilder().notEquals("key", "value").build();

    expect(params).toEqual({ key: "neq.value" });
  });

  it("should build greater than params", () => {
    const params = new ParamsBuilder().greaterThan("key", 10).build();

    expect(params).toEqual({ key: "gt.10" });
  });

  it("should build greater than or equal to params", () => {
    const params = new ParamsBuilder().greaterThanOrEqualTo("key", 10).build();

    expect(params).toEqual({ key: "gte.10" });
  });

  it("should build less than params", () => {
    const params = new ParamsBuilder().lessThan("key", 10).build();

    expect(params).toEqual({ key: "lt.10" });
  });

  it("should build less than or equal to params", () => {
    const params = new ParamsBuilder().lessThanOrEqualTo("key", 10).build();

    expect(params).toEqual({ key: "lte.10" });
  });

  it("should build is one of params", () => {
    const params = new ParamsBuilder()
      .isOneOf("key", ["value1", "value2"])
      .build();

    expect(params).toEqual({ key: "in.(value1,value2)" });
  });

  it("should build is not one of params", () => {
    const params = new ParamsBuilder()
      .isNotOneOf("key", ["value1", "value2"])
      .build();

    expect(params).toEqual({ key: "not_in.(value1,value2)" });
  });

  it("should build is params", () => {
    const params = new ParamsBuilder().is("key", "value").build();

    expect(params).toEqual({ key: "is.value" });
  });

  it("should build is not params", () => {
    const params = new ParamsBuilder().isNot("key", "value").build();

    expect(params).toEqual({ key: "is_not.value" });
  });

  it("should build like params", () => {
    const params = new ParamsBuilder().like("key", "value").build();

    expect(params).toEqual({ key: "like.value" });
  });

  it("should build not like params", () => {
    const params = new ParamsBuilder().notLike("key", "value").build();

    expect(params).toEqual({ key: "not_like.value" });
  });

  it("should build ilike params", () => {
    const params = new ParamsBuilder().ilike("key", "value").build();

    expect(params).toEqual({ key: "ilike.value" });
  });

  it("should build not ilike params", () => {
    const params = new ParamsBuilder().notIlike("key", "value").build();

    expect(params).toEqual({ key: "not_ilike.value" });
  });

  it("should build contains params", () => {
    const params = new ParamsBuilder()
      .contains("key", ["value1", "value2"])
      .build();

    expect(params).toEqual({ key: "cs.[value1,value2]" });
  });

  it("should build overlaps params", () => {
    const params = new ParamsBuilder()
      .overlaps("key", ["value1", "value2"])
      .build();

    expect(params).toEqual({ key: "ov.[value1,value2]" });
  });

  it("should build any params", () => {
    const params = new ParamsBuilder().any("key", "value").build();

    expect(params).toEqual({ key: "any.value" });
  });

  it("should build not any params", () => {
    const params = new ParamsBuilder().notAny("key", "value").build();

    expect(params).toEqual({ key: "not_any.value" });
  });

  it("should build or params", () => {
    const params1 = new ParamsBuilder().equals("key1", "value1").build();
    const params2 = new ParamsBuilder().equals("key2", "value2").build();

    const params = new ParamsBuilder().or(params1, params2).build();

    expect(params).toEqual({ or: "(key1.eq.value1,key2.eq.value2)" });
  });

  it("should build and params", () => {
    const params1 = new ParamsBuilder().equals("key1", "value1").build();
    const params2 = new ParamsBuilder().equals("key2", "value2").build();

    const params = new ParamsBuilder().and(params1, params2).build();

    expect(params).toEqual({ and: "(key1.eq.value1,key2.eq.value2)" });
  });
});
