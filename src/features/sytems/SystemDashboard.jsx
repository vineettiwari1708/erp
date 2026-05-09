import { useEffect, useState } from "react";
import { getTenantsApi } from "../../services/api/tenant.api";

export default function SystemDashboard() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenantsApi().then((res) => setTenants(res.data));
  }, []);

  return (
    <div>
      <h1>System Dashboard (SUPER ADMIN)</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <div>Total Companies: {tenants.length}</div>
      </div>
    </div>
  );
}