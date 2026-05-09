import { useEffect, useState } from "react";
import { getClientsApi } from "../../services/api/client.api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientsApi("tnt_001").then((res) => setClients(res.data || []));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h1 className="text-xl font-semibold text-slate-900">Clients</h1>
      <p className="mt-1 text-sm text-slate-500">Client directory with contact details.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {clients.map((c) => (
          <article key={c.id} className="rounded-lg border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">{c.name}</p>
            <p className="mt-1 text-sm text-slate-600">{c.email}</p>
            <p className="text-sm text-slate-500">{c.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
