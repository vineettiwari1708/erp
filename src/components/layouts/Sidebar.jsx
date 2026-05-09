import { Link } from "react-router-dom";
import { useAuth } from "../../store/hooks";
import { permissions } from "../../assets/mockData/rbac";

const menu = [
  { name: "Dashboard", path: "/dashboard", perm: "DASHBOARD_VIEW" },
  { name: "Projects", path: "/projects", perm: "PROJECT_MANAGE" },
  { name: "Invoice", path: "/invoice", perm: "INVOICE_MANAGE" },
  { name: "Client", path: "/client", perm: "CLIENT_MANAGE" },
  { name: "Payment", path: "/payment", perm: "PAYMENT_APPROVE" },
  { name: "Clients", path: "/clients", perm: "CLIENT_VIEW" },
  { name: "Invoices", path: "/invoices", perm: "INVOICE_VIEW" },
  { name: "Payments", path: "/payments", perm: "PAYMENT_VIEW" },
  { name: "Users", path: "/users", perm: "USER_MANAGE" },
  { name: "Ledger", path: "/ledger", perm: "LEDGER_VIEW" },
  { name: "System", path: "/system", perm: "SYSTEM_ACCESS" }
];

export default function Sidebar() {
  const { user } = useAuth();

  const rolePermissions =
    permissions[user?.role] || [];

  return (
    <div
      
        className="w-[200px] min-h-screen bg-blue-900 text-white px-2"
    >
      <h3 style={{padding:"0px 0px 0px 10px", fontSize:"1.5em", margin:"16px 0px"}}>ERP SaaS</h3>

      {menu
        .filter(
          (item) =>
            rolePermissions.includes(item.perm) ||
            rolePermissions.includes("*")
        )
        .map((item) => (
          <Link
  key={item.path}
  to={item.path}
  className="block px-3 py-2 text-white no-underline rounded-md hover:bg-blue-950 transition duration-300"
>
  {item.name}
</Link>
        ))}
    </div>
  );
}