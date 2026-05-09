// import { useEffect, useState } from "react";
// import { getProjectsApi } from "../../services/api/project.api";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     getProjectsApi("tnt_001").then((res) => setProjects(res.data || []));
//   }, []);

//   return (
//     <div>
//       <h1>Projects</h1>
//       {projects.map((p) => (
//         <p key={p.id}>{p.name}</p>
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getProjectsApi } from "../../services/api/project.api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjectsApi("tnt_001");

      setProjects(res.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch projects:",
        error
      );
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Projects
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all your projects
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
          + New Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {projects.length > 0 ? (
          projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              
              <div className="flex items-start justify-between mb-4">
                
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {p.name}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Project ID: {p.id}
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Active
                </span>
              </div>

              {/* Optional Details */}
              <div className="space-y-2 text-sm text-gray-600">
                
                <p>
                  Client:{" "}
                  <span className="font-medium text-gray-800">
                    {p.clientId || "N/A"}
                  </span>
                </p>

                <p>
                  Tenant:{" "}
                  <span className="font-medium text-gray-800">
                    {p.tenantId || "N/A"}
                  </span>
                </p>

              </div>

              {/* Footer */}
              <div className="flex gap-3 mt-6">
                
                <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg font-medium transition">
                  Edit
                </button>

                <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg font-medium transition">
                  Delete
                </button>

              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl p-10 text-center shadow-sm">
            <p className="text-gray-500 text-lg">
              No projects found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}