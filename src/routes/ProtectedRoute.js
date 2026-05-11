import { createElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/hooks";
import { permissions } from "../assets/mockData/rbac";

export default function ProtectedRoute({
  children,
  systemOnly = false,
  permission
}) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return createElement(Navigate, { to: "/login", replace: true });
  }

  if (systemOnly && user.systemRole !== "SUPER_ADMIN") {
    return createElement(Navigate, { to: "/unauthorized", replace: true });
  }

  if (permission) {
    const rolePermissions = permissions[user.role] || [];
    const hasAccess =
      rolePermissions.includes("*") ||
      rolePermissions.includes(permission);
    if (!hasAccess) {
      return createElement(Navigate, { to: "/unauthorized", replace: true });
    }
  }

  return children;
}



// import { createElement } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../store/hooks";
// import { roles } from "../assets/mockData/rbac";

// export default function ProtectedRoute({
//   children,
//   systemOnly = false,
//   permission,
// }) {
//   const { user, isAuthenticated } = useAuth();

//   // =========================
//   // NOT AUTHENTICATED
//   // =========================
//   if (!isAuthenticated || !user) {
//     return createElement(Navigate, {
//       to: "/login",
//       replace: true,
//     });
//   }

//   const isSuperAdmin =
//     user?.role === "super_admin";

//   // =========================
//   // SYSTEM ONLY ROUTES
//   // =========================
//   if (systemOnly && !isSuperAdmin) {
//     return createElement(Navigate, {
//       to: "/unauthorized",
//       replace: true,
//     });
//   }

//   // =========================
//   // PERMISSION CHECK
//   // =========================
//   if (permission) {
//     const rolePermissions =
//       roles[user?.role] || [];

//     const hasAccess =
//       rolePermissions.includes("*") ||
//       rolePermissions.includes(permission);

//     if (!hasAccess) {
//       return createElement(Navigate, {
//         to: "/unauthorized",
//         replace: true,
//       });
//     }
//   }

//   return children;
// }