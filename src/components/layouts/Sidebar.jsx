// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../store/hooks";
// import { permissions } from "../../assets/mockData/rbac";

// const menu = [
//   { name: "Dashboard", path: "/dashboard", perm: "DASHBOARD_VIEW" },
//   { name: "Projects", path: "/projects", perm: "PROJECT_MANAGE" },
//   { name: "Clients", path: "/clients", perm: "CLIENT_VIEW" },
//   { name: "Invoices", path: "/invoices", perm: "INVOICE_VIEW" },
//   { name: "Payments", path: "/payments", perm: "PAYMENT_VIEW" },
//   { name: "Users", path: "/users", perm: "USER_MANAGE" },
//   { name: "Ledger", path: "/ledger", perm: "LEDGER_VIEW" },
//   { name: "System", path: "/system", perm: "SYSTEM_ACCESS" }
// ];

// const superAdminMenu = [
//   { name: "Create Company", path: "/system/create-company" },
//   { name: "Project List", path: "/system/projects" },
//   { name: "User List", path: "/system/users" },
//   { name: "All Invoices", path: "/system/invoices" },
//   { name: "All Payments", path: "/system/payments" },
//   { name: "All Clients", path: "/system/clients" }
// ];

// export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
//   const { user } = useAuth();

//   const isSuperAdmin = user?.systemRole === "SUPER_ADMIN";

//   const rolePermissions = permissions[user?.role] || [];
//   const allowedMenu = isSuperAdmin
//     ? superAdminMenu
//     : menu.filter(
//         (item) =>
//           rolePermissions.includes(item.perm) || rolePermissions.includes("*")
//       );

//   return (
//     <>
//       <div
//         className={`fixed inset-0 z-30 bg-slate-900/40 transition-opacity lg:hidden ${
//           sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
//         }`}
//         onClick={() => setSidebarOpen(false)}
//       />

//       <aside
//         className={`fixed left-0 top-0 z-40 h-screen w-72 -translate-x-full border-r border-slate-200 bg-white p-4 shadow-xl transition-transform lg:static lg:z-0 lg:h-auto lg:translate-x-0 lg:shadow-none ${
//           sidebarOpen ? "translate-x-0" : ""
//         }`}
//       >
//         <div className="mb-6 border-b border-slate-200 pb-4">
//           <p className="text-xs uppercase tracking-widest text-slate-500">Urbanfeat ERP System</p>
//           <h2 className="mt-1 text-lg font-semibold text-slate-900">Control Panel</h2>
//           <p className="mt-2 text-sm text-slate-600">{user?.name || "Guest User"}</p>
//         </div>

//         <nav className="space-y-1">
//           {allowedMenu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => setSidebarOpen(false)}
//               className={({ isActive }) =>
//                 `block rounded-lg px-3 py-2 text-sm transition ${
//                   isActive
//                     ? "bg-indigo-50 text-indigo-700"
//                     : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////


// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../store/hooks";
// import { permissions } from "../../assets/mockData/rbac";

// /* ================= MENU ================= */

// export const menu = [
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     perm: "DASHBOARD_VIEW",
//   },

//   {
//     name: "Projects",
//     path: "/projects",
//     perm: "PROJECT_VIEW",
//   },

//   {
//     name: "Clients",
//     path: "/clients",
//     perm: "CLIENT_VIEW",
//   },

//   {
//     name: "Invoices",
//     path: "/invoices",
//     perm: "INVOICE_VIEW",
//   },

//   {
//     name: "Payments",
//     path: "/payments",
//     perm: "PAYMENT_VIEW",
//   },

//   {
//     name: "Users",
//     path: "/users",
//     perm: "USER_MANAGE",
//   },

//   {
//     name: "Ledger",
//     path: "/ledger",
//     perm: "LEDGER_VIEW",
//   },

//   // SYSTEM should ONLY be visible if system access exists
//   {
//     name: "System",
//     path: "/system",
//     perm: "SYSTEM_ACCESS",
//   },
//   {
//     name: "Roles",
//     path: "/roles",
//     perm: "ROLE_MANAGE",
//   }
// ];

// /* ================= SUPER ADMIN ================= */

// export const superAdminMenu = [
//   {
//     name: "System Dashboard",
//     path: "/system/dashboard",
//   },

//   {
//     name: "Create Company",
//     path: "/system/create-company",
//   },

//   {
//     name: "Companies",
//     path: "/system/tenants",
//   },

//   // {
//   //   name: "Projects",
//   //   path: "/system/projects",
//   // },

//   // {
//   //   name: "Users",
//   //   path: "/system/users",
//   // },

//   // {
//   //   name: "Invoices",
//   //   path: "/system/invoices",
//   // },

//   // {
//   //   name: "Payments",
//   //   path: "/system/payments",
//   // },

//   // {
//   //   name: "Clients",
//   //   path: "/system/clients",
//   // },
// ];
// /* ================= COMPONENT ================= */

// export default function Sidebar({
//   sidebarOpen,
//   setSidebarOpen,
// }) {
//   const { user } = useAuth();

