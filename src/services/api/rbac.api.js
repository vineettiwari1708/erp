import { permissions } from "../../assets/mockData/rbac";
import { apiResponse } from "./base.api";

export const getPermissionsByRoleApi = async (role) => {
  return apiResponse(permissions[role] || []);
};