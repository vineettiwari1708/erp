import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import TenantLayout from "../components/layouts/TenantLayout";
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";
import Projects from "../features/projects/Projects";
import Clients from "../features/clients/Clients";
import Invoices from "../features/invoices/Invoices";
import Payments from "../features/payments/Payments";
import Users from "../features/users/Users";
import SystemDashboard from "../features/system/SystemDashboard";
import TenantManagement from "../features/system/TenantManagement";
import CreateCompany from "../features/system/CreateCompany";
import Logout from "../features/auth/Logout";
import TenantDetails from "../features/sytems/TenantDetails";
import Roles from "../features/Roles/Roles";
import RolePermissions from "../features/Roles/RolePermissions";
import Ledger from "../features/ledger/ledger";
import CompanyInvoices from "../features/sytems/CompanyInvoices.JSX";

function Unauthorized() {
  return createElement("h2", { style: { padding: 20 } }, "Unauthorized");
}

export const router = createBrowserRouter([
  { path: "/login", element: createElement(Login) },
  { path: "/unauthorized", element: createElement(Unauthorized) },
  {
    path: "/system",
    element: createElement(
      ProtectedRoute,
      { systemOnly: true },
      createElement(TenantLayout)
    ),
    children: [
      {
        index: true,
        element: createElement(Navigate, { to: "dashboard", replace: true })
      },
      { path: "dashboard", element: createElement(SystemDashboard) },
      { path: "tenants", element: createElement(TenantManagement) },
      { path: "create-company", element: createElement(CreateCompany) },
      { path: "edit-company/:id", element: createElement(CreateCompany) },
      {  path: "tenants/:id",  element: createElement(TenantDetails)},
      { path: "company-invoices/:id", element: createElement(CompanyInvoices) },
      
    ]
  },
  {
    path: "/",
    element: createElement(ProtectedRoute, null, createElement(TenantLayout)),
    children: [
      {
        index: true,
        element: createElement(Navigate, { to: "/dashboard", replace: true })
      },
      { path: "dashboard", element: createElement(Dashboard) },
      { path: "projects", element: createElement(Projects) },
      { path: "clients", element: createElement(Clients) },
      { path: "invoices", element: createElement(Invoices) },
      { path: "payments", element: createElement(Payments) },
      { path: "users", element: createElement(Users) },
      { path: "ledger", element: createElement(Ledger)},
      {
        path: "roles",
        element: createElement(ProtectedRoute, {
          permission: "ROLE_MANAGE",
          children: createElement(Roles),
        }),
},
{
  path: "roles/:id",
  element: createElement(ProtectedRoute, {
    permission: "ROLE_MANAGE",
    children: createElement(RolePermissions),
  }),
},
    ]
  },
   {
    path: "/logout",
    element: createElement(Logout),
  },
]);
