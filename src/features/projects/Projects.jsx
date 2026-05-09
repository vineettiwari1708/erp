// import { useEffect, useState } from "react";
// import { getProjectsApi } from "../../services/api/project.api";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     getProjectsApi("tnt_001").then((res) => setProjects(res.data || []));
//   }, []);

//   return (
//     <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
//       <h1 className="text-xl font-semibold text-slate-900">Projects</h1>
//       <p className="mt-1 text-sm text-slate-500">All projects for tenant `tnt_001`.</p>
//       <div className="mt-4 overflow-x-auto">
//         <table className="min-w-full text-left text-sm">
//           <thead className="border-b border-slate-200 text-slate-500">
//             <tr>
//               <th className="py-2 pr-3">Project</th>
//               <th className="py-2 pr-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((p) => (
//               <tr key={p.id} className="border-b border-slate-100">
//                 <td className="py-2 pr-3 text-slate-800">{p.name}</td>
//                 <td className="py-2 pr-3 text-slate-600">{p.status || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { getProjectsApi } from "../../services/api/project.api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const tenantId = "tnt_001";

  /* ================= FETCH ================= */

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res =
        await getProjectsApi(tenantId);

      setProjects(res.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch projects:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="space-y-6">
      
      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Projects
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all tenant projects
          </p>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
          + New Project
        </button>

      </div>

      {/* ================= CONTENT ================= */}

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          
          <p className="text-slate-500">
            Loading projects...
          </p>

        </div>
      ) : projects.length > 0 ? (
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              
              {/* ================= TOP ================= */}

              <div className="mb-5 flex items-start justify-between gap-3">
                
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    {p.name}
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Project ID: #{p.id}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    p.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {p.status || "N/A"}
                </span>

              </div>

              {/* ================= DETAILS ================= */}

              <div className="space-y-2 text-sm">
                
                <p className="text-slate-600">
                  Client:
                  <span className="ml-1 font-medium text-slate-800">
                    {p.clientId || "N/A"}
                  </span>
                </p>

                <p className="text-slate-600">
                  Tenant:
                  <span className="ml-1 font-medium text-slate-800">
                    {p.tenantId || "N/A"}
                  </span>
                </p>

              </div>

              {/* ================= ACTIONS ================= */}

              <div className="mt-6 flex gap-3">
                
                <button className="flex-1 rounded-lg bg-indigo-50 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-100">
                  Edit
                </button>

                <button className="flex-1 rounded-lg bg-red-50 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100">
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>

      ) : (
        
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          
          <p className="text-slate-500">
            No projects found
          </p>

        </div>
      )}
    </section>
  );
}