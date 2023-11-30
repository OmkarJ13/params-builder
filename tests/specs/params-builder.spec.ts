import { ParamsBuilder } from "../../src/core/params-builder";
import { AccountType, Expense, ExpenseState, Project } from "../types/expense";

// TODO: Add 100% coverage for this file
describe("ParamsBuilder", () => {
  it("should initialise params", () => {
    const params = new ParamsBuilder<Expense>().build();

    expect(params).toEqual({});
  });

  it("should build equals params", () => {
    const params = new ParamsBuilder<Expense>().equals("amount", 123).build();

    expect(params).toEqual({ amount: "eq.123" });
  });

  it("should build not equals params", () => {
    const params = new ParamsBuilder<Expense>()
      .notEquals("state", ExpenseState.DRAFT)
      .build();

    expect(params).toEqual({ state: "neq.DRAFT" });
  });

  it("should build greater than params", () => {
    const params = new ParamsBuilder<Expense>()
      .greaterThan("created_at", new Date("2023-11-1"))
      .build();

    expect(params).toEqual({
      created_at: "gt.Wed Nov 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    });
  });

  it("should build greater than or equal to params", () => {
    const params = new ParamsBuilder<Expense>()
      .greaterThanOrEqualTo(
        "matched_corporate_card_transactions->0->amount",
        10,
      )
      .build();

    expect(params).toEqual({
      "matched_corporate_card_transactions->0->amount": "gte.10",
    });
  });

  it("should build less than params", () => {
    const params = new ParamsBuilder<Expense>()
      .lessThan("tax_amount", 10)
      .build();

    expect(params).toEqual({ tax_amount: "lt.10" });
  });

  it("should build less than or equal to params", () => {
    const params = new ParamsBuilder<Expense>()
      .lessThanOrEqualTo("tax_group->percentage", 10)
      .build();

    expect(params).toEqual({ "tax_group->percentage": "lte.10" });
  });

  it("should build is one of params", () => {
    const params = new ParamsBuilder<Expense>()
      .isOneOf("category->system_category", ["Mileage", "Per Diem"])
      .build();

    expect(params).toEqual({
      "category->system_category": "in.(Mileage,Per Diem)",
    });
  });

  it("should build is not one of params", () => {
    const params = new ParamsBuilder<Expense>()
      .isNotOneOf("state", [ExpenseState.PAID, ExpenseState.PAYMENT_PROCESSING])
      .build();

    expect(params).toEqual({ state: "not_in.(PAID,PAYMENT_PROCESSING)" });
  });

  it("should build is params", () => {
    const params = new ParamsBuilder<Expense>()
      .is("employee->has_accepted_invite", true)
      .build();

    expect(params).toEqual({ "employee->has_accepted_invite": "is.true" });
  });

  it("should build is not params", () => {
    const params = new ParamsBuilder<Expense>()
      .isNot("is_billable", true)
      .build();

    expect(params).toEqual({ is_billable: "is_not.true" });
  });

  it("should build like params", () => {
    const params = new ParamsBuilder<Expense>().like("purpose", "Test").build();

    expect(params).toEqual({ purpose: "like.Test" });
  });

  it("should build not like params", () => {
    const params = new ParamsBuilder<Expense>()
      .notLike("purpose", "Test")
      .build();

    expect(params).toEqual({ purpose: "not_like.Test" });
  });

  it("should build ilike params", () => {
    const params = new ParamsBuilder<Expense>()
      .ilike("project->display_name", "Project 123")
      .build();

    expect(params).toEqual({ "project->display_name": "ilike.Project 123" });
  });

  it("should build not ilike params", () => {
    const params = new ParamsBuilder<Expense>()
      .notIlike("project->display_name", "Project 123")
      .build();

    expect(params).toEqual({
      "project->display_name": "not_ilike.Project 123",
    });
  });

  it("should build contains params", () => {
    const params = new ParamsBuilder<Expense>()
      .contains("matched_corporate_card_transaction_ids", ["btxnSZ5iGKWenl"])
      .build();

    expect(params).toEqual({
      matched_corporate_card_transaction_ids: "cs.[btxnSZ5iGKWenl]",
    });
  });

  it("should build overlaps params", () => {
    const params = new ParamsBuilder<Project>()
      .overlaps("category_ids", [115249, 115248])
      .build();

    expect(params).toEqual({ category_ids: "ov.[115249,115248]" });
  });

  it("should build any params", () => {
    const params = new ParamsBuilder<Project>()
      .any("category_ids", 115257)
      .build();

    expect(params).toEqual({ category_ids: "any.115257" });
  });

  it("should build not any params", () => {
    const params = new ParamsBuilder<Project>()
      .notAny("category_ids", 115257)
      .build();

    expect(params).toEqual({ category_ids: "not_any.115257" });
  });

  it("should build or params", () => {
    const params1 = new ParamsBuilder<Expense>()
      .equals(
        "source_account->type",
        AccountType.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT,
      )
      .build();
    const params2 = new ParamsBuilder<Expense>()
      .equals("is_reimbursable", false)
      .build();

    const params = new ParamsBuilder<Expense>().or(params1, params2).build();

    expect(params).toEqual({
      or: "(source_account->type.eq.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT,is_reimbursable.eq.false)",
    });
  });

  it("should build and params", () => {
    const params1 = new ParamsBuilder<Expense>()
      .equals(
        "source_account->type",
        AccountType.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT,
      )
      .build();
    const params2 = new ParamsBuilder<Expense>()
      .equals("is_reimbursable", false)
      .build();

    const params = new ParamsBuilder<Expense>().and(params1, params2).build();

    expect(params).toEqual({
      and: "(source_account->type.eq.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT,is_reimbursable.eq.false)",
    });
  });

  it("should build offset params", () => {
    const params = new ParamsBuilder<Expense>().offset(10).build();

    expect(params).toEqual({ offset: 10 });
  });

  it("should build limit params", () => {
    const params = new ParamsBuilder<Expense>().limit(10).build();

    expect(params).toEqual({ limit: 10 });
  });

  it("should build order params", () => {
    const params = new ParamsBuilder<Expense>().order("amount", "asc").build();

    expect(params).toEqual({ order: "amount.asc" });
  });
});
