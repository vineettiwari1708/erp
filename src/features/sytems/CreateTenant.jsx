import { useState } from "react";

export default function CreateTenant() {
  const [name, setName] = useState("");

  const handleCreate = () => {
    console.log("Create Tenant:", name);

    // later connect: createTenantApi()
  };

  return (
    <div>
      <h1>Create Company</h1>

      <input
        placeholder="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}