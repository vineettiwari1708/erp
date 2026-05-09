import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

/* Layouts */
import SystemLayout from "../components/layouts/SystemLayout";
import TenantLayout from "../components/layouts/TenantLayout";

/* Pages */
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";
import Projects from "../features/projects/Projects";
import Clients from "../features/clients/Clients";
import Invoices from "../features/invoices/Invoices";
import Payments from "../features/payments/Payments";
import Users from "../features/users/Users";
import CreateCompany from "../features/system/CreateCompany";

/* System */
import SystemDashboard from "../features/system/SystemDashboard";
import Tenants from "../features/system/TenantManagement";
import CreateCompany from "../features/system/CreateCompany";

export const router = createBrowserRouter([
  /* AUTH */
  {
    path: "/login",
    element: <Login />
  },

  /* SYSTEM ADMIN */
  {
    path: "/system",
    element: (
      <ProtectedRoute systemOnly={true}>
        <SystemLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <SystemDashboard /> },
      { path: "tenants", element: <Tenants /> },
      { path: "create-company", element: <CreateCompany /> }
    ]
  },

  /* TENANT APP */
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <TenantLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },

      {
        path: "projects",
        element: (
          <ProtectedRoute permission="PROJECT_VIEW">
            <Projects />
          </ProtectedRoute>
        )
      },
      {
        path: "clients",
        element: (
          <ProtectedRoute permission="CLIENT_VIEW">
            <Clients />
          </ProtectedRoute>
        )
      },
      {
        path: "invoices",
        element: (
          <ProtectedRoute permission="INVOICE_VIEW">
            <Invoices />
          </ProtectedRoute>
        )
      },
      {
        path: "payments",
        element: (
          <ProtectedRoute permission="PAYMENT_VIEW">
            <Payments />
          </ProtectedRoute>
        )
      },
      {
        path: "users",
        element: (
          <ProtectedRoute permission="USER_MANAGE">
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: "system/create-company",
        element: (
          <ProtectedRoute systemOnly={true}>
            <CreateCompany />
          </ProtectedRoute>
        )
      },
      {
        path: "system/projects",
        element: (
          <ProtectedRoute systemOnly={true}>
            <Projects />
          </ProtectedRoute>
        )
      },
      {
        path: "system/users",
        element: (
          <ProtectedRoute systemOnly={true}>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: "system/invoices",
        element: (
          <ProtectedRoute systemOnly={true}>
            <Invoices />
          </ProtectedRoute>
        )
      },
      {
        path: "system/payments",
        element: (
          <ProtectedRoute systemOnly={true}>
            <Payments />
          </ProtectedRoute>
        )
      },
      {
        path: "system/clients",
        element: (
          <ProtectedRoute systemOnly={true}>
            <Clients />
          </ProtectedRoute>
        )
      }
    ]
  }
]);