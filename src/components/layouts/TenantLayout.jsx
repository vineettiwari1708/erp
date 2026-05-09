import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function TenantLayout() {
  return (
    <div style={{ display: "flex", minHeight: "" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: "0px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
