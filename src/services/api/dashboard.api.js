import { mockDashboard } from "../../assets/mockData/dashboard";
import { apiResponse } from "./base.api";

export const getDashboardApi = async () => {
  return apiResponse(mockDashboard);
};