import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTenantsApi } from "../../services/api/tenant.api";

export default function TenantDetails() {
  const { id } = useParams();
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getTenantsApi();
        const found = (res.data || []).find(
          (t) => t.id === id
        );
        setTenant(found || null);
      } catch (error) {
        console.error("Tenant Details Error:", error);
      }
    }

    load();
  }, [id]);

  if (!tenant) {
    return (
      <div className="p-6 text-slate-500">
        Tenant not found
      </div>
    );
  }

  const isActive = tenant.status === "ACTIVE";

  return (
    <section className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            {tenant.name}
          </h1>
          <p className="text-sm text-slate-500">
            Tenant Company Profile
          </p>
        </div>

        <Link
          to="/system"
          className="text-sm text-indigo-600 hover:underline"
        >
          ← Back
        </Link>
      </div>

      {/* TOP CARD */}
      <div className="grid gap-4 md:grid-cols-3">

        {/* LEFT - BASIC INFO */}
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
              {tenant.name?.charAt(0)}
            </div>

            <div>
              <h2 className="font-semibold text-slate-800">
                {tenant.name}
              </h2>

              <p className="text-xs text-slate-500">
                {tenant.email || "No email"}
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium">Plan:</span>{" "}
              {tenant.plan || "N/A"}
            </p>

            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  isActive
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {isActive ? "ACTIVE" : "INACTIVE"}
              </span>
            </p>

            <p>
              <span className="font-medium">Phone:</span>{" "}
              {tenant.phone || "N/A"}
            </p>
          </div>
        </div>

        {/* MIDDLE - FINANCIAL */}
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">
            Financial Overview
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Total Invoices</span>
              <span className="font-medium">12</span>
            </div>

            <div className="flex justify-between">
              <span>Pending Invoices</span>
              <span className="text-yellow-600 font-medium">
                3
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Credit</span>
              <span className="text-green-600 font-medium">
                ₹45,000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Debit</span>
              <span className="text-red-600 font-medium">
                ₹18,000
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT - ACTIONS */}
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">
            Actions
          </h3>

          <div className="space-y-2">

            <button
              className={`w-full rounded-lg px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {isActive ? "Disable Company" : "Enable Company"}
            </button>

            <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Edit Company
            </button>

            <button className="w-full rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
              View Invoices
            </button>

          </div>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-2">
          Company Description
        </h3>

        <p className="text-sm text-slate-600">
          {tenant.description ||
            "No description available for this company."}
        </p>
      </div>

    </section>
  );
}