import { mockUsers } from "../../assets/mockData/users";
import { apiResponse } from "./base.api";

export const getUsersApi = async (tenantId) => {
  return apiResponse(mockUsers.filter((u) => u.tenantId === tenantId));
};