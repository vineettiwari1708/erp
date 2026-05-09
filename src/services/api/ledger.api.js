import { mockLedger } from "../../assets/mockData/ledger";
import { apiResponse } from "./base.api";

export const getLedgerApi = async (tenantId) => {
  return apiResponse(
    mockLedger.filter((l) => l.tenantId === tenantId)
  );
};