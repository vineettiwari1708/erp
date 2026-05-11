// export const permissions = {
//   ADMIN: [
//     "USER_MANAGE",
//     "CLIENT_MANAGE",
//     "PROJECT_MANAGE",
//     "INVOICE_MANAGE",
//     "PAYMENT_APPROVE"
//   ],
//   MANAGER: [
//     "PROJECT_MANAGE",
//     "CLIENT_VIEW"
//   ],
//   ACCOUNT: [
//     "INVOICE_VIEW",
//     "PAYMENT_VIEW"
//   ],
//   CLIENT: [
//     "PROJECT_VIEW",
//     "INVOICE_VIEW"
//   ],
//   SUPER_ADMIN: ["*"]
// };


// export const permissions = {
//   ADMIN: [
//     "DASHBOARD_VIEW",
//     "USER_MANAGE",
//     "CLIENT_MANAGE",
//     "PROJECT_MANAGE",
//     "INVOICE_MANAGE",
//     "PAYMENT_APPROVE"
//   ],
//   MANAGER: [
//     "PROJECT_MANAGE",
//     "CLIENT_VIEW"
//   ],
//   ACCOUNT: [
//     "INVOICE_VIEW",
//     "PAYMENT_VIEW"
//   ],
//   CLIENT: [
//     "PROJECT_VIEW",
//     "INVOICE_VIEW"
//   ],
//   SUPER_ADMIN: ["*"]
// };

// export const permissions = {
//   SUPER_ADMIN: ["*"],

//   ADMIN: [
//     "DASHBOARD_VIEW",
//     "USER_MANAGE",
//     "CLIENT_MANAGE",
//     "PROJECT_MANAGE",
//     "INVOICE_MANAGE",
//     "PAYMENT_APPROVE",
//     "LEDGER_VIEW",
//     "SYSTEM_ACCESS"
//   ],

//   MANAGER: [
//     "DASHBOARD_VIEW",
//     "PROJECT_MANAGE",
//     "CLIENT_VIEW",
//     "PROJECT_VIEW"
//   ],

//   ACCOUNT: [
//     "DASHBOARD_VIEW",
//     "INVOICE_VIEW",
//     "PAYMENT_VIEW",
//     "LEDGER_VIEW"
//   ],

//   CLIENT: [
//     "DASHBOARD_VIEW",
//     "PROJECT_VIEW",
//     "INVOICE_VIEW"
//   ]
// };




export const permissions = {
  SUPER_ADMIN: ["*"],

  ADMIN: [
    "DASHBOARD_VIEW",
    "USER_MANAGE",
    "CLIENT_MANAGE",
    "CLIENT_VIEW",
    "PROJECT_MANAGE",
    "PROJECT_VIEW",
    "INVOICE_MANAGE",
    "INVOICE_VIEW",
    "PAYMENT_APPROVE",
    "PAYMENT_VIEW",
    "LEDGER_VIEW",
    "SYSTEM_ACCESS",
  ],

  MANAGER: [
    "DASHBOARD_VIEW",
    "PROJECT_VIEW",
    "PROJECT_MANAGE",
    "CLIENT_VIEW",
    "INVOICE_VIEW",
  ],

  ACCOUNT: [
    "DASHBOARD_VIEW",
    "INVOICE_VIEW",
    "PAYMENT_VIEW",
    "LEDGER_VIEW",
  ],

  CLIENT: [
    "DASHBOARD_VIEW",
    "PROJECT_VIEW",
    "INVOICE_VIEW",
  ],
};




// permissions.js

// export const permissions = {
//   // =========================
//   // dashboard
//   // =========================
//   dashboard_view: "dashboard.view",

//   // =========================
//   // users
//   // =========================
//   user_create: "user.create",
//   user_view: "user.view",
//   user_update: "user.update",
//   user_delete: "user.delete",
//   user_assign_role: "user.assign_role",

//   // =========================
//   // clients
//   // =========================
//   client_create: "client.create",
//   client_view: "client.view",
//   client_update: "client.update",
//   client_delete: "client.delete",

