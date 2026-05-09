// import { useEffect, useState } from "react";
// import { getUsersApi } from "../../services/api/user.api";

// export default function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsersApi("tnt_001").then((res) => setUsers(res.data || []));
//   }, []);

//   return (
//     <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
//       <h1 className="text-xl font-semibold text-slate-900">Users</h1>
//       <div className="mt-4 grid gap-3 sm:grid-cols-2">
//         {users.map((u) => (
//           <article key={u.id} className="rounded-lg border border-slate-200 p-4">
//             <p className="font-semibold text-slate-800">{u.name}</p>
//             <p className="text-sm text-slate-600">{u.email}</p>
//             <p className="mt-2 inline-block rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700">
//               {u.role}
//             </p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { getUsersApi } from "../../services/api/user.api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const tenantId = "tnt_001";

  /* ================= FETCH ================= */

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res =
        await getUsersApi(tenantId);

      setUsers(res.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch users:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="space-y-6">
      
      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Users
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all tenant users
          </p>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
          + Add User
        </button>

      </div>

      {/* ================= TABLE ================= */}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        
        <div className="overflow-x-auto">
          
          <table className="min-w-full text-sm">
            
            {/* ================= HEAD ================= */}

            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                
                <th className="px-4 py-3 text-left font-semibold text-slate-500">
                  User
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-500">
                  Email
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-500">
                  Role
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-500">
                  Status
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-500">
                  Actions
                </th>

              </tr>
            </thead>

            {/* ================= BODY ================= */}

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-10 text-center text-slate-500"
                  >
                    Loading users...
                  </td>
                </tr>
              ) : users.length > 0 ? (
                
                users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    
                    {/* USER */}
                    <td className="px-4 py-4">
                      
                      <div className="flex items-center gap-3">
                        
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                          {u.name?.charAt(0)}
                        </div>

                        <div>
                          <p className="font-medium text-slate-800">
                            {u.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            ID: {u.id}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* EMAIL */}
                    <td className="px-4 py-4 text-slate-600">
                      {u.email || "N/A"}
                    </td>

                    {/* ROLE */}
                    <td className="px-4 py-4">
                      
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {u.role}
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className="px-4 py-4">
                      
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Active
                      </span>

                    </td>

                    {/* ACTIONS */}
                    <td className="px-4 py-4">
                      
                      <div className="flex gap-2">
                        
                        <button className="rounded-lg bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100">
                          Edit
                        </button>

                        <button className="rounded-lg bg-red-50 px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100">
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-10 text-center text-slate-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}