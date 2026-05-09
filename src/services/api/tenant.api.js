import { mockTenants } from "../../assets/mockData/tenants";
import { apiResponse } from "./base.api";

export const getTenantsApi = async () => {
  return apiResponse(mockTenants);
};

export const getTenantByIdApi = async (id) => {
  return apiResponse(mockTenants.find((t) => t.id === id));
};