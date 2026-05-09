import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectsApi } from "../../services/api/projects.api";
import { getInvoicesApi, getPaymentsApi } from "../../services/api/billing.api";
import { mockClients, mockUsers } from "../../assets/assets";
import { useAuth } from "../../store/hooks";

export default function Dashboard() {
  const { user } = useAuth();
  const [data, setData] = useState({
    projects: [],
    invoices: [],
    payments: []
  });

  const tenantId = "tnt_001"; // later from auth

  useEffect(() => {
    async function load() {
      const projects = await getProjectsApi(tenantId);
      const invoices = await getInvoicesApi(tenantId);
      const payments = await getPaymentsApi(tenantId);

      setData({
        projects: projects.data,
        invoices: invoices.data,
        payments: payments.data
      });
    }

    load();
  }, []);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Live snapshot from dummy ERP data.</p>
      </div>

      {user?.systemRole === "SUPER_ADMIN" ? (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-indigo-900">Super Admin Actions</h2>
              <p className="text-sm text-indigo-700">Create a new company from dashboard.</p>
            </div>
            <Link
              to="/system/create-company"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Create Company
            </Link>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        <Card title="Projects" value={data.projects.length} />
        <Card title="Clients" value={mockClients.length} />
        <Card title="Invoices" value={data.invoices.length} />
        <Card title="Payments" value={data.payments.length} />
        <Card title="Users" value={mockUsers.length} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-base font-semibold text-slate-800">Recent Projects</h3>
          <div className="space-y-2">
            {data.projects.map((p) => (
              <p key={p.id} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {p.name}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-base font-semibold text-slate-800">Recent Invoices</h3>
          <div className="space-y-2">
            {data.invoices.map((i) => (
              <p key={i.id} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                ₹{i.amount} - {i.status}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900">{value}</h2>
    </div>
  );
}