import { mockClients } from "../../assets/mockData/clients";
import { apiResponse } from "./base.api";

export const getClientsApi = async (tenantId) => {
  return apiResponse(
    mockClients.filter((c) => c.tenantId === tenantId)
  );
};