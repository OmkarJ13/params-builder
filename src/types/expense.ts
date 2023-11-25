export enum ReportState {
  APPROVED = "APPROVED",
  APPROVER_INQUIRY = "APPROVER_INQUIRY",
  APPROVER_PENDING = "APPROVER_PENDING",
  DRAFT = "DRAFT",
  PAID = "PAID",
  PAYMENT_PENDING = "PAYMENT_PENDING",
  PAYMENT_PROCESSING = "PAYMENT_PROCESSING",
}

export interface Account {
  id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  type: AccountType;
  currency: string;
  current_balance_amount: number;
  tentative_balance_amount: number;
  org_id: string;
  category_id: number;
}

export enum AccountType {
  COMPANY_EXPENSE_ACCOUNT = "COMPANY_EXPENSE_ACCOUNT",
  COMPANY_CATEGORY_ACCOUNT = "COMPANY_CATEGORY_ACCOUNT",
  COMPANY_ADVANCE_ACCOUNT = "COMPANY_ADVANCE_ACCOUNT",
  COMPANY_CORPORATE_CREDIT_CARD_ACCOUNT = "COMPANY_CORPORATE_CREDIT_CARD_ACCOUNT",
  PERSONAL_ADVANCE_ACCOUNT = "PERSONAL_ADVANCE_ACCOUNT",
  PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT = "PERSONAL_CORPORATE_CREDIT_CARD_ACCOUNT",
  PERSONAL_CASH_ACCOUNT = "PERSONAL_CASH_ACCOUNT",
}

export interface Expense {
  // `activity_details` is not added on purpose
  accounting_export_summary: {} | AccountingExportSummary;
  is_exported: boolean;
  last_exported_at: Date;
  added_to_report_at: Date;
  admin_amount: number;
  approvals: ReportApprovals[];
  custom_fields: NameValuePair[];
  flattened_custom_field: Record<string, any>;
  amount: number;
  approver_comments: string[];
  category: Pick<
    PlatformCategory,
    "code" | "id" | "display_name" | "name" | "sub_category" | "system_category"
  >;
  category_id: number;
  claim_amount: number;
  code: string;
  cost_center_id: number;
  cost_center: Pick<PlatformCostCenter, "id" | "name" | "code">;
  created_at: Date;
  creator_user_id: string;
  currency: string;
  distance: number;
  distance_unit: MileageUnitEnum;
  employee: Employee;
  employee_id: string;
  ended_at: Date;
  expense_rule_data: ExpenseRuleData;
  expense_rule_id: string;
  extracted_data: ParsedResponse;
  file_ids: string[];
  files: Pick<File, "id" | "name" | "content_type" | "type">[];
  foreign_amount: number;
  foreign_currency: string;
  hotel_is_breakfast_provided: boolean;
  id: string;
  is_billable: boolean;
  is_corporate_card_transaction_auto_matched: boolean;
  is_manually_flagged: boolean;
  is_physical_bill_submitted: boolean;
  is_policy_flagged: boolean;
  is_receipt_mandatory: boolean;
  is_reimbursable: boolean;
  is_split: boolean;
  is_verified: boolean;
  is_weekend_spend: boolean;
  last_settled_at: Date;
  last_verified_at: Date;
  locations: Location[];
  matched_corporate_card_transaction_ids: string[];
  matched_corporate_card_transactions: MatchedCorporateCardTransaction[];
  merchant: string;
  mileage_calculated_amount: number;
  mileage_calculated_distance: number;
  mileage_is_round_trip: boolean;
  mileage_rate: Pick<PlatformMileageRates, "id" | "code" | "vehicle_type">;
  mileage_rate_id: number;
  missing_mandatory_fields: MissingMandatoryFields;
  org_id: string;
  per_diem_num_days: number;
  per_diem_rate: Pick<PlatformPerDiemRates, "id" | "code" | "name">;
  per_diem_rate_id: number;
  physical_bill_submitted_at: Date;
  policy_checks: PolicyChecks;
  policy_amount: number;
  project_id: number;
  project: Pick<
    Project,
    "id" | "name" | "sub_project" | "code" | "display_name"
  >;
  purpose: string;
  report: Report;
  report_id: string;
  report_settlement_id: string;
  seq_num: string;
  source: string;
  source_account: Pick<Account, "id" | "type">;
  source_account_id: string;
  spent_at: Date;
  split_group_amount: number;
  split_group_id: string;
  started_at: Date;
  state: ExpenseState;
  state_display_name: string;
  tax_amount: number;
  tax_group: Pick<PlatformTaxGroup, "name" | "percentage">;
  tax_group_id: string;
  travel_classes: string[];
  updated_at: Date;
  user: User;
  user_id: string;
  verifier_comments: string[];
  report_last_paid_at: Date;
  report_last_approved_at: Date;
}

export interface Employee {
  business_unit: string;
  code: string;
  department: Pick<
    Department,
    "id" | "code" | "display_name" | "sub_department" | "name"
  >;
  department_id: string;
  custom_fields: NameValuePair[];
  // flattened_custom_field: Record<string, any>;
  has_accepted_invite: boolean;
  id: string;
  is_enabled: boolean;
  level: Pick<Level, "id" | "name" | "band">;
  location: string;
  org_id: string;
  org_name: string;
  title: string;
  source: string;
  source_account: Pick<Account, "id" | "type">;
  source_account_id: string;
  spent_at: Date;
  split_group_amount: number;
  split_group_id: string;
  started_at: Date;
  state: ExpenseState;
  state_display_name: string;
  tax_amount: number;
  tax_group: Pick<PlatformTaxGroup, "name" | "percentage">;
  tax_group_id: string;
  travel_classes: string[];
  updated_at: Date;
  user: User;
  user_id: string;
  verifier_comments: string[];
  report_last_paid_at: Date;
  report_last_approved_at: Date;
}

