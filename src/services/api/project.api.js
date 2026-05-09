import { mockProjects } from "../../assets/mockData/projects";
import { apiResponse } from "./base.api";

export const getProjectsApi = async (tenantId) => {
  return apiResponse(
    mockProjects.filter((p) => p.tenantId === tenantId)
  );
};