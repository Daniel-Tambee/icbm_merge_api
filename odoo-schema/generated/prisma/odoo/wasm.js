
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Auth_totp_deviceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  user_id: 'user_id',
  scope: 'scope',
  index: 'index',
  key: 'key',
  create_date: 'create_date'
};

exports.Prisma.Auth_totp_wizardScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  secret: 'secret',
  url: 'url',
  code: 'code',
  create_date: 'create_date',
  write_date: 'write_date',
  qrcode: 'qrcode'
};

exports.Prisma.Base_document_layoutScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  report_layout_id: 'report_layout_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_enable_profiling_wizardScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  duration: 'duration',
  expiration: 'expiration',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_import_importScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  res_model: 'res_model',
  file_name: 'file_name',
  file_type: 'file_type',
  create_date: 'create_date',
  write_date: 'write_date',
  file: 'file'
};

exports.Prisma.Base_import_mappingScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  res_model: 'res_model',
  column_name: 'column_name',
  field_name: 'field_name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_import_moduleScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  state: 'state',
  import_message: 'import_message',
  modules_dependencies: 'modules_dependencies',
  force: 'force',
  with_demo: 'with_demo',
  create_date: 'create_date',
  write_date: 'write_date',
  module_file: 'module_file'
};

exports.Prisma.Base_language_exportScalarFieldEnum = {
  id: 'id',
  model_id: 'model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  lang: 'lang',
  format: 'format',
  export_type: 'export_type',
  domain: 'domain',
  state: 'state',
  create_date: 'create_date',
  write_date: 'write_date',
  data: 'data'
};

exports.Prisma.Base_language_importScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  code: 'code',
  filename: 'filename',
  overwrite: 'overwrite',
  create_date: 'create_date',
  write_date: 'write_date',
  data: 'data'
};

exports.Prisma.Base_language_installScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  overwrite: 'overwrite',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_module_uninstallScalarFieldEnum = {
  id: 'id',
  module_id: 'module_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  show_all: 'show_all',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_module_updateScalarFieldEnum = {
  id: 'id',
  updated: 'updated',
  added: 'added',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  state: 'state',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_module_upgradeScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  module_info: 'module_info',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_partner_merge_automatic_wizardScalarFieldEnum = {
  id: 'id',
  number_group: 'number_group',
  current_line_id: 'current_line_id',
  dst_partner_id: 'dst_partner_id',
  maximum_group: 'maximum_group',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  state: 'state',
  group_by_email: 'group_by_email',
  group_by_name: 'group_by_name',
  group_by_is_company: 'group_by_is_company',
  group_by_vat: 'group_by_vat',
  group_by_parent_id: 'group_by_parent_id',
  exclude_contact: 'exclude_contact',
  exclude_journal_item: 'exclude_journal_item',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Base_partner_merge_automatic_wizard_res_partner_relScalarFieldEnum = {
  base_partner_merge_automatic_wizard_id: 'base_partner_merge_automatic_wizard_id',
  res_partner_id: 'res_partner_id'
};

exports.Prisma.Base_partner_merge_lineScalarFieldEnum = {
  id: 'id',
  wizard_id: 'wizard_id',
  min_id: 'min_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  aggr_ids: 'aggr_ids',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Bus_busScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  channel: 'channel',
  message: 'message',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Bus_presenceScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  status: 'status',
  last_poll: 'last_poll',
  last_presence: 'last_presence'
};

exports.Prisma.Change_password_ownScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  new_password: 'new_password',
  confirm_password: 'confirm_password',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Change_password_userScalarFieldEnum = {
  id: 'id',
  wizard_id: 'wizard_id',
  user_id: 'user_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  user_login: 'user_login',
  new_passwd: 'new_passwd',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Change_password_wizardScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Decimal_precisionScalarFieldEnum = {
  id: 'id',
  digits: 'digits',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Iap_accountScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  service_name: 'service_name',
  account_token: 'account_token',
  show_token: 'show_token',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Iap_account_infoScalarFieldEnum = {
  id: 'id',
  account_id: 'account_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  account_token: 'account_token',
  account_uuid_hashed: 'account_uuid_hashed',
  service_name: 'service_name',
  description: 'description',
  warning_email: 'warning_email',
  unit_name: 'unit_name',
  balance: 'balance',
  warn_me: 'warn_me',
  create_date: 'create_date',
  write_date: 'write_date',
  warning_threshold: 'warning_threshold'
};

exports.Prisma.Iap_account_res_company_relScalarFieldEnum = {
  iap_account_id: 'iap_account_id',
  res_company_id: 'res_company_id'
};

exports.Prisma.Ir_act_clientScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date',
  tag: 'tag',
  target: 'target',
  res_model: 'res_model',
  context: 'context',
  params_store: 'params_store'
};

exports.Prisma.Ir_act_report_xmlScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date',
  paperformat_id: 'paperformat_id',
  model: 'model',
  report_type: 'report_type',
  report_name: 'report_name',
  report_file: 'report_file',
  attachment: 'attachment',
  print_report_name: 'print_report_name',
  multi: 'multi',
  attachment_use: 'attachment_use'
};

exports.Prisma.Ir_act_serverScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date',
  sequence: 'sequence',
  model_id: 'model_id',
  crud_model_id: 'crud_model_id',
  link_field_id: 'link_field_id',
  update_field_id: 'update_field_id',
  update_related_model_id: 'update_related_model_id',
  selection_value: 'selection_value',
  usage: 'usage',
  state: 'state',
  model_name: 'model_name',
  update_path: 'update_path',
  update_m2m_operation: 'update_m2m_operation',
  update_boolean_value: 'update_boolean_value',
  evaluation_type: 'evaluation_type',
  resource_ref: 'resource_ref',
  webhook_url: 'webhook_url',
  code: 'code',
  value: 'value'
};

exports.Prisma.Ir_act_server_group_relScalarFieldEnum = {
  act_id: 'act_id',
  gid: 'gid'
};

exports.Prisma.Ir_act_server_webhook_field_relScalarFieldEnum = {
  server_id: 'server_id',
  field_id: 'field_id'
};

exports.Prisma.Ir_act_urlScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date',
  target: 'target',
  url: 'url'
};