export interface MatchedCorporateCardTransaction {
  id: string;
  corporate_card_id: string;
  corporate_card_number: string;
  masked_corporate_card_number: string;
  corporate_card_user_full_name: string;
  bank_name: string;
  amount: number;
  currency: string;
  spent_at: Date;
  posted_at: Date;
  description: string;
  foreign_currency: string;
  status: TransactionStatus;
  foreign_amount: number;
  merchant: string;
  category: string;
  matched_by: string;
}

export enum TransactionStatus {
  PENDING = "PENDING",
  POSTED = "POSTED",
}

export interface PolicyChecks {
  are_approvers_added: boolean;
  is_amount_limit_applied: boolean;
  is_flagged_ever: boolean;
  violations: Violation[];
}

export interface Violation {
  policy_rule_description: string;
  policy_rule_id: string;
}

export interface Report {
  amount: number;
  approvals: ReportApprovals[];
  id: string;
  last_approved_at: Date;
  last_paid_at: Date;
  last_submitted_at: Date;
  seq_num: string;
  state: ReportState;
  settlement_id: string;
  last_verified_at: Date;
  reimbursement_id: string;
  reimbursement_seq_num: string;
  title: string;
}

export interface ExpenseRuleData {
  merchant: string;
  is_billable: boolean;
  purpose: string;
  category_id: number;
  project_id: number;
  cost_center_id: number;
}

export interface MissingMandatoryFields {
  expense_field_ids: number[];
  amount: boolean;
  currency: boolean;
  receipt: boolean;
}

export interface AccountingExportSummary {
  state: string;
  error_type: string;
  url: string;
  tpa_id: string;
}

export interface Department {
  id: string;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  is_enabled: boolean;
  name: string;
  code: string;
  description: string;
  sub_department: string;
  department_head_user_ids: string[];
  department_head_users: User[];
  doc_url: string;
  display_name: string;
}

export interface Level {
  id: string;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  band: string;
  code: string;
  description: string;
  is_enabled: boolean;
}

export interface PlatformPerDiemRates {
  id: number;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  is_enabled: boolean;
  name: string;
  code?: string;
  description?: string;
  currency: string;
  rate: number;
}

export interface ReportApprovals {
  approver_user_id: string;
  approver_user: User;
  state: ApprovalState;
}

export enum ApprovalState {
  APPROVAL_PENDING = "APPROVAL_PENDING",
  APPROVAL_DONE = "APPROVAL_DONE",
  APPROVAL_DISABLED = "APPROVAL_DISABLED",
}

export interface PlatformTaxGroup {
  id: string;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  percentage: number;
  is_enabled: boolean;
  code: string;
}

export interface User {
  id: string;
  full_name: string;
  email: string;
}

export interface Project {
  id: number;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  sub_project: string;
  code: string;
  display_name: string;
  description: string;
  is_enabled: boolean;
  restricted_spender_user_ids: string[];
  approver_user_ids: string[];
  approver_users: User[];
  category_ids: number[];
}

export interface PlatformMileageRates {
  id: number;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  is_enabled: boolean;
  unit: string;
  vehicle_type?: string;
  code?: string;
  readableRate?: string;
  rate: number;
  slab_rates?: { rate: number; limit: number }[];
}

export enum MileageUnitEnum {
  KM = "KM",
  MILES = "MILES",
}

export interface File {
  id: string;
  org_id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  type: FileType;
  content_type: string;
}

export enum FileType {
  RECEIPT = "RECEIPT",
  INTEGRATION = "INTEGRATION",
}

export interface PlatformCostCenter {
  id: number;
  name: string;
  code: string;
  description: string;
  is_enabled: boolean;
  org_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface PlatformCategory {
  id: number;
  org_id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  sub_category: string;
  is_enabled: boolean;
  display_name: string;
  system_category: string | null;
  code: string;
  restricted_project_ids?: number[];
}

export interface Destination {
  actual?: unknown;
  city: string;
  country: string;
  display: string;
  formatted_address: string;
  latitude: number;
  longitude: number;
  state: string;
}

export interface ParsedResponse {
  category?: string;
  currency?: string;
  amount?: number;
  date?: Date;
  location?: Destination;
  invoice_dt?: Date;
  vendor_name?: string;
}

export interface Location {
  city: string;
  country: string;
  display: string;
  formatted_address: string;
  latitude: number;
  longitude: number;
  state: string;
}

export enum ExpenseState {
  DRAFT = "DRAFT",
  COMPLETE = "COMPLETE",
  APPROVER_PENDING = "APPROVER_PENDING",
  APPROVED = "APPROVED",
  PAYMENT_PENDING = "PAYMENT_PENDING",
  PAYMENT_PROCESSING = "PAYMENT_PROCESSING",
  PAID = "PAID",
}

export interface NameValuePair {
  name: string;
  value: any;
}
