import { useSelector } from "react-redux";

export const useAuth = () => useSelector((state) => state.auth);

export const usePermissions = () =>
  useSelector((state) => state.permission.permissions);

export const useTenant = () =>
  useSelector((state) => state.tenant.currentTenant);