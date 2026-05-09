import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/hooks";
import { permissions } from "../../assets/mockData/rbac";

const menu = [
  { name: "Dashboard", path: "/dashboard", perm: "DASHBOARD_VIEW" },
  { name: "Projects", path: "/projects", perm: "PROJECT_MANAGE" },
  { name: "Clients", path: "/clients", perm: "CLIENT_VIEW" },
  { name: "Invoices", path: "/invoices", perm: "INVOICE_VIEW" },
  { name: "Payments", path: "/payments", perm: "PAYMENT_VIEW" },
  { name: "Users", path: "/users", perm: "USER_MANAGE" },
  { name: "Ledger", path: "/ledger", perm: "LEDGER_VIEW" },
  { name: "System", path: "/system", perm: "SYSTEM_ACCESS" }
];

const superAdminMenu = [
  { name: "Create Company", path: "/system/create-company" },
  { name: "Project List", path: "/system/projects" },
  { name: "User List", path: "/system/users" },
  { name: "All Invoices", path: "/system/invoices" },
  { name: "All Payments", path: "/system/payments" },
  { name: "All Clients", path: "/system/clients" }
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();

  const isSuperAdmin = user?.systemRole === "SUPER_ADMIN";

  const rolePermissions = permissions[user?.role] || [];
  const allowedMenu = isSuperAdmin
    ? superAdminMenu
    : menu.filter(
        (item) =>
          rolePermissions.includes(item.perm) || rolePermissions.includes("*")
      );

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-900/40 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 -translate-x-full border-r border-slate-200 bg-white p-4 shadow-xl transition-transform lg:static lg:z-0 lg:h-auto lg:translate-x-0 lg:shadow-none ${
          sidebarOpen ? "translate-x-0" : ""
        }`}
      >
        <div className="mb-6 border-b border-slate-200 pb-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">Urbanfeat ERP System</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">Control Panel</h2>
          <p className="mt-2 text-sm text-slate-600">{user?.name || "Guest User"}</p>
        </div>

        <nav className="space-y-1">
          {allowedMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}