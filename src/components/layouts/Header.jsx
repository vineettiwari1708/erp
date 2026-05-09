import { useAuth } from "../../store/hooks";

export default function Header({ setSidebarOpen }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md border border-slate-200 px-2 py-1 text-slate-600 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            Menu
          </button>
          <div>
            <h3 className="m-0 text-base font-semibold text-slate-900">ERP SaaS</h3>
            <p className="text-xs text-slate-500">Operations workspace</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <input
            placeholder="Search..."
            className="w-56 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400"
          />
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-slate-800">{user?.name || "Guest"}</p>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {user?.role || user?.systemRole || "N/A"}
          </p>
        </div>
      </div>
    </header>
  );
}