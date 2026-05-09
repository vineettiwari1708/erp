// import { useEffect, useState } from "react";
// import { getProjectsApi } from "../../services/api/projects.api";
// import { getInvoicesApi, getPaymentsApi } from "../../services/api/billing.api";
// import { mockClients, mockUsers } from "../../assets/assets";

// export default function Dashboard() {
//   const [data, setData] = useState({
//     projects: [],
//     invoices: [],
//     payments: []
//   });

//   const tenantId = "tnt_001"; // later from auth

//   useEffect(() => {
//     async function load() {
//       const projects = await getProjectsApi(tenantId);
//       const invoices = await getInvoicesApi(tenantId);
//       const payments = await getPaymentsApi(tenantId);

//       setData({
//         projects: projects.data,
//         invoices: invoices.data,
//         payments: payments.data
//       });
//     }

//     load();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {/* ================= STATS ================= */}
//       <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
//         <Card title="Projects" value={data.projects.length} />
//         <Card title="Clients" value={mockClients.length} />
//         <Card title="Invoices" value={data.invoices.length} />
//         <Card title="Payments" value={data.payments.length} />
//         <Card title="Users" value={mockUsers.length} />
//       </div>

//       {/* ================= RECENT ================= */}
//       <div style={{ display: "flex", gap: 20 }}>
//         <div style={{ flex: 1 }}>
//           <h3>Recent Projects</h3>
//           {data.projects.map((p) => (
//             <p key={p.id}>{p.name}</p>
//           ))}
//         </div>

//         <div style={{ flex: 1 }}>
//           <h3>Recent Invoices</h3>
//           {data.invoices.map((i) => (
//             <p key={i.id}>
//               ₹{i.amount} - {i.status}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= CARD ================= */
// function Card({ title, value }) {
//   return (
//     <div
//       style={{
//         padding: 20,
//         background: "#f5f5f5",
//         borderRadius: 10,
//         minWidth: 120
//       }}
//     >
//       <h4>{title}</h4>
//       <h2>{value}</h2>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { getProjectsApi } from "../../services/api/projects.api";
import {
  getInvoicesApi,
  getPaymentsApi,
} from "../../services/api/billing.api";

import {
  mockClients,
  mockUsers,
} from "../../assets/assets";

export default function Dashboard() {
  const [data, setData] = useState({
    projects: [],
    invoices: [],
    payments: [],
  });

  const tenantId = "tnt_001";

  useEffect(() => {
    async function load() {
      try {
        const projects = await getProjectsApi(
          tenantId
        );

        const invoices = await getInvoicesApi(
          tenantId
        );

        const payments = await getPaymentsApi(
          tenantId
        );

        setData({
          projects: projects.data || [],
          invoices: invoices.data || [],
          payments: payments.data || [],
        });
      } catch (error) {
        console.error(
          "Dashboard load error:",
          error
        );
      }
    }

    load();
  }, []);
  function Card({ title, value, color }) {
  return (
    <div
      className={`${color} rounded-2xl shadow-sm p-6 text-white`}
    >
      <h4 className="text-sm font-medium opacity-80">
        {title}
      </h4>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back to ERP SaaS
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        
        <Card
          title="Projects"
          value={data.projects.length}
          color="bg-blue-500"
        />

        <Card
          title="Clients"
          value={mockClients.length}
          color="bg-green-500"
        />

        <Card
          title="Invoices"
          value={data.invoices.length}
          color="bg-purple-500"
        />

        <Card
          title="Payments"
          value={data.payments.length}
          color="bg-orange-500"
        />

        <Card
          title="Users"
          value={mockUsers.length}
          color="bg-pink-500"
        />
      </div>

      {/* ================= RECENT SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Projects */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Projects
          </h3>

          <div className="space-y-3">
            {data.projects.length > 0 ? (
              data.projects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <span className="text-gray-700 font-medium">
                    {p.name}
                  </span>

                  <span className="text-sm text-gray-400">
                    #{p.id}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No projects found
              </p>
            )}
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Invoices
          </h3>

          <div className="space-y-3">
            {data.invoices.length > 0 ? (
              data.invoices.map((i) => (
                <div
                  key={i.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      ₹ {i.amount}
                    </p>

                    <p className="text-sm text-gray-500">
                      Invoice #{i.id}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      i.status === "PAID"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {i.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No invoices found
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      <div
        className={`w-12 h-12 rounded-xl ${color} mb-4`}
      ></div>

      <h4 className="text-gray-500 text-sm font-medium">
        {title}
      </h4>

      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {value}
      </h2>
    </div>
  );
}