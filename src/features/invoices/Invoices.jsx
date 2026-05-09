import { useEffect, useState } from "react";
import { getInvoicesApi } from "../../services/api/invoice.api";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoicesApi("tnt_001").then((res) => setInvoices(res.data || []));
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      {invoices.map((inv) => (
        <p key={inv.id}>
          {inv.id} - {inv.status}
        </p>
      ))}
    </div>
  );
}