//   // =========================
//   // projects
//   // =========================
//   project_create: "project.create",
//   project_view: "project.view",
//   project_update: "project.update",
//   project_delete: "project.delete",
//   project_assign: "project.assign",
//   project_export: "project.export",

//   // =========================
//   // invoices
//   // =========================
//   invoice_create: "invoice.create",
//   invoice_view: "invoice.view",
//   invoice_update: "invoice.update",
//   invoice_delete: "invoice.delete",
//   invoice_approve: "invoice.approve",
//   invoice_export: "invoice.export",

//   // =========================
//   // payments
//   // =========================
//   payment_create: "payment.create",
//   payment_view: "payment.view",
//   payment_update: "payment.update",
//   payment_delete: "payment.delete",
//   payment_approve: "payment.approve",

//   // =========================
//   // ledger / accounting
//   // =========================
//   ledger_view: "ledger.view",
//   ledger_export: "ledger.export",

//   // =========================
//   // reports
//   // =========================
//   report_view: "report.view",
//   report_export: "report.export",

//   // =========================
//   // settings / system
//   // =========================
//   settings_view: "settings.view",
//   settings_update: "settings.update",
//   system_access: "system.access",

//   // =========================
//   // role & permission
//   // =========================
//   role_create: "role.create",
//   role_view: "role.view",
//   role_update: "role.update",
//   role_delete: "role.delete",

//   permission_view: "permission.view",
//   permission_assign: "permission.assign",
// };

// // ======================================
// // roles
// // ======================================

// export const roles = {
//  super_admin: ["*"],

//   admin: [
//     // dashboard
//     permissions.dashboard_view,

//     // users
//     permissions.user_create,
//     permissions.user_view,
//     permissions.user_update,
//     permissions.user_delete,
//     permissions.user_assign_role,

//     // clients
//     permissions.client_create,
//     permissions.client_view,
//     permissions.client_update,
//     permissions.client_delete,

//     // projects
//     permissions.project_create,
//     permissions.project_view,
//     permissions.project_update,
//     permissions.project_delete,
//     permissions.project_assign,
//     permissions.project_export,

//     // invoices
//     permissions.invoice_create,
//     permissions.invoice_view,
//     permissions.invoice_update,
//     permissions.invoice_delete,
//     permissions.invoice_approve,
//     permissions.invoice_export,

//     // payments
//     permissions.payment_create,
//     permissions.payment_view,
//     permissions.payment_update,
//     permissions.payment_delete,
//     permissions.payment_approve,

//     // ledger
//     permissions.ledger_view,
//     permissions.ledger_export,

//     // reports
//     permissions.report_view,
//     permissions.report_export,

//     // settings
//     permissions.settings_view,
//     permissions.settings_update,

//     // roles
//     permissions.role_create,
//     permissions.role_view,
//     permissions.role_update,
//     permissions.role_delete,

//     // permissions
//     permissions.permission_view,
//     permissions.permission_assign,

//     permissions.system_access,
//   ],

//   manager: [
//     permissions.dashboard_view,

//     // clients
//     permissions.client_view,

//     // projects
//     permissions.project_create,
//     permissions.project_view,
//     permissions.project_update,
//     permissions.project_assign,

//     // invoices
//     permissions.invoice_view,

//     // reports
//     permissions.report_view,
//   ],

//   accountant: [
//     permissions.dashboard_view,

//     // invoices
//     permissions.invoice_create,
//     permissions.invoice_view,
//     permissions.invoice_update,
//     permissions.invoice_approve,

//     // payments
//     permissions.payment_create,
//     permissions.payment_view,
//     permissions.payment_approve,

//     // ledger
//     permissions.ledger_view,
//     permissions.ledger_export,

//     // reports
//     permissions.report_view,
//     permissions.report_export,
//   ],

//   client: [
//     permissions.dashboard_view,

//     // projects
//     permissions.project_view,

//     // invoices
//     permissions.invoice_view,

//     // payments
//     permissions.payment_view,
//   ],
// };

// // ======================================
// // permission helper
// // ======================================

// export const hasPermission = (user, permission) => {
//   if (!user) return false;

//   const permissions = user.permissions || [];

//   if (permissions.includes("*")) return true;

//   return permissions.includes(permission);
// };


