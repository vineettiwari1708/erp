import { useAuth } from "../../store/hooks";

export default function Header() {
  const { user } = useAuth();

  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        background: "#1e3a8a",
        color: "#fff"
      }}
    >
      {/* LEFT */}
      {/* <div>
        <h3 style={{ margin: 0 }}>ERP SaaS</h3>
      </div> */}

      {/* CENTER (optional search) */}
      <div>
        <input
          placeholder="Search..."
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none"
          }}
        />
      </div>

      {/* RIGHT */}
      <div>
        <span style={{ marginRight: 10 }}>
          {user?.name} ({user?.role})
        </span>

        <button
          style={{
            padding: "6px 10px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}