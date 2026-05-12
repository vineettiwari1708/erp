import { useMemo } from "react";
import { mockLedger } from "../../assets/mockData/ledger";

export default function Ledger() {

  // =========================
  // STATS CALCULATION
  // =========================

  const stats = useMemo(() => {
    const total = mockLedger.length;

    const credit = mockLedger
      .filter((l) => l.type === "CREDIT")
      .reduce((sum, l) => sum + l.amount, 0);

    const debit = mockLedger
      .filter((l) => l.type === "DEBIT")
      .reduce((sum, l) => sum + l.amount, 0);

    return {
      total,
      credit,
      debit,
      balance: credit - debit,
    };
  }, []);

  return (
    <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

      {/* ================= HEADER ================= */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-white border p-5">
        <h1 className="text-2xl font-bold text-slate-900">
          Ledger
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Financial transaction history (Credit / Debit)
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

        <Card title="Total Entries" value={stats.total} />

        <Card
          title="Total Credit"
          value={`₹ ${stats.credit}`}
          color="text-green-600"
        />

        <Card
          title="Total Debit"
          value={`₹ ${stats.debit}`}
          color="text-red-600"
        />

        <Card
          title="Balance"
          value={`₹ ${stats.balance}`}
          color={
            stats.balance >= 0
              ? "text-green-600"
              : "text-red-600"
          }
        />

      </div>

      {/* ================= TABLE ================= */}
      <div className="rounded-xl border bg-white overflow-hidden">

        {/* HEADER */}
        <div className="p-4 border-b">
          <h2 className="font-semibold text-slate-800">
            Transaction History
          </h2>
        </div>

        {/* LIST */}
        <div className="divide-y">

          {mockLedger.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 hover:bg-slate-50 transition"
            >

              {/* LEFT */}
              <div className="flex flex-col">
                <p className="text-sm font-medium text-slate-800">
                  {formatSource(item.source)}
                </p>
                <p className="text-xs text-slate-500">
                  Ref: {item.referenceId}
                </p>
              </div>

              {/* TYPE */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  item.type === "CREDIT"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.type}
              </span>

              {/* AMOUNT */}
              <p
                className={`text-sm font-semibold ${
                  item.type === "CREDIT"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.type === "CREDIT" ? "+" : "-"} ₹
                {item.amount}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

/* ================= CARD ================= */
function Card({ title, value, color = "text-slate-900" }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-500 uppercase">{title}</p>
      <h2 className={`text-xl font-semibold mt-1 ${color}`}>
        {value}
      </h2>
    </div>
  );
}

/* ================= FORMAT SOURCE ================= */
function formatSource(source) {
  return source
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}                                     