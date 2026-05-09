import { useEffect, useState } from "react";
import { getClientsApi } from "../../services/api/client.api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientsApi("tnt_001").then((res) => setClients(res.data || []));
  }, []);

  return (
    <div>
      <h1>Clients</h1>
      {clients.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
}
