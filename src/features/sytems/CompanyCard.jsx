import { Link } from "react-router-dom";

export default function CompanyCard({ company }) {
  const isActive = company.status === "ACTIVE";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">

          <img
            src={company.logo || "https://via.placeholder.com/40"}
            alt="logo"
            className="h-10 w-10 rounded-lg object-cover border"
          />

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              {company.name}
            </h3>

            <p className="text-xs text-slate-500">
              {company.email}
            </p>
          </div>

        </div>

        {/* STATUS */}
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

      {/* DETAILS */}
      <div className="mt-3 text-xs text-slate-600 space-y-1">

        <p>📞 {company.phone || "No phone"}</p>

        <p>
          📝 {company.description || "No description"}
        </p>

      </div>

      {/* FINANCIAL STATS */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">

        <div className="rounded-lg bg-slate-50 p-2">
          <p className="text-xs text-slate-500">Invoices</p>
          <p className="text-sm font-semibold">
            {company.totalInvoices || 0}
          </p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-2">
          <p className="text-xs text-yellow-600">Pending</p>
          <p className="text-sm font-semibold text-yellow-700">
            {company.pendingInvoices || 0}
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-2">
          <p className="text-xs text-green-600">Credit</p>
          <p className="text-sm font-semibold text-green-700">
            ₹{company.totalCredit || 0}
          </p>
        </div>

      </div>

      {/* ACTION */}
      <div className="mt-4 flex justify-end">

        <Link
          to={`/system/tenants/${company.id}`}
          className="text-xs font-medium text-blue-600 hover:underline"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}