//   const isSuperAdmin =
//     user?.systemRole === "SUPER_ADMIN";

//   const rolePermissions =
//     permissions[user?.role] || [];

//   const allowedMenu = isSuperAdmin
//     ? superAdminMenu
//     : menu.filter(
//         (item) =>
//           rolePermissions.includes(item.perm) ||
//           rolePermissions.includes("*")
//       );

//   return (
//     <>
//       {/* ================= MOBILE OVERLAY ================= */}

//       <div
//         className={`fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden ${
//           sidebarOpen
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={() =>
//           setSidebarOpen(false)
//         }
//       />

//       {/* ================= SIDEBAR ================= */}

//     <aside
//   className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col -translate-x-full border-r border-slate-200 bg-blue-900 p-5 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
//     sidebarOpen
//       ? "translate-x-0"
//       : ""
//   }`}
// >
//   {/* ================= TOP ================= */}

//   <div>
    
//     {/* ================= LOGO ================= */}

//     <div className="mb-8 border-b border-blue-800 pb-5">
      
//       <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
//         Urbanfeat ERP
//       </p>

//       <h2 className="mt-1 text-2xl font-bold">
//         Control Panel
//       </h2>

//       <p className="mt-3 text-sm text-blue-200">
//         {user?.name || "Guest User"}
//       </p>

//     </div>

//     {/* ================= NAVIGATION ================= */}

//     <nav className="space-y-2">
//       {allowedMenu.map((item) => (
//         <NavLink
//           key={item.path}
//           to={item.path}
//           onClick={() =>
//             setSidebarOpen(false)
//           }
//           className={({ isActive }) =>
//             `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
//               isActive
//                 ? "bg-white text-blue-900 shadow"
//                 : "text-blue-100 hover:bg-blue-800 hover:text-white"
//             }`
//           }
//         >
//           {item.name}
//         </NavLink>
//       ))}
//     </nav>

//   </div>

//   {/* ================= LOGOUT ================= */}

//   <div className="mt-auto border-t border-blue-800 pt-5">
    
//     <NavLink
//       to="/logout"
//       onClick={() =>
//         setSidebarOpen(false)
//       }
//       className="block rounded-xl bg-red-500 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-red-600"
//     >
//       Logout
//     </NavLink>

//   </div>
// </aside>
//     </>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////

import {
  Home,
  LayoutDashboard,
  FolderKanban,
  Users,
  Receipt,
  Wallet,
  Shield,
  BookOpen,
  Settings,
  Power,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/hooks";
import { permissions } from "../../assets/mockData/rbac";

/* ================= MENU ================= */

export const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    perm: "DASHBOARD_VIEW",
    icon: LayoutDashboard,
  },

  {
    name: "Projects",
    path: "/projects",
    perm: "PROJECT_VIEW",
    icon: FolderKanban,
  },

  {
    name: "Clients",
    path: "/clients",
    perm: "CLIENT_VIEW",
    icon: Users,
  },

  {
    name: "Invoices",
    path: "/invoices",
    perm: "INVOICE_VIEW",
    icon: Receipt,
  },

  {
    name: "Payments",
    path: "/payments",
    perm: "PAYMENT_VIEW",
    icon: Wallet,
  },

  {
    name: "Users",
    path: "/users",
    perm: "USER_MANAGE",
    icon: Users,
  },

  {
    name: "Ledger",
    path: "/ledger",
    perm: "LEDGER_VIEW",
    icon: BookOpen,
  },

  {
    name: "System",
    path: "/system",
    perm: "SYSTEM_ACCESS",
    icon: Settings,
  },

  {
    name: "Roles",
    path: "/roles",
    perm: "ROLE_MANAGE",
    icon: Shield,
  },
];

/* ================= SUPER ADMIN ================= */

export const superAdminMenu = [
  {
    name: "System Dashboard",
    path: "/system/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Create Company",
    path: "/system/create-company",
    icon: Users,
  },

  {
    name: "Companies",
    path: "/system/tenants",
    icon: FolderKanban,
  },
];

