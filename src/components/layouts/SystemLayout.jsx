import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";

export default function SystemLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </div>
  );
}