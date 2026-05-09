import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import TenantLayout from "../components/layouts/TenantLayout";
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";
import Projects from "../features/projects/Projects";
import Clients from "../features/clients/Clients";
import Invoices from "../features/invoices/Invoices";
import Invoice from "../features/invoices/Invoice";
import Payments from "../features/payments/Payments";
import Users from "../features/users/Users";
import SystemDashboard from "../features/system/SystemDashboard";
import TenantManagement from "../features/system/TenantManagement";

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
      { path: "tenants", element: createElement(TenantManagement) }
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
       { path: "invoice", element: createElement(Invoice) },
      { path: "clients", element: createElement(Clients) },
      { path: "invoices", element: createElement(Invoices) },
      { path: "payments", element: createElement(Payments) },
      { path: "users", element: createElement(Users) }
    ]
  }
]);
