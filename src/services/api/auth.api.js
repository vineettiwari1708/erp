import { mockUsers } from "../../assets/mockData/users";
import { mockSuperAdmin } from "../../assets/mockData/system";
import { apiResponse } from "./base.api";

export const loginApi = async (email, password) => {
  const user =
    mockUsers.find(
      (u) => u.email === email && u.password === password
    ) ||
    (mockSuperAdmin.email === email &&
    mockSuperAdmin.password === password
      ? mockSuperAdmin
      : null);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return apiResponse({
    user,
    token: "fake-jwt-token",
  });
};