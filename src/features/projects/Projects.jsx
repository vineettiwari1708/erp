import { useEffect, useState } from "react";
import { getProjectsApi } from "../../services/api/project.api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsApi("tnt_001").then((res) => setProjects(res.data || []));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h1 className="text-xl font-semibold text-slate-900">Projects</h1>
      <p className="mt-1 text-sm text-slate-500">All projects for tenant `tnt_001`.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-2 pr-3">Project</th>
              <th className="py-2 pr-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-slate-100">
                <td className="py-2 pr-3 text-slate-800">{p.name}</td>
                <td className="py-2 pr-3 text-slate-600">{p.status || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
