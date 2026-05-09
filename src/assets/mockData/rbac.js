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


export const permissions = {
  ADMIN: [
    "DASHBOARD_VIEW",
    "USER_MANAGE",
    "CLIENT_MANAGE",
    "PROJECT_MANAGE",
    "INVOICE_MANAGE",
    "PAYMENT_APPROVE"
  ],
  MANAGER: [
    "PROJECT_MANAGE",
    "CLIENT_VIEW"
  ],
  ACCOUNT: [
    "INVOICE_VIEW",
    "PAYMENT_VIEW"
  ],
  CLIENT: [
    "PROJECT_VIEW",
    "INVOICE_VIEW"
  ],
  SUPER_ADMIN: ["*"]
};