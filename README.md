# ⚡ CURSOR PROMPT — ERP SAAS FRONTEND (FULL SYSTEM)

Build a **multi-tenant ERP SaaS frontend** using React (Vite) with **role-based access control (RBAC)** and **enterprise architecture (Zoho/Odoo style)**.

---

# 🧠 SYSTEM OVERVIEW

* Multi-tenant system (companies = tenants)
* Only SUPER_ADMIN can create tenants
* Each tenant has:

  * ADMIN
  * MANAGER
  * ACCOUNT
  * CLIENT
* Admin controls roles & permissions inside their tenant
* No public registration (login only system)

---

# 🏗️ TECH STACK

* React + Vite
* React Router DOM
* Context API OR Redux Toolkit
* Service-based API layer (mock for now)

---

# 📁 FOLDER STRUCTURE

Create this exact structure:

```id="folder_structure"
src/
│
├── assets/
│   └── assets.js
│
├── components/
│   └── layout/
│       ├── Sidebar.jsx
│       └── Header.jsx
│
├── features/
│   ├── auth/
│   │   └── Login.jsx
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   ├── projects/
│   │   └── Projects.jsx
│   ├── clients/
│   │   └── Clients.jsx
│   ├── invoices/
│   │   └── Invoices.jsx
│   ├── payments/
│   │   └── Payments.jsx
│   ├── users/
│   │   └── Users.jsx
│   ├── ledger/
│   │   └── Ledger.jsx
│   └── system/
│       └── SystemDashboard.jsx
│
├── guards/
│   └── RoleGuard.jsx
│
├── services/
│   └── api/
│       ├── base.api.js
│       ├── billing.api.js
│       ├── projects.api.js
│       └── tenant.api.js
│
├── store/
│   ├── hooks.js
│   └── store.js
│
├── utils/
│   └── permissions.js
│
├── App.jsx
└── main.jsx
```

---

# 🔐 ROLE SYSTEM

Define roles:

```id="roles"
SUPER_ADMIN
ADMIN
MANAGER
ACCOUNT
CLIENT
```

---

# 🔑 PERMISSIONS (IMPORTANT)

Use permission-based system:

```id="permissions"
DASHBOARD_VIEW
PROJECT_MANAGE
CLIENT_VIEW
CLIENT_MANAGE
INVOICE_VIEW
INVOICE_MANAGE
PAYMENT_VIEW
PAYMENT_APPROVE
USER_MANAGE
LEDGER_VIEW
SYSTEM_ACCESS
```

---

# 🔐 ROLE GUARD

Create a `RoleGuard.jsx` that:

* Redirects to `/login` if not authenticated
* Checks:

  * `superAdminOnly`
  * `roles`
  * `permission`
* SUPER_ADMIN bypasses all restrictions

---

# 🧭 ROUTES

Implement routes in `App.jsx`:

```id="routes"
LOGIN → /login

TENANT ROUTES:
- /dashboard
- /projects
- /clients
- /invoices
- /payments
- /users
- /ledger

SYSTEM ROUTE:
- /system (SUPER_ADMIN only)
```

---

# 🧭 SIDEBAR LOGIC

Sidebar should:

* Show menu based on permissions
* Example:

```id="sidebar_logic"
Dashboard → DASHBOARD_VIEW
Projects → PROJECT_MANAGE
Clients → CLIENT_VIEW
Invoices → INVOICE_VIEW
Payments → PAYMENT_VIEW
Users → USER_MANAGE
Ledger → LEDGER_VIEW
System → SUPER_ADMIN only
```

---

# 🧾 BILLING FLOW

Implement:

* Invoice creation
* Payment submission (client)
* Payment approval (admin)
* Status:

  * PENDING
  * APPROVED
  * REJECTED

---

# 🧠 MOCK API SYSTEM

Create fake backend:

```id="mock_api"
base.api.js → delay + response wrapper
billing.api.js → invoices + payments
projects.api.js → project data
tenant.api.js → tenants
```

Use:

```js id="api_usage"
return apiResponse(data);
```

---

# 📊 DASHBOARD

Create:

### Tenant Dashboard:

* Projects count
* Clients count
* Invoices
* Payments

### System Dashboard:

* Total tenants
* Active / Disabled companies

---

# 🧠 AUTH SYSTEM

Mock user:

```js id="auth_user"
{
  id: "usr_001",
  role: "ADMIN",
  tenantId: "tnt_001"
}
```

SUPER_ADMIN:

```js id="super_admin"
{
  systemRole: "SUPER_ADMIN"
}
```

---

# 🔐 RULES

* No hard delete (use status/soft delete)
* Tenant isolation required
* Admin controls permissions
* SUPER_ADMIN controls system

---

# 🚀 GOAL

Build a **scalable ERP SaaS frontend** that:

* Works without backend (mock API)
* Can be connected to Prisma backend later
* Supports enterprise RBAC
* Clean modular architecture

---

# ⚡ OPTIONAL (IF ASKED)

* Add charts (Recharts)
* Add Redux Toolkit
* Add dynamic permissions UI
* Add notifications system

---

🔥 Output should be **clean, modular, production-ready frontend system**
