
/**
 * =========================
 * SYSTEM (SUPER ADMIN)
 * =========================
 */

export const mockSuperAdmin = {
  id: "sa_001",
  name: "System Owner",
  email: "system@saas.com",
  systemRole: "SUPER_ADMIN",
  tenantId: null
};

/**
 * =========================
 * TENANTS (COMPANIES)
 * =========================
 */

export const mockTenants = [
  {
    id: "tnt_001",
    name: "Acme Pvt Ltd",
    status: "ACTIVE",
    plan: "PRO",
    createdAt: "2026-01-01T00:00:00Z"
  },
  {
    id: "tnt_002",
    name: "Beta Corp",
    status: "DISABLED",
    plan: "FREE",
    createdAt: "2026-02-01T00:00:00Z"
  }
];

export const mockTenant = {
  id: "tnt_001",
  name: "Acme Pvt Ltd",
  status: "ACTIVE",
  plan: "PRO"
};

/**
 * =========================
 * USERS (TENANT BASED RBAC)
 * =========================
 */

export const mockUsers = [
  {
    id: "usr_001",
    name: "Admin User",
    email: "admin@acme.com",
    role: "ADMIN",
    tenantId: "tnt_001",
    isActive: true
  },
  {
    id: "usr_002",
    name: "Manager User",
    email: "manager@acme.com",
    role: "MANAGER",
    tenantId: "tnt_001"
  },
  {
    id: "usr_003",
    name: "Account User",
    email: "account@acme.com",
    role: "ACCOUNT",
    tenantId: "tnt_001"
  },
  {
    id: "usr_004",
    name: "Client User",
    email: "client@abccorp.com",
    role: "CLIENT",
    tenantId: "tnt_001"
  }
];

/**
 * =========================
 * PROJECTS
 * =========================
 */

export const mockProjects = [
  {
    id: "prj_001",
    tenantId: "tnt_001",
    name: "Website Redesign",
    status: "ACTIVE",
    budget: 50000
  },
  {
    id: "prj_002",
    tenantId: "tnt_001",
    name: "Mobile App",
    status: "PLANNING",
    budget: 120000
  }
];

/**
 * =========================
 * CLIENTS (CREATED BY ADMIN)
 * =========================
 */

export const mockClients = [
  {
    id: "clt_001",
    tenantId: "tnt_001",
    name: "ABC Corp",
    email: "contact@abccorp.com",
    phone: "+91-9999999999",
    createdBy: "usr_001" // ADMIN
  },
  {
    id: "clt_002",
    tenantId: "tnt_001",
    name: "XYZ Ltd",
    email: "info@xyz.com",
    phone: "+91-8888888888",
    createdBy: "usr_001"
  }
];

/**
 * =========================
 * INVOICES (BILLING)
 * =========================
 */

export const mockInvoices = [
  {
    id: "inv_001",
    tenantId: "tnt_001",
    clientId: "clt_001",
    amount: 25000,
    status: "PENDING",
    dueDate: "2026-05-10T00:00:00Z"
  },
  {
    id: "inv_002",
    tenantId: "tnt_001",
    clientId: "clt_002",
    amount: 45000,
    status: "PAID",
    dueDate: "2026-04-20T00:00:00Z"
  }
];

/**
 * =========================
 * PAYMENTS (OFFLINE APPROVAL)
 * =========================
 */

export const mockPayments = [
  {
    id: "pay_001",
    tenantId: "tnt_001",
    invoiceId: "inv_001",
    amount: 25000,
    status: "PENDING", // ADMIN APPROVAL REQUIRED
    proofUrl: "/uploads/receipt1.png",
    submittedBy: "usr_004"
  }
];

/**
 * =========================
 * LEDGER (DOUBLE ENTRY)
 * =========================
 */

export const mockLedger = [
  {
    id: "led_001",
    tenantId: "tnt_001",
    type: "CREDIT",
    amount: 25000,
    source: "INVOICE_PAYMENT",
    referenceId: "inv_001"
  },
  {
    id: "led_002",
    tenantId: "tnt_001",
    type: "DEBIT",
    amount: 5000,
    source: "PROJECT_EXPENSE",
    referenceId: "prj_001"
  }
];

/**
 * =========================
 * NOTIFICATIONS
 * =========================
 */

export const mockNotifications = [
  {
    id: "ntf_001",
    tenantId: "tnt_001",
    title: "Payment Submitted",
    message: "Client uploaded payment proof",
    read: false
  }
];

/**
 * =========================
 * RBAC PERMISSIONS
 * =========================
 */

export const permissions = {
  ADMIN: [
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

/**
 * =========================
 * DASHBOARD SUMMARY
 * =========================
 */

export const mockDashboard = {
  totalRevenue: 70000,
  pendingPayments: 1,
  activeProjects: 2,
  totalClients: 2,
  totalUsers: 4
};