import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  systemOnly = false,
  permission,
}) {
  const { user, isAuthenticated, hasPermission } =
    useAuth();

  // =========================
  // NOT LOGGED IN
  // =========================
  if (!isAuthenticated || !user) {
    return (
      <Navigate to="/login" replace />
    );
  }

  const isSuperAdmin =
    user?.role === "super_admin";

  // =========================
  // SYSTEM ROUTES
  // =========================
  if (systemOnly && !isSuperAdmin) {
    return (
      <Navigate to="/unauthorized" replace />
    );
  }

  // =========================
  // PERMISSION CHECK
  // =========================
  if (permission && !hasPermission(permission)) {
    return (
      <Navigate to="/unauthorized" replace />
    );
  }

  return children;
}

// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({
//   children,
//   systemOnly = false,
//   permission,
// }) {
//   const {
//     user,
//     isAuthenticated,
//     hasPermission,
//   } = useAuth();

//   // =========================
//   // NOT AUTHENTICATED
//   // =========================
//   if (!isAuthenticated || !user) {
//     return (
//       <Navigate to="/login" replace />
//     );
//   }

//   const isSuperAdmin =
//     user?.role === "super_admin";

//   // =========================
//   // SYSTEM ROUTES CHECK
//   // =========================
//   if (systemOnly && !isSuperAdmin) {
//     return (
//       <Navigate
//         to="/unauthorized"
//         replace
//       />
//     );
//   }

//   // =========================
//   // PERMISSION CHECK
//   // =========================
//   if (
//     permission &&
//     !hasPermission(permission)
//   ) {
//     return (
//       <Navigate
//         to="/unauthorized"
//         replace
//       />
//     );
//   }

//   return children;
// }