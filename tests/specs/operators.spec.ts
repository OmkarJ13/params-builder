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
} from "../../src/utils/operators";
import { Expense, ExpenseState, Project } from "../types/expense";

describe("operators", () => {
  it("equals(): should build equals params", () => {
    const params = equals<Expense, "is_billable">("is_billable", true);
    expect(params).toEqual({ is_billable: "eq.true" });
  });

  it("notEquals(): should build not equals params", () => {
    const params = notEquals<Expense, "is_billable">("is_billable", false);
    expect(params).toEqual({ is_billable: "neq.false" });
  });

  it("greaterThan(): should build greater than params", () => {
    const params = greaterThan<Expense, "amount">("amount", 10);
    expect(params).toEqual({ amount: "gt.10" });
  });

  it("greaterThanOrEqualTo(): should build greater than or equal to params", () => {
    const params = greaterThanOrEqualTo<Expense, "amount">("amount", 10);
    expect(params).toEqual({ amount: "gte.10" });
  });

  it("lessThan(): should build less than params", () => {
    const params = lessThan<Expense, "amount">("amount", 10);
    expect(params).toEqual({ amount: "lt.10" });
  });

  it("lessThanOrEqualTo(): should build less than or equal to params", () => {
    const params = lessThanOrEqualTo<Expense, "amount">("amount", 10);
    expect(params).toEqual({ amount: "lte.10" });
  });

  it("isOneOf(): should build is one of params", () => {
    const params = isOneOf<Expense, "state">("state", [
      ExpenseState.PAID,
      ExpenseState.PAYMENT_PROCESSING,
    ]);
    expect(params).toEqual({ state: "in.(PAID,PAYMENT_PROCESSING)" });
  });

  it("isNotOneOf(): should build is not one of params", () => {
    const params = isNotOneOf<Expense, "state">("state", [
      ExpenseState.PAID,
      ExpenseState.PAYMENT_PROCESSING,
    ]);
    expect(params).toEqual({ state: "not_in.(PAID,PAYMENT_PROCESSING)" });
  });

  it("is(): should build is params", () => {
    const params = is<Expense, "is_billable">("is_billable", false);
    expect(params).toEqual({ is_billable: "is.false" });
  });

  it("isNot(): should build is not params", () => {
    const params = isNot<Expense, "is_billable">("is_billable", false);
    expect(params).toEqual({ is_billable: "is_not.false" });
  });

  it("like(): should build like params", () => {
    const params = like<Expense, "user_id">("user_id", "us062nev52gi");
    expect(params).toEqual({ user_id: "like.us062nev52gi" });
  });

  it("notLike(): should build not like params", () => {
    const params = notLike<Expense, "user_id">("user_id", "us062nev52gi");
    expect(params).toEqual({ user_id: "not_like.us062nev52gi" });
  });

  it("contains(): should build contains params", () => {
    const params = contains<Project, "category_ids">(
      "category_ids",
      [19232, 12315],
    );
    expect(params).toEqual({ category_ids: "cs.[19232,12315]" });
  });

  it("overlaps(): should build overlaps params", () => {
    const params = overlaps<Project, "category_ids">(
      "category_ids",
      [19232, 12315],
    );
    expect(params).toEqual({ category_ids: "ov.[19232,12315]" });
  });

  it("any(): should build any params", () => {
    const params = any<Project, "category_ids">("category_ids", 19232);
    expect(params).toEqual({ category_ids: "any.19232" });
  });

  it("notAny(): should build not any params", () => {
    const params = notAny<Project, "category_ids">("category_ids", 19232);
    expect(params).toEqual({ category_ids: "not_any.19232" });
  });

  it("ilike(): should build ilike params", () => {
    const params = ilike<Expense, "user_id">("user_id", "us062nev52gi");
    expect(params).toEqual({ user_id: "ilike.us062nev52gi" });
  });

  it("notIlike(): should build not ilike params", () => {
    const params = notIlike<Expense, "user_id">("user_id", "us062nev52gi");
    expect(params).toEqual({ user_id: "not_ilike.us062nev52gi" });
  });

  it("or(): should build or params", () => {
    const params1 = equals<Expense, "source_account_id">(
      "source_account_id",
      "acc1f90v1b4",
    );
    const params2 = equals<Expense, "is_reimbursable">(
      "is_reimbursable",
      false,
    );

    const params = or(params1, params2);

    expect(params).toEqual({
      or: "(source_account_id.eq.acc1f90v1b4,is_reimbursable.eq.false)",
    });
  });

  it("and(): should build and params", () => {
    const params1 = equals<Expense, "source_account_id">(
      "source_account_id",
      "acc1f90v1b4",
    );
    const params2 = equals<Expense, "is_reimbursable">(
      "is_reimbursable",
      false,
    );

    const params = and(params1, params2);

    expect(params).toEqual({
      and: "(source_account_id.eq.acc1f90v1b4,is_reimbursable.eq.false)",
    });
  });
});
