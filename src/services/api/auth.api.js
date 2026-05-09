import { mockUsers } from "../../assets/mockData/users";
import { mockSuperAdmin } from "../../assets/mockData/system";
import { apiResponse } from "./base.api";

export const loginApi = async (email) => {
  const user =
    mockUsers.find((u) => u.email === email) ||
    (mockSuperAdmin.email === email ? mockSuperAdmin : null);

  if (!user) throw new Error("User not found");

  return apiResponse({
    user,
    token: "fake-jwt-token"
  });
};