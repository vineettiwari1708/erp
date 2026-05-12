// import { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";

// import { permissions } from "../../assets/mockData/rbac";
// import { mockUsers } from "../../assets/mockData/users";

// export default function RolePermissions() {
//   const { id } = useParams();

//   // =========================
//   // GET ROLE NAME FROM ID
//   // =========================

//   const roleName = useMemo(() => {
//     const roles = Object.keys(permissions).filter(
//       (r) => r !== "SUPER_ADMIN"
//     );

//     return roles[Number(id) - 1];
//   }, [id]);

//   const rolePermissions = permissions[roleName] || [];

//   // =========================
//   // LOCAL STATE (UI ONLY)
//   // =========================

//   const [selectedPermissions, setSelectedPermissions] =
//     useState(rolePermissions);

//   // =========================
//   // ALL AVAILABLE PERMISSIONS
//   // =========================

//   const allPermissions = useMemo(() => {
//     return [
//       ...new Set(
//         Object.values(permissions)
//           .flat()
//           .filter((p) => p !== "*")
//       ),
//     ];
//   }, []);

//   // =========================
//   // TOGGLE HANDLER
//   // =========================

//   function togglePermission(permission) {
//     setSelectedPermissions((prev) => {
//       if (prev.includes(permission)) {
//         return prev.filter((p) => p !== permission);
//       }
//       return [...prev, permission];
//     });
//   }

//   // =========================
//   // USERS COUNT
//   // =========================

//   const usersCount = mockUsers.filter(
//     (u) => u.role === roleName
//   ).length;

//   return (
//     <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

//       {/* ================= HEADER ================= */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-900">
//           {roleName} Permissions
//         </h1>
//         <p className="text-sm text-slate-500">
//           Manage access control for this role
//         </p>
//       </div>

//       {/* ================= ROLE INFO ================= */}
//       <div className="rounded-xl border border-slate-200 bg-white p-4">

//         <div className="flex items-center justify-between">

//           <div>
//             <h2 className="text-lg font-semibold text-slate-800">
//               {roleName}
//             </h2>

//             <p className="text-sm text-slate-500">
//               Users assigned: {usersCount}
//             </p>
//           </div>

//           <span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700">
//             ACTIVE
//           </span>

//         </div>

//       </div>

//       {/* ================= SAVE BAR ================= */}
//       <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 flex items-center justify-between">

//         <p className="text-sm text-indigo-700">
//           Update permissions for this role
//         </p>

//         <button
//           onClick={() =>
//             console.log("Saved:", selectedPermissions)
//           }
//           className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
//         >
//           Save Changes
//         </button>

//       </div>

//       {/* ================= PERMISSIONS GRID ================= */}
//       <div className="rounded-xl border border-slate-200 bg-white p-4">

//         <h3 className="mb-3 text-base font-semibold text-slate-800">
//           Permissions
//         </h3>

//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

//           {allPermissions.map((permission) => {
//             const isChecked =
//               selectedPermissions.includes(permission);

//             return (
//               <label
//                 key={permission}
//                 className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 cursor-pointer"
//               >

//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={() =>
//                     togglePermission(permission)
//                   }
//                   className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
//                 />

//                 <span className="text-sm text-slate-700">
//                   {permission}
//                 </span>

//               </label>
//             );
//           })}

//         </div>

//       </div>

//     </section>
//   );
// }

import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { permissions } from "../../assets/mockData/rbac";

export default function RolePermissions() {
  const { id } = useParams();

  const roleName = id;

  const rolePermissions = permissions[roleName] || [];

  const allPermissions = useMemo(() => {
    return [
      ...new Set(
        Object.values(permissions)
          .flat()
          .filter((p) => p !== "*"),
      ),
    ];
  }, []);

  return (
    <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">
      {/* ================= HEADER ================= */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-white border p-5">
        <h1 className="text-2xl font-bold text-slate-900">
          {roleName} Permissions
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Control what this role can access in the system
        </p>
      </div>

      {/* ================= ROLE INFO CARD ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-slate-500">Role</p>
          <h2 className="text-lg font-semibold text-slate-800">{roleName}</h2>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-slate-500">Permissions</p>
          <h2 className="text-lg font-semibold text-indigo-600">
            {rolePermissions.includes("*")
              ? "Full Access"
              : rolePermissions.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-slate-500">Status</p>
          <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            ACTIVE
          </span>
        </div>
      </div>

      {/* ================= PERMISSIONS HEADER ================= */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-800">
          Permission Matrix
        </h3>

       
      </div>

      {/* ================= PERMISSION GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {allPermissions.map((permission) => {
          const checked =
            rolePermissions.includes("*") ||
            rolePermissions.includes(permission);
          function formatPermission(permission) {
            return permission.replace(/_/g, " ");
          }
          return (
            <label
              key={permission}
              className={`flex items-center justify-between gap-3 p-3 rounded-xl border cursor-pointer transition
                ${
                  checked
                    ? "bg-indigo-50 border-indigo-300"
                    : "bg-white hover:bg-slate-50"
                }`}
            >
              <span className="text-sm text-slate-700 font-medium">
                {formatPermission(permission)}
              </span>

              <input
                type="checkbox"
                checked={checked}
                readOnly
                className="h-4 w-4 accent-indigo-600"
              />
            </label>
          );
        })}
      </div>

      {/* ================= FOOTER ACTION ================= */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => console.log(rolePermissions)}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Save Permissions
        </button>
      </div>
    </section>
  );
}
