import { mockTenants } from "../../assets/mockData/tenants";
import { apiResponse } from "./base.api";

export const getTenantsApi = async () => {
  return apiResponse(mockTenants);
};

export const getTenantByIdApi = async (id) => {
  return apiResponse(mockTenants.find((t) => t.id === id));
};

export const createTenantApi = async (payload) => {
  const name = payload?.name?.trim();
  if (!name) {
    throw new Error("Company name is required");
  }

  const newTenant = {
    id: `tnt_${Date.now()}`,
    name,
    status: payload?.status || "ACTIVE",
    plan: payload?.plan || "FREE",
    adminEmail: payload?.adminEmail || ""
  };

  mockTenants.unshift(newTenant);
  return apiResponse(newTenant);
};