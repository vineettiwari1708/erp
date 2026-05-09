import { useEffect, useState } from "react";
import { getPaymentsApi } from "../../services/api/payment.api";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPaymentsApi("tnt_001").then((res) => setPayments(res.data || []));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h1 className="text-xl font-semibold text-slate-900">Payments</h1>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-2 pr-3">Payment</th>
              <th className="py-2 pr-3">Invoice</th>
              <th className="py-2 pr-3">Amount</th>
              <th className="py-2 pr-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay) => (
              <tr key={pay.id} className="border-b border-slate-100">
                <td className="py-2 pr-3 text-slate-800">{pay.id}</td>
                <td className="py-2 pr-3 text-slate-700">{pay.invoiceId}</td>
                <td className="py-2 pr-3 text-slate-700">₹{pay.amount}</td>
                <td className="py-2 pr-3">
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700">
                    {pay.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
