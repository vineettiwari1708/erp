import { useEffect, useState } from "react";
import { getInvoicesApi } from "../../services/api/invoice.api";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoicesApi("tnt_001").then((res) => setInvoices(res.data || []));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h1 className="text-xl font-semibold text-slate-900">Invoices</h1>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-2 pr-3">Invoice</th>
              <th className="py-2 pr-3">Amount</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2 pr-3">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-slate-100">
                <td className="py-2 pr-3 text-slate-800">{inv.id}</td>
                <td className="py-2 pr-3 text-slate-700">₹{inv.amount}</td>
                <td className="py-2 pr-3">
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-xs text-amber-700">
                    {inv.status}
                  </span>
                </td>
                <td className="py-2 pr-3 text-slate-600">{inv.dueDate || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
