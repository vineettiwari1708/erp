import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { mockInvoices } from "../../assets/mockData/invoices";
import { mockTenants } from "../../assets/mockData/tenants";

export default function CompanyInvoices() {
  const { id } = useParams();

  const [invoices, setInvoices] = useState([]);

  /* ================= TENANT ================= */

  const tenant = mockTenants.find(
    (t) => t.id === id
  );

  /* ================= LOAD INVOICES ================= */

  useEffect(() => {
    async function loadInvoices() {
      try {
        const companyInvoices = mockInvoices.filter(
          (invoice) =>
            invoice.tenantId === id
        );

        setInvoices(companyInvoices);
      } catch (error) {
        console.error(
          "Invoice Load Error:",
          error
        );
      }
    }

    loadInvoices();
  }, [id]);

  /* ================= CALCULATIONS ================= */

  const totalPaid = invoices
    .filter(
      (invoice) =>
        invoice.status === "PAID"
    )
    .reduce(
      (total, invoice) =>
        total + invoice.amount,
      0
    );

  const totalPending = invoices
    .filter(
      (invoice) =>
        invoice.status === "PENDING"
    )
    .reduce(
      (total, invoice) =>
        total + invoice.amount,
      0
    );

  return (
    <section className="h-[calc(95vh-80px)] space-y-6 overflow-y-auto pr-2">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-semibold text-slate-900">
            {tenant?.name} Invoices
          </h1>

          <p className="text-sm text-slate-500">
            Track paid &amp; pending invoices for this company
          </p>

        </div>

        <Link
          to={`/system/tenants/${id}`}
          className="text-sm text-indigo-600 hover:underline"
        >
          ← Back
        </Link>

      </div>

      {/* ================= STATS ================= */}

      <div className="grid gap-4 md:grid-cols-3">

        {/* TOTAL */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            Total Invoices
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {invoices.length}
          </h2>

        </div>

        {/* PAID */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            Paid Amount
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            ₹{totalPaid}
          </h2>

        </div>

        {/* PENDING */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            Pending Amount
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            ₹{totalPending}
          </h2>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            {/* ================= TABLE HEAD ================= */}

            <thead className="bg-slate-50">

              <tr className="text-left text-sm font-medium text-slate-600">

                <th className="px-5 py-4">
                  Invoice ID
                </th>

                <th className="px-5 py-4">
                  Tenant ID
                </th>

                <th className="px-5 py-4">
                  Client ID
                </th>

                <th className="px-5 py-4">
                  Amount
                </th>

                <th className="px-5 py-4">
                  Due Date
                </th>

                <th className="px-5 py-4">
                  Status
                </th>

              </tr>

            </thead>

            {/* ================= TABLE BODY ================= */}

            <tbody>

              {invoices.length > 0 ? (

                invoices.map((invoice) => (

                  <tr
                    key={invoice.id}
                    className="border-t text-sm hover:bg-slate-50"
                  >

                    {/* INVOICE ID */}

                    <td className="px-5 py-4 font-medium text-slate-800">
                      {invoice.id}
                    </td>

                    {/* TENANT ID */}

                    <td className="px-5 py-4 text-slate-600">
                      {invoice.tenantId}
                    </td>

                    {/* CLIENT ID */}

                    <td className="px-5 py-4 text-slate-600">
                      {invoice.clientId}
                    </td>

                    {/* AMOUNT */}

                    <td className="px-5 py-4 font-medium text-slate-800">
                      ₹{invoice.amount}
                    </td>

                    {/* DUE DATE */}

                    <td className="px-5 py-4 text-slate-600">
                      {new Date(
                        invoice.dueDate
                      ).toLocaleDateString()}
                    </td>

                    {/* STATUS */}

                    <td className="px-5 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          invoice.status === "PAID"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {invoice.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    No invoices found for this company
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