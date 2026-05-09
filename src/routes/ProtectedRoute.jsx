import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  systemOnly = false,
  permission
}) {
  const { user, hasPermission } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (systemOnly && user.role !== "SUPER_ADMIN") {
    return <Navigate to="/unauthorized" />;
  }

  if (permission && !hasPermission(permission)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}