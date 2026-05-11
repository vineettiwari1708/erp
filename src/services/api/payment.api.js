import { mockPayments } from "../../assets/mockData/payments";
import { apiResponse } from "./base.api";

export const getPaymentsApi = async (tenantId) => {
  return apiResponse(
    mockPayments.filter((p) => p.tenantId === tenantId)
  );
};