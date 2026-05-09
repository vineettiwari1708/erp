import { mockInvoices } from "../../assets/mockData/invoices";
import { apiResponse } from "./base.api";

export const getInvoicesApi = async (tenantId) => {
  return apiResponse(
    mockInvoices.filter((i) => i.tenantId === tenantId)
  );
};