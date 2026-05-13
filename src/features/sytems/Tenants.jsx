// import { useEffect, useState } from "react";
// import { getTenantsApi } from "../../services/api/tenant.api";

// export default function Tenants() {
//   const [tenants, setTenants] = useState([]);

//   useEffect(() => {
//     getTenantsApi().then((res) => setTenants(res.data));
//   }, []);

//   return (
//     <div>
//       <h1>All Companies</h1>

//       {tenants.map((t) => (
//         <div
//           key={t.id}
//           style={{
//             border: "1px solid #ccc",
//             margin: "10px",
//             padding: "10px"
//           }}
//         >
//           <h3>{t.name}</h3>
//           <p>Status: {t.status}</p>
//           <p>Plan: {t.plan}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getTenantsApi } from "../../services/api/tenant.api";

// export default function Tenants() {
//   const [tenants, setTenants] = useState([]);

//   useEffect(() => {
//     loadTenants();
//   }, []);

//   async function loadTenants() {
//     try {
//       const res = await getTenantsApi();
//       setTenants(res.data || []);
//     } catch (err) {
//       console.error("Tenant load error:", err);
//     }
//   }

//   // =========================
//   // TOGGLE STATUS
//   // =========================
//   const toggleStatus = (id) => {
//     setTenants((prev) =>
//       prev.map((t) =>
//         t.id === id
//           ? {
//               ...t,
//               status:
//                 t.status === "ACTIVE"
//                   ? "INACTIVE"
//                   : "ACTIVE",
//             }
//           : t
//       )
//     );
//   };

//   return (
//     <section className="space-y-6">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-900">
//           Companies
//         </h1>
//         <p className="text-sm text-slate-500">
//           Manage all registered tenants
//         </p>
//       </div>

//       {/* LIST */}
//       <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

//         <div className="space-y-3">

//           {tenants.length > 0 ? (
//             tenants.map((t) => (
//               <div
//                 key={t.id}
//                 className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4"
//               >

//                 {/* LEFT */}
//                 <div>
//                   <h3 className="text-sm font-semibold text-slate-800">
//                     {t.name}
//                   </h3>

//                   <p className="text-xs text-slate-500">
//                     Plan: {t.plan || "FREE"}
//                   </p>
//                 </div>

//                 {/* STATUS BADGE */}
//                 <span
//                   className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                     t.status === "ACTIVE"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {t.status}
//                 </span>

//                 {/* ACTION BUTTON */}
//                 <button
//                   onClick={() => toggleStatus(t.id)}
//                   className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
//                     t.status === "ACTIVE"
//                       ? "bg-red-500 text-white hover:bg-red-600"
//                       : "bg-green-600 text-white hover:bg-green-700"
//                   }`}
//                 >
//                   {t.status === "ACTIVE"
//                     ? "Disable"
//                     : "Enable"}
//                 </button>

//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-slate-500">
//               No companies found
//             </p>
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { getTenantsApi } from "../../services/api/tenant.api";

// export default function Tenants() {
//   const [tenants, setTenants] = useState([]);

//   useEffect(() => {
//     loadTenants();
//   }, []);

//   async function loadTenants() {
//     const res = await getTenantsApi();
//     setTenants(res.data || []);
//   }

//   const toggleStatus = (id) => {
//     setTenants((prev) =>
//       prev.map((t) =>
//         t.id === id
//           ? {
//               ...t,
//               status:
//                 t.status === "ACTIVE"
//                   ? "INACTIVE"
//                   : "ACTIVE",
//             }
//           : t
//       )
//     );
//   };

//   return (
//     <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-900">
//           Companies
//         </h1>
//         <p className="text-sm text-slate-500">
//           Manage tenant status
//         </p>
//       </div>

//       {/* TABLE */}
//       <div className="rounded-xl border border-slate-200 bg-white p-4">

//         <div className="space-y-3">

//           {tenants.map((t) => {
//             const isActive = t.status === "ACTIVE";

//             return (
//               <div
//                 key={t.id}
//                 className="grid grid-cols-3 items-center rounded-lg bg-slate-50 px-4 py-3"
//               >

//                 {/* LEFT */}
//                 <div>
//                   <h3 className="text-sm font-semibold text-slate-800">
//                     {t.name}
//                   </h3>
//                   <p className="text-xs text-slate-500">
//                     Plan: {t.plan}
//                   </p>
//                 </div>

//                 {/* CENTER (STATUS BADGE) */}
//                 <div className="flex justify-center">
//                   <span
//                     className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                       isActive
//                         ? "bg-green-100 text-green-700"
//                         : "bg-slate-200 text-slate-700"
//                     }`}
//                   >
//                     {isActive ? "Active" : "Inactive"}
//                   </span>
//                 </div>

//                 {/* RIGHT (ACTION BUTTON) */}
//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => toggleStatus(t.id)}
//                     className={`rounded-lg px-4 py-2 text-xs font-medium text-white transition ${
//                       isActive
//                         ? "bg-red-500 hover:bg-red-600"
//                         : "bg-green-600 hover:bg-green-700"
//                     }`}
//                   >
//                     {isActive ? "Disable" : "Enable"}
//                   </button>
//                 </div>

//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTenantsApi } from "../../services/api/tenant.api";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    const res = await getTenantsApi();
    setTenants(res.data || []);
  }

  const toggleStatus = (id) => {
    setTenants((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === "ACTIVE"
                  ? "INACTIVE"
                  : "ACTIVE",
            }
          : t
      )
    );
  };

  return (
    <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Companies
        </h1>
        <p className="text-sm text-slate-500">
          Manage tenant status
        </p>
      </div>

      {/* TABLE */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">

        <div className="space-y-3">

          {tenants.map((t) => {
            const isActive = t.status === "ACTIVE";

            return (
              <div
                key={t.id}
                className="grid grid-cols-3 items-center rounded-lg bg-slate-50 px-4 py-3 hover:bg-slate-100 transition"
              >

                {/* LEFT (NOW CLICKABLE) */}
                <Link
                  to={`/system/tenants/${t.id}`}
                  className="text-left"
                >
                  <h3 className="text-sm font-semibold text-slate-800 hover:text-indigo-600">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Plan: {t.plan}
                  </p>
                </Link>

                {/* CENTER (STATUS BADGE) */}
                <div className="flex justify-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                {/* RIGHT (ACTION BUTTON) */}
                <div className="flex justify-end">
                  <button
                    onClick={() => toggleStatus(t.id)}
                    className={`rounded-lg px-4 py-2 text-xs font-medium text-white transition ${
                      isActive
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {isActive ? "Disable" : "Enable"}
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

