import { Navigate } from "react-router-dom";
import { useAuth } from "../store/hooks";
import { roles } from "../assets/mockData/rbac";

/**
 * RoleGuard (FIXED)
 * - role-based access
 * - permission-based access
 * - super admin support
 */

export default function RoleGuard({
  children,
  roles: allowedRoles = [],
  permission = null,
  superAdminOnly = false,
}) {
  const { user } = useAuth();

  // =========================
  // NOT LOGGED IN
  // =========================
  if (!user) {
    return (
      <Navigate to="/login" replace />
    );
  }

  const isSuperAdmin =
    user?.role === "super_admin";

  // =========================
  // SUPER ADMIN ONLY
  // =========================
  if (superAdminOnly && !isSuperAdmin) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  // =========================
  // ROLE CHECK
  // =========================
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  // =========================
  // PERMISSION CHECK
  // =========================
  if (permission) {
    const rolePermissions =
      roles[user.role] || [];

    const hasAccess =
      rolePermissions.includes("*") ||
      rolePermissions.includes(permission);

    if (!hasAccess) {
      return (
        <Navigate
          to="/unauthorized"
          replace
        />
      );
    }
  }

  return children;
}



// import { Navigate } from "react-router-dom";
// import { useAuth } from "../store/hooks";
// import { roles } from "../assets/mockData/rbac";

// export default function RoleGuard({
//   children,
//   roles: allowedRoles = [],
//   permission = null,
//   superAdminOnly = false,
// }) {
//   const { user } = useAuth();

//   // NOT LOGGED IN
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   const isSuperAdmin = user?.role === "super_admin";

//   // SUPER ADMIN ONLY
//   if (superAdminOnly && !isSuperAdmin) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   // ROLE CHECK
//   if (
//     allowedRoles.length > 0 &&
//     !allowedRoles.includes(user.role)
//   ) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   // PERMISSION CHECK (FIXED)
//   if (permission) {
//     const rolePermissions = roles[user.role] || [];

//     const hasAccess =
//       rolePermissions.includes("*") ||
//       rolePermissions.includes(permission);

//     if (!hasAccess) {
//       return <Navigate to="/unauthorized" replace />;
//     }
//   }

//   return children;
// }