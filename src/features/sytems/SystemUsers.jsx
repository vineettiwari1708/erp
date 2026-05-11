export default function SystemUsers() {
  const users = [
    {
      id: "sa_001",
      name: "System Admin",
      role: "SUPER_ADMIN"
    }
  ];

  return (
    <div>
      <h1>System Users</h1>

      {users.map((u) => (
        <div key={u.id}>
          <h3>{u.name}</h3>
          <p>{u.role}</p>
        </div>
      ))}
    </div>
  );
}