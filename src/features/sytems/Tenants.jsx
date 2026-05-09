import { useEffect, useState } from "react";
import { getTenantsApi } from "../../services/api/tenant.api";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenantsApi().then((res) => setTenants(res.data));
  }, []);

  return (
    <div>
      <h1>All Companies</h1>

      {tenants.map((t) => (
        <div
          key={t.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{t.name}</h3>
          <p>Status: {t.status}</p>
          <p>Plan: {t.plan}</p>
        </div>
      ))}
    </div>
  );
}