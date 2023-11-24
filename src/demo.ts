import { isNot, isNotOneOf } from "./operators";
import { ParamsBuilder } from "./params-builder";
import { AccountType, Expense, PlatformCategory, Project } from "./types/expense";

const categoryParams = new ParamsBuilder<PlatformCategory>()
  .equals('is_enabled', true)
  .or(
    isNot('system_category', null),
    isNotOneOf('system_category', ['Mileage', 'Per Diem', 'Activity', 'Unspecified'])
  )
  .build();

console.log(categoryParams);
// {is_enabled: 'eq.true', or: '(system_category.is_not.null,system_category.not_in.(Mileage,Per Diem,Activity,Unspecified))'}

const projectParams = new ParamsBuilder<Project>()
  .equals('is_enabled', true)
  .contains('category_ids', [10093, 10032, 10053])
  .ilike('name', 'Test Project')
  .build();

console.log(projectParams);
// {is_enabled: 'eq.true', category_ids: 'cs.10093,10032,10053', name: 'ilike.some name'}

const expenseParams = new ParamsBuilder<Expense>()
  .equals('source_account->type', AccountType.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT)
  .equals('is_reimbursable', false)
  .isOneOf('matched_corporate_card_transactions->0->masked_corporate_card_number', ['1234', '5678'])
  .build();

console.log(expenseParams);
// {source_account->type: 'eq.PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT', is_reimbursable: 'eq.false' matched_corporate_card_transactions->0->masked_corporate_card_number: 'in.(1234,5678)'}