exports.Prisma.Ir_act_windowScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date',
  view_id: 'view_id',
  res_id: 'res_id',
  limit: 'limit',
  search_view_id: 'search_view_id',
  domain: 'domain',
  context: 'context',
  res_model: 'res_model',
  target: 'target',
  view_mode: 'view_mode',
  mobile_view_mode: 'mobile_view_mode',
  usage: 'usage',
  filter: 'filter'
};

exports.Prisma.Ir_act_window_group_relScalarFieldEnum = {
  act_id: 'act_id',
  gid: 'gid'
};

exports.Prisma.Ir_act_window_viewScalarFieldEnum = {
  id: 'id',
  sequence: 'sequence',
  view_id: 'view_id',
  act_window_id: 'act_window_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  view_mode: 'view_mode',
  multi: 'multi',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_actionsScalarFieldEnum = {
  id: 'id',
  binding_model_id: 'binding_model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  type: 'type',
  binding_type: 'binding_type',
  binding_view_types: 'binding_view_types',
  name: 'name',
  help: 'help',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_actions_todoScalarFieldEnum = {
  id: 'id',
  action_id: 'action_id',
  sequence: 'sequence',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  state: 'state',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_assetScalarFieldEnum = {
  id: 'id',
  sequence: 'sequence',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  bundle: 'bundle',
  directive: 'directive',
  path: 'path',
  target: 'target',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_attachmentScalarFieldEnum = {
  id: 'id',
  res_id: 'res_id',
  company_id: 'company_id',
  file_size: 'file_size',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  res_model: 'res_model',
  res_field: 'res_field',
  type: 'type',
  url: 'url',
  access_token: 'access_token',
  store_fname: 'store_fname',
  checksum: 'checksum',
  mimetype: 'mimetype',
  description: 'description',
  index_content: 'index_content',
  public: 'public',
  create_date: 'create_date',
  write_date: 'write_date',
  db_datas: 'db_datas',
  original_id: 'original_id'
};

exports.Prisma.Ir_config_parameterScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  key: 'key',
  value: 'value',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_cronScalarFieldEnum = {
  id: 'id',
  ir_actions_server_id: 'ir_actions_server_id',
  user_id: 'user_id',
  interval_number: 'interval_number',
  numbercall: 'numbercall',
  priority: 'priority',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  cron_name: 'cron_name',
  interval_type: 'interval_type',
  active: 'active',
  doall: 'doall',
  nextcall: 'nextcall',
  lastcall: 'lastcall',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_cron_triggerScalarFieldEnum = {
  id: 'id',
  cron_id: 'cron_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  call_at: 'call_at',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_defaultScalarFieldEnum = {
  id: 'id',
  field_id: 'field_id',
  user_id: 'user_id',
  company_id: 'company_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  condition: 'condition',
  json_value: 'json_value',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_demoScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_demo_failureScalarFieldEnum = {
  id: 'id',
  module_id: 'module_id',
  wizard_id: 'wizard_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  error: 'error',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_demo_failure_wizardScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_exportsScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  resource: 'resource',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_exports_lineScalarFieldEnum = {
  id: 'id',
  export_id: 'export_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_filtersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  action_id: 'action_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  model_id: 'model_id',
  domain: 'domain',
  context: 'context',
  sort: 'sort',
  is_default: 'is_default',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_loggingScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  type: 'type',
  dbname: 'dbname',
  level: 'level',
  path: 'path',
  func: 'func',
  line: 'line',
  message: 'message',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_mail_serverScalarFieldEnum = {
  id: 'id',
  smtp_port: 'smtp_port',
  sequence: 'sequence',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  from_filter: 'from_filter',
  smtp_host: 'smtp_host',
  smtp_authentication: 'smtp_authentication',
  smtp_user: 'smtp_user',
  smtp_pass: 'smtp_pass',
  smtp_encryption: 'smtp_encryption',
  smtp_debug: 'smtp_debug',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date',
  smtp_ssl_certificate: 'smtp_ssl_certificate',
  smtp_ssl_private_key: 'smtp_ssl_private_key'
};

exports.Prisma.Ir_modelScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  model: 'model',
  order: 'order',
  state: 'state',
  name: 'name',
  info: 'info',
  transient: 'transient',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_model_accessScalarFieldEnum = {
  id: 'id',
  model_id: 'model_id',
  group_id: 'group_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  active: 'active',
  perm_read: 'perm_read',
  perm_write: 'perm_write',
  perm_create: 'perm_create',
  perm_unlink: 'perm_unlink',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_model_constraintScalarFieldEnum = {
  id: 'id',
  model: 'model',
  module: 'module',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  definition: 'definition',
  type: 'type',
  message: 'message',
  write_date: 'write_date',
  create_date: 'create_date'
};

exports.Prisma.Ir_model_dataScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  create_date: 'create_date',
  write_date: 'write_date',
  write_uid: 'write_uid',
  res_id: 'res_id',
  noupdate: 'noupdate',
  name: 'name',
  module: 'module',
  model: 'model'
};

exports.Prisma.Ir_model_fieldsScalarFieldEnum = {
  id: 'id',
  relation_field_id: 'relation_field_id',
  model_id: 'model_id',
  related_field_id: 'related_field_id',
  size: 'size',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  complete_name: 'complete_name',
  model: 'model',
  relation: 'relation',
  relation_field: 'relation_field',
  ttype: 'ttype',
  related: 'related',
  state: 'state',
  on_delete: 'on_delete',
  domain: 'domain',
  relation_table: 'relation_table',
  column1: 'column1',
  column2: 'column2',
  depends: 'depends',
  currency_field: 'currency_field',
  field_description: 'field_description',
  help: 'help',
  compute: 'compute',
  copied: 'copied',
  required: 'required',
  readonly: 'readonly',
  index: 'index',
  translate: 'translate',
  group_expand: 'group_expand',
  selectable: 'selectable',
  store: 'store',
  sanitize: 'sanitize',
  sanitize_overridable: 'sanitize_overridable',
  sanitize_tags: 'sanitize_tags',
  sanitize_attributes: 'sanitize_attributes',
  sanitize_style: 'sanitize_style',
  sanitize_form: 'sanitize_form',
  strip_style: 'strip_style',
  strip_classes: 'strip_classes',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_model_fields_group_relScalarFieldEnum = {
  field_id: 'field_id',
  group_id: 'group_id'
};

exports.Prisma.Ir_model_fields_selectionScalarFieldEnum = {
  id: 'id',
  field_id: 'field_id',
  sequence: 'sequence',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  value: 'value',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_model_inheritScalarFieldEnum = {
  id: 'id',
  model_id: 'model_id',
  parent_id: 'parent_id',
  parent_field_id: 'parent_field_id'
};

exports.Prisma.Ir_model_relationScalarFieldEnum = {
  id: 'id',
  model: 'model',
  module: 'module',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  write_date: 'write_date',
  create_date: 'create_date'
};

exports.Prisma.Ir_module_categoryScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  create_date: 'create_date',
  write_date: 'write_date',
  write_uid: 'write_uid',
  parent_id: 'parent_id',
  name: 'name',
  sequence: 'sequence',
  description: 'description',
  visible: 'visible',
  exclusive: 'exclusive'
};

exports.Prisma.Ir_module_moduleScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  create_date: 'create_date',
  write_date: 'write_date',
  write_uid: 'write_uid',
  website: 'website',
  summary: 'summary',
  name: 'name',
  author: 'author',
  icon: 'icon',
  state: 'state',
  latest_version: 'latest_version',
  shortdesc: 'shortdesc',
  category_id: 'category_id',
  description: 'description',
  application: 'application',
  demo: 'demo',
  web: 'web',
  license: 'license',
  sequence: 'sequence',
  auto_install: 'auto_install',
  to_buy: 'to_buy',
  maintainer: 'maintainer',
  published_version: 'published_version',
  url: 'url',
  contributors: 'contributors',
  menus_by_module: 'menus_by_module',
  reports_by_module: 'reports_by_module',
  views_by_module: 'views_by_module',
  module_type: 'module_type',
  imported: 'imported'
};

exports.Prisma.Ir_module_module_dependencyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  module_id: 'module_id',
  auto_install_required: 'auto_install_required'
};

exports.Prisma.Ir_module_module_exclusionScalarFieldEnum = {
  id: 'id',
  module_id: 'module_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_profileScalarFieldEnum = {
  id: 'id',
  sql_count: 'sql_count',
  entry_count: 'entry_count',
  session: 'session',
  name: 'name',
  init_stack_trace: 'init_stack_trace',
  sql: 'sql',
  traces_async: 'traces_async',
  traces_sync: 'traces_sync',
  qweb: 'qweb',
  create_date: 'create_date',
  duration: 'duration'
};

exports.Prisma.Ir_propertyScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  fields_id: 'fields_id',
  value_integer: 'value_integer',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  res_id: 'res_id',
  value_reference: 'value_reference',
  type: 'type',
  value_text: 'value_text',
  value_datetime: 'value_datetime',
  create_date: 'create_date',
  write_date: 'write_date',
  value_float: 'value_float',
  value_binary: 'value_binary'
};

exports.Prisma.Ir_ruleScalarFieldEnum = {
  id: 'id',
  model_id: 'model_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  domain_force: 'domain_force',
  active: 'active',
  perm_read: 'perm_read',
  perm_write: 'perm_write',
  perm_create: 'perm_create',
  perm_unlink: 'perm_unlink',
  global: 'global',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_sequenceScalarFieldEnum = {
  id: 'id',
  number_next: 'number_next',
  number_increment: 'number_increment',
  padding: 'padding',
  company_id: 'company_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  code: 'code',
  implementation: 'implementation',
  prefix: 'prefix',
  suffix: 'suffix',
  active: 'active',
  use_date_range: 'use_date_range',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_sequence_date_rangeScalarFieldEnum = {
  id: 'id',
  sequence_id: 'sequence_id',
  number_next: 'number_next',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  date_from: 'date_from',
  date_to: 'date_to',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_ui_menuScalarFieldEnum = {
  id: 'id',
  sequence: 'sequence',
  parent_id: 'parent_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  parent_path: 'parent_path',
  web_icon: 'web_icon',
  action: 'action',
  name: 'name',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_ui_menu_group_relScalarFieldEnum = {
  menu_id: 'menu_id',
  gid: 'gid'
};

exports.Prisma.Ir_ui_viewScalarFieldEnum = {
  id: 'id',
  priority: 'priority',
  inherit_id: 'inherit_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  model: 'model',
  key: 'key',
  type: 'type',
  arch_fs: 'arch_fs',
  mode: 'mode',
  arch_db: 'arch_db',
  arch_prev: 'arch_prev',
  arch_updated: 'arch_updated',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_ui_view_customScalarFieldEnum = {
  id: 'id',
  ref_id: 'ref_id',
  user_id: 'user_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  arch: 'arch',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Ir_ui_view_group_relScalarFieldEnum = {
  view_id: 'view_id',
  group_id: 'group_id'
};

exports.Prisma.Rel_modules_langexportScalarFieldEnum = {
  wiz_id: 'wiz_id',
  module_id: 'module_id'
};

exports.Prisma.Rel_server_actionsScalarFieldEnum = {
  server_id: 'server_id',
  action_id: 'action_id'
};

exports.Prisma.Report_layoutScalarFieldEnum = {
  id: 'id',
  view_id: 'view_id',
  sequence: 'sequence',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  image: 'image',
  pdf: 'pdf',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Report_paperformatScalarFieldEnum = {
  id: 'id',
  page_height: 'page_height',
  page_width: 'page_width',
  header_spacing: 'header_spacing',
  dpi: 'dpi',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  format: 'format',
  orientation: 'orientation',
  default: 'default',
  header_line: 'header_line',
  disable_shrinking: 'disable_shrinking',
  create_date: 'create_date',
  write_date: 'write_date',
  margin_top: 'margin_top',
  margin_bottom: 'margin_bottom',
  margin_left: 'margin_left',
  margin_right: 'margin_right'
};

exports.Prisma.Res_bankScalarFieldEnum = {
  id: 'id',
  state: 'state',
  country: 'country',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  street: 'street',
  street2: 'street2',
  zip: 'zip',
  city: 'city',
  email: 'email',
  phone: 'phone',
  bic: 'bic',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_companyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  partner_id: 'partner_id',
  currency_id: 'currency_id',
  sequence: 'sequence',
  create_date: 'create_date',
  parent_path: 'parent_path',
  parent_id: 'parent_id',
  paperformat_id: 'paperformat_id',
  external_report_layout_id: 'external_report_layout_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  email: 'email',
  phone: 'phone',
  mobile: 'mobile',
  font: 'font',
  primary_color: 'primary_color',
  secondary_color: 'secondary_color',
  layout_background: 'layout_background',
  report_header: 'report_header',
  report_footer: 'report_footer',
  company_details: 'company_details',
  active: 'active',
  uses_default_logo: 'uses_default_logo',
  write_date: 'write_date',
  logo_web: 'logo_web'
};

exports.Prisma.Res_company_users_relScalarFieldEnum = {
  cid: 'cid',
  user_id: 'user_id'
};

exports.Prisma.Res_configScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_config_installerScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_config_settingsScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date',
  web_app_name: 'web_app_name',
  company_id: 'company_id',
  user_default_rights: 'user_default_rights',
  module_base_import: 'module_base_import',
  module_google_calendar: 'module_google_calendar',
  module_microsoft_calendar: 'module_microsoft_calendar',
  module_mail_plugin: 'module_mail_plugin',
  module_auth_oauth: 'module_auth_oauth',
  module_auth_ldap: 'module_auth_ldap',
  module_account_inter_company_rules: 'module_account_inter_company_rules',
  module_voip: 'module_voip',
  module_web_unsplash: 'module_web_unsplash',
  module_partner_autocomplete: 'module_partner_autocomplete',
  module_base_geolocalize: 'module_base_geolocalize',
  module_google_recaptcha: 'module_google_recaptcha',
  module_website_cf_turnstile: 'module_website_cf_turnstile',
  group_multi_currency: 'group_multi_currency',
  show_effect: 'show_effect',
  module_product_images: 'module_product_images',
  profiling_enabled_until: 'profiling_enabled_until',
  unsplash_access_key: 'unsplash_access_key',
  unsplash_app_id: 'unsplash_app_id'
};

exports.Prisma.Res_countryScalarFieldEnum = {
  id: 'id',
  address_view_id: 'address_view_id',
  currency_id: 'currency_id',
  phone_code: 'phone_code',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  code: 'code',
  name_position: 'name_position',
  name: 'name',
  vat_label: 'vat_label',
  address_format: 'address_format',
  state_required: 'state_required',
  zip_required: 'zip_required',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_country_groupScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_country_res_country_group_relScalarFieldEnum = {
  res_country_id: 'res_country_id',
  res_country_group_id: 'res_country_group_id'
};

exports.Prisma.Res_country_stateScalarFieldEnum = {
  id: 'id',
  country_id: 'country_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  code: 'code',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_currencyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  symbol: 'symbol',
  decimal_places: 'decimal_places',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  full_name: 'full_name',
  position: 'position',
  currency_unit_label: 'currency_unit_label',
  currency_subunit_label: 'currency_subunit_label',
  rounding: 'rounding',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_currency_rateScalarFieldEnum = {
  id: 'id',
  currency_id: 'currency_id',
  company_id: 'company_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  rate: 'rate',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_groupsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category_id: 'category_id',
  color: 'color',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  comment: 'comment',
  share: 'share',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_groups_implied_relScalarFieldEnum = {
  gid: 'gid',
  hid: 'hid'
};

exports.Prisma.Res_groups_report_relScalarFieldEnum = {
  uid: 'uid',
  gid: 'gid'
};

exports.Prisma.Res_groups_users_relScalarFieldEnum = {
  gid: 'gid',
  uid: 'uid'
};

exports.Prisma.Res_langScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  code: 'code',
  iso_code: 'iso_code',
  url_code: 'url_code',
  direction: 'direction',
  date_format: 'date_format',
  time_format: 'time_format',
  week_start: 'week_start',
  grouping: 'grouping',
  decimal_point: 'decimal_point',
  thousands_sep: 'thousands_sep',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_lang_install_relScalarFieldEnum = {
  language_wizard_id: 'language_wizard_id',
  lang_id: 'lang_id'
};

exports.Prisma.Res_partnerScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  create_date: 'create_date',
  name: 'name',
  title: 'title',
  parent_id: 'parent_id',
  user_id: 'user_id',
  state_id: 'state_id',
  country_id: 'country_id',
  industry_id: 'industry_id',
  color: 'color',
  commercial_partner_id: 'commercial_partner_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  complete_name: 'complete_name',
  ref: 'ref',
  lang: 'lang',
  tz: 'tz',
  vat: 'vat',
  company_registry: 'company_registry',
  website: 'website',
  function: 'function',
  type: 'type',
  street: 'street',
  street2: 'street2',
  zip: 'zip',
  city: 'city',
  email: 'email',
  phone: 'phone',
  mobile: 'mobile',
  commercial_company_name: 'commercial_company_name',
  company_name: 'company_name',
  date: 'date',
  comment: 'comment',
  partner_latitude: 'partner_latitude',
  partner_longitude: 'partner_longitude',
  active: 'active',
  employee: 'employee',
  is_company: 'is_company',
  partner_share: 'partner_share',
  write_date: 'write_date'
};

exports.Prisma.Res_partner_bankScalarFieldEnum = {
  id: 'id',
  partner_id: 'partner_id',
  bank_id: 'bank_id',
  sequence: 'sequence',
  currency_id: 'currency_id',
  company_id: 'company_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  acc_number: 'acc_number',
  sanitized_acc_number: 'sanitized_acc_number',
  acc_holder_name: 'acc_holder_name',
  active: 'active',
  allow_out_payment: 'allow_out_payment',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_partner_categoryScalarFieldEnum = {
  id: 'id',
  color: 'color',
  parent_id: 'parent_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  parent_path: 'parent_path',
  name: 'name',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_partner_industryScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  full_name: 'full_name',
  active: 'active',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_partner_res_partner_category_relScalarFieldEnum = {
  category_id: 'category_id',
  partner_id: 'partner_id'
};

exports.Prisma.Res_partner_titleScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  shortcut: 'shortcut',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_usersScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  partner_id: 'partner_id',
  active: 'active',
  create_date: 'create_date',
  login: 'login',
  password: 'password',
  action_id: 'action_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  signature: 'signature',
  share: 'share',
  write_date: 'write_date',
  totp_secret: 'totp_secret'
};

exports.Prisma.Res_users_apikeysScalarFieldEnum = {
  id: 'id',
  name: 'name',
  user_id: 'user_id',
  scope: 'scope',
  index: 'index',
  key: 'key',
  create_date: 'create_date'
};

exports.Prisma.Res_users_apikeys_descriptionScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_users_deletionScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  user_id_int: 'user_id_int',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  state: 'state',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_users_identitycheckScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  request: 'request',
  password: 'password',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_users_logScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Res_users_settingsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Reset_view_arch_wizardScalarFieldEnum = {
  id: 'id',
  view_id: 'view_id',
  compare_view_id: 'compare_view_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  reset_mode: 'reset_mode',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Rule_group_relScalarFieldEnum = {
  rule_group_id: 'rule_group_id',
  group_id: 'group_id'
};

exports.Prisma.Web_editor_converter_testScalarFieldEnum = {
  id: 'id',
  integer: 'integer',
  many2one: 'many2one',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  char: 'char',
  selection_str: 'selection_str',
  date: 'date',
  html: 'html',
  text: 'text',
  numeric: 'numeric',
  datetime: 'datetime',
  create_date: 'create_date',
  write_date: 'write_date',
  float: 'float',
  binary: 'binary'
};

exports.Prisma.Web_editor_converter_test_subScalarFieldEnum = {
  id: 'id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.Web_tour_tourScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name'
};

exports.Prisma.Wizard_ir_model_menu_createScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  create_uid: 'create_uid',
  write_uid: 'write_uid',
  name: 'name',
  create_date: 'create_date',
  write_date: 'write_date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  auth_totp_device: 'auth_totp_device',
  auth_totp_wizard: 'auth_totp_wizard',
  base_document_layout: 'base_document_layout',
  base_enable_profiling_wizard: 'base_enable_profiling_wizard',
  base_import_import: 'base_import_import',
  base_import_mapping: 'base_import_mapping',
  base_import_module: 'base_import_module',
  base_language_export: 'base_language_export',
  base_language_import: 'base_language_import',
  base_language_install: 'base_language_install',
  base_module_uninstall: 'base_module_uninstall',
  base_module_update: 'base_module_update',
  base_module_upgrade: 'base_module_upgrade',
  base_partner_merge_automatic_wizard: 'base_partner_merge_automatic_wizard',
  base_partner_merge_automatic_wizard_res_partner_rel: 'base_partner_merge_automatic_wizard_res_partner_rel',
  base_partner_merge_line: 'base_partner_merge_line',
  bus_bus: 'bus_bus',
  bus_presence: 'bus_presence',
  change_password_own: 'change_password_own',
  change_password_user: 'change_password_user',
  change_password_wizard: 'change_password_wizard',
  decimal_precision: 'decimal_precision',
  iap_account: 'iap_account',
  iap_account_info: 'iap_account_info',
  iap_account_res_company_rel: 'iap_account_res_company_rel',
  ir_act_client: 'ir_act_client',
  ir_act_report_xml: 'ir_act_report_xml',
  ir_act_server: 'ir_act_server',
  ir_act_server_group_rel: 'ir_act_server_group_rel',
  ir_act_server_webhook_field_rel: 'ir_act_server_webhook_field_rel',
  ir_act_url: 'ir_act_url',
  ir_act_window: 'ir_act_window',
  ir_act_window_group_rel: 'ir_act_window_group_rel',
  ir_act_window_view: 'ir_act_window_view',
  ir_actions: 'ir_actions',
  ir_actions_todo: 'ir_actions_todo',
  ir_asset: 'ir_asset',
  ir_attachment: 'ir_attachment',
  ir_config_parameter: 'ir_config_parameter',
  ir_cron: 'ir_cron',
  ir_cron_trigger: 'ir_cron_trigger',
  ir_default: 'ir_default',
  ir_demo: 'ir_demo',
  ir_demo_failure: 'ir_demo_failure',
  ir_demo_failure_wizard: 'ir_demo_failure_wizard',
  ir_exports: 'ir_exports',
  ir_exports_line: 'ir_exports_line',
  ir_filters: 'ir_filters',
  ir_logging: 'ir_logging',
  ir_mail_server: 'ir_mail_server',
  ir_model: 'ir_model',
  ir_model_access: 'ir_model_access',
  ir_model_constraint: 'ir_model_constraint',
  ir_model_data: 'ir_model_data',
  ir_model_fields: 'ir_model_fields',
  ir_model_fields_group_rel: 'ir_model_fields_group_rel',
  ir_model_fields_selection: 'ir_model_fields_selection',
  ir_model_inherit: 'ir_model_inherit',
  ir_model_relation: 'ir_model_relation',
  ir_module_category: 'ir_module_category',
  ir_module_module: 'ir_module_module',
  ir_module_module_dependency: 'ir_module_module_dependency',
  ir_module_module_exclusion: 'ir_module_module_exclusion',
  ir_profile: 'ir_profile',
  ir_property: 'ir_property',
  ir_rule: 'ir_rule',
  ir_sequence: 'ir_sequence',
  ir_sequence_date_range: 'ir_sequence_date_range',
  ir_ui_menu: 'ir_ui_menu',
  ir_ui_menu_group_rel: 'ir_ui_menu_group_rel',
  ir_ui_view: 'ir_ui_view',
  ir_ui_view_custom: 'ir_ui_view_custom',
  ir_ui_view_group_rel: 'ir_ui_view_group_rel',
  rel_modules_langexport: 'rel_modules_langexport',
  rel_server_actions: 'rel_server_actions',
  report_layout: 'report_layout',
  report_paperformat: 'report_paperformat',
  res_bank: 'res_bank',
  res_company: 'res_company',
  res_company_users_rel: 'res_company_users_rel',
  res_config: 'res_config',
  res_config_installer: 'res_config_installer',
  res_config_settings: 'res_config_settings',
  res_country: 'res_country',
  res_country_group: 'res_country_group',
  res_country_res_country_group_rel: 'res_country_res_country_group_rel',
  res_country_state: 'res_country_state',
  res_currency: 'res_currency',
  res_currency_rate: 'res_currency_rate',
  res_groups: 'res_groups',
  res_groups_implied_rel: 'res_groups_implied_rel',
  res_groups_report_rel: 'res_groups_report_rel',
  res_groups_users_rel: 'res_groups_users_rel',
  res_lang: 'res_lang',
  res_lang_install_rel: 'res_lang_install_rel',
  res_partner: 'res_partner',
  res_partner_bank: 'res_partner_bank',
  res_partner_category: 'res_partner_category',
  res_partner_industry: 'res_partner_industry',
  res_partner_res_partner_category_rel: 'res_partner_res_partner_category_rel',
  res_partner_title: 'res_partner_title',
  res_users: 'res_users',
  res_users_apikeys: 'res_users_apikeys',
  res_users_apikeys_description: 'res_users_apikeys_description',
  res_users_deletion: 'res_users_deletion',
  res_users_identitycheck: 'res_users_identitycheck',
  res_users_log: 'res_users_log',
  res_users_settings: 'res_users_settings',
  reset_view_arch_wizard: 'reset_view_arch_wizard',
  rule_group_rel: 'rule_group_rel',
  web_editor_converter_test: 'web_editor_converter_test',
  web_editor_converter_test_sub: 'web_editor_converter_test_sub',
  web_tour_tour: 'web_tour_tour',
  wizard_ir_model_menu_create: 'wizard_ir_model_menu_create'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
