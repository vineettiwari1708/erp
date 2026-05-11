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

// import { mockUsers } from "../../assets/mockData/users";
// import { mockSuperAdmin } from "../../assets/mockData/system";
// import { apiResponse } from "./base.api";
// import { roles } from "../../assets/mockData/rbac";

// export const loginApi = async (email) => {
//   const user =
//     mockUsers.find((u) => u.email === email) ||
//     (mockSuperAdmin.email === email ? mockSuperAdmin : null);

//   if (!user) throw new Error("User not found");

//   // 🔥 ATTACH ROLE PERMISSIONS HERE (IMPORTANT FIX)
//   const rolePermissions =
//     roles[user.role] || [];

//   const enrichedUser = {
//     ...user,
//     permissions: rolePermissions, // IMPORTANT
//   };

//   return apiResponse({
//     user: enrichedUser,
//     token: "fake-jwt-token",
//   });
// };