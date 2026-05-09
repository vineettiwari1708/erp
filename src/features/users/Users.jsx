import { useEffect, useState } from "react";
import { getUsersApi } from "../../services/api/user.api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersApi("tnt_001").then((res) => setUsers(res.data || []));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h1 className="text-xl font-semibold text-slate-900">Users</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {users.map((u) => (
          <article key={u.id} className="rounded-lg border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">{u.name}</p>
            <p className="text-sm text-slate-600">{u.email}</p>
            <p className="mt-2 inline-block rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700">
              {u.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
