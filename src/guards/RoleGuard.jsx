import { Navigate } from "react-router-dom";
import { useAuth } from "../store/hooks";
import { permissions } from "../assets/mockData/rbac";

/**
 * RoleGuard
 * - protects routes based on role OR permission
 * - supports SUPER_ADMIN override
 */

export default function RoleGuard({
  children,
  roles = [],
  permission = null,
  superAdminOnly = false
}) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  /* =========================
     SUPER ADMIN ONLY
  ========================= */
  if (superAdminOnly) {
    if (user.systemRole !== "SUPER_ADMIN") {
      return <Navigate to="/unauthorized" />;
    }
    return children;
  }

  /* =========================
     ROLE CHECK
  ========================= */
  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  /* =========================
     PERMISSION CHECK
  ========================= */
  if (permission) {
    const rolePermissions = permissions[user.role] || [];

    const hasAccess =
      rolePermissions.includes("*") ||
      rolePermissions.includes(permission);

    if (!hasAccess) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
}