import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* =========================
   LAYOUT
========================= */
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

/* =========================
   GUARDS
========================= */
import RoleGuard from "./guards/RoleGuard";

/* =========================
   FEATURES
========================= */
import Login from "./features/auth/Login";
import Dashboard from "./features/dashboard/Dashboard";
import Projects from "./features/projects/Projects";
import Clients from "./features/clients/Clients";
import Invoices from "./features/invoices/Invoices";

/* OPTIONAL (add when created) */
import Payments from "./features/payments/Payments";
import Users from "./features/users/Users";
import Ledger from "./features/ledger/Ledger";
import SystemDashboard from "./features/system/SystemDashboard";

/* =========================
   MAIN LAYOUT
========================= */
function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </div>
  );
}

/* =========================
   APP
========================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />

        {/* ================= DEFAULT REDIRECT ================= */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* ================= DASHBOARD ================= */}
        <Route
          path="/dashboard"
          element={
            <RoleGuard permission="DASHBOARD_VIEW">
              <Layout>
                <Dashboard />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= PROJECTS ================= */}
        <Route
          path="/projects"
          element={
            <RoleGuard permission="PROJECT_MANAGE">
              <Layout>
                <Projects />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= CLIENTS ================= */}
        <Route
          path="/clients"
          element={
            <RoleGuard permission="CLIENT_VIEW">
              <Layout>
                <Clients />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= INVOICES ================= */}
        <Route
          path="/invoices"
          element={
            <RoleGuard permission="INVOICE_VIEW">
              <Layout>
                <Invoices />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= PAYMENTS ================= */}
        <Route
          path="/payments"
          element={
            <RoleGuard permission="PAYMENT_VIEW">
              <Layout>
                <Payments />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= USERS ================= */}
        <Route
          path="/users"
          element={
            <RoleGuard permission="USER_MANAGE">
              <Layout>
                <Users />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= LEDGER ================= */}
        <Route
          path="/ledger"
          element={
            <RoleGuard permission="LEDGER_VIEW">
              <Layout>
                <Ledger />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= SYSTEM (SUPER ADMIN) ================= */}
        <Route
          path="/system"
          element={
            <RoleGuard superAdminOnly={true}>
              <Layout>
                <SystemDashboard />
              </Layout>
            </RoleGuard>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
}