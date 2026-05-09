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