/* ================= COMPONENT ================= */

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  compact,
  setCompact,
}) {
  const { user } = useAuth();

  const isSuperAdmin =
    user?.systemRole === "SUPER_ADMIN";

  const rolePermissions =
    permissions[user?.role] || [];

  const allowedMenu = isSuperAdmin
    ? superAdminMenu
    : menu.filter(
        (item) =>
          rolePermissions.includes(item.perm) ||
          rolePermissions.includes("*")
      );

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}

      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden ${
          sidebarOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() =>
          setSidebarOpen(false)
        }
      />

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-slate-200 bg-blue-900 p-5 text-white transition-all duration-300 lg:static ${
          compact ? "w-24" : "w-64"
        } ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* ================= TOP ================= */}

        <div>
          {/* ================= LOGO ================= */}

          <div
            className={`mb-8 border-b border-blue-800 pb-5 ${
              compact
                ? "flex justify-center"
                : ""
            }`}
          >
            {compact ? (
              <Home size={28} />
            ) : (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                  Urbanfeat ERP
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Control Panel
                </h2>

                <p className="mt-3 text-sm text-blue-200">
                  {user?.name || "Guest User"}
                </p>
              </div>
            )}
          </div>

          {/* ================= NAVIGATION ================= */}

          <nav className="space-y-2">
            {allowedMenu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      compact
                        ? "justify-center"
                        : "gap-3"
                    } ${
                      isActive
                        ? "bg-white text-blue-900 shadow"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />

                  {!compact && (
                    <span>{item.name}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-auto border-t border-blue-800 pt-5 space-y-3">
          {/* ================= LOGOUT ================= */}

          <NavLink
            to="/logout"
            onClick={() =>
              setSidebarOpen(false)
            }
            className={`flex items-center rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-600 ${
              compact
                ? "justify-center"
                : "justify-center gap-2"
            }`}
          >
            <Power size={18} />

            {!compact && <span>Logout</span>}
          </NavLink>

          {/* ================= TOGGLE ================= */}

          {/* <button
            onClick={() =>
              setCompact(!compact)
            }
            className="flex w-full items-center justify-center rounded-xl bg-blue-800 px-4 py-3 transition hover:bg-blue-700"
          >
            {compact ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button> */}
        </div>
      </aside>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////

// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../store/hooks";

// import {
//   permissions,
//   roles,
// } from "../../assets/mockData/rbac";

// /* ================= MENU ================= */

// export const menu = [
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     perm: permissions.dashboard_view,
//   },
//   {
//     name: "Projects",
//     path: "/projects",
//     perm: permissions.project_view,
//   },
//   {
//     name: "Clients",
//     path: "/clients",
//     perm: permissions.client_view,
//   },
//   {
//     name: "Invoices",
//     path: "/invoices",
//     perm: permissions.invoice_view,
//   },
//   {
//     name: "Payments",
//     path: "/payments",
//     perm: permissions.payment_view,
//   },
//   {
//     name: "Users",
//     path: "/users",
//     perm: permissions.user_view,
//   },
//   {
//     name: "Ledger",
//     path: "/ledger",
//     perm: permissions.ledger_view,
//   },
//   {
//     name: "System",
//     path: "/system",
//     perm: permissions.system_access,
//   },
// ];

// /* ================= SUPER ADMIN MENU ================= */

// export const superAdminMenu = [
//   { name: "System Dashboard", path: "/system/dashboard" },
//   { name: "Create Company", path: "/system/create-company" },
//   { name: "Companies", path: "/system/tenants" },
//   { name: "Projects", path: "/system/projects" },
//   { name: "Users", path: "/system/users" },
//   { name: "Invoices", path: "/system/invoices" },
//   { name: "Payments", path: "/system/payments" },
//   { name: "Clients", path: "/system/clients" },
// ];

// /* ================= COMPONENT ================= */

// export default function Sidebar({
//   sidebarOpen,
//   setSidebarOpen,
// }) {
//   const { user } = useAuth();

//   const isSuperAdmin =
//     user?.role === "super_admin";

//   const rolePermissions =
//     roles[user?.role] || [];

//   const normalizedPermissions =
//     isSuperAdmin
//       ? ["*"]
//       : rolePermissions;

//   const hasAccess = (perm) =>
//     normalizedPermissions.includes("*") ||
//     normalizedPermissions.includes(perm);

//   const allowedMenu = isSuperAdmin
//     ? superAdminMenu
//     : menu.filter((item) =>
//         hasAccess(item.perm)
//       );

//   return (
//     <>
//       {/* OVERLAY */}
//       <div
//         className={`fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden ${
//           sidebarOpen
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={() =>
//           setSidebarOpen(false)
//         }
//       />

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col -translate-x-full bg-blue-900 p-5 text-white transition-transform lg:static lg:translate-x-0 ${
//           sidebarOpen
//             ? "translate-x-0"
//             : ""
//         }`}
//       >
//         {/* HEADER */}
//         <div className="mb-8 border-b border-blue-800 pb-5">
//           <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
//             ERP System
//           </p>

//           <h2 className="mt-1 text-2xl font-bold">
//             Control Panel
//           </h2>

//           <p className="mt-3 text-sm text-blue-200">
//             {user?.name || "Guest"}
//           </p>
//         </div>

//         {/* NAV */}
//         <nav className="space-y-2">
//           {allowedMenu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() =>
//                 setSidebarOpen(false)
//               }
//               className={({ isActive }) =>
//                 `block rounded-xl px-4 py-3 text-sm font-medium transition ${
//                   isActive
//                     ? "bg-white text-blue-900"
//                     : "text-blue-100 hover:bg-blue-800"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* LOGOUT */}
//         <div className="mt-auto border-t border-blue-800 pt-5">
//           <NavLink
//             to="/logout"
//             onClick={() =>
//               setSidebarOpen(false)
//             }
//             className="block rounded-xl bg-red-500 px-4 py-3 text-center text-sm font-medium text-white hover:bg-red-600"
//           >
//             Logout
//           </NavLink>
//         </div>
//       </aside>
//     </>
//   );
// }