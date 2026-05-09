import { useEffect, useState } from "react";
import { getPaymentsApi } from "../../services/api/payment.api";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPaymentsApi("tnt_001").then((res) => setPayments(res.data || []));
  }, []);

  return (
    <div>
      <h1>Payments</h1>
      {payments.map((pay) => (
        <p key={pay.id}>
          {pay.id} - {pay.status}
        </p>
      ))}
    </div>
  );
}
