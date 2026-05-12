import { useMemo } from "react";
import { Link } from "react-router-dom";

import { permissions } from "../../assets/mockData/rbac";
import { mockUsers } from "../../assets/mockData/users";

export default function Roles() {

  // =========================
  // ROLES (EXCLUDE SUPER_ADMIN)
  // =========================

  const rolesData = useMemo(() => {
    return Object.keys(permissions)
      .filter((role) => role !== "SUPER_ADMIN") // 👈 IMPORTANT
      .map((role, index) => ({
        id: index + 1,
        name: role,
        status: "ACTIVE",
        description: getRoleDescription(role),
      }));
  }, []);

  // =========================
  // STATS
  // =========================

  const totalRoles = rolesData.length;

  const totalPermissions = useMemo(() => {
    return [
      ...new Set(
        Object.values(permissions)
          .flat()
          .filter((p) => p !== "*")
      ),
    ].length;
  }, []);

  return (
    <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Roles & Permissions
        </h1>
        <p className="text-sm text-slate-500">
          Manage company access control
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        <Card title="Total Roles" value={totalRoles} />
        <Card title="Permissions" value={totalPermissions} />
        <Card title="Users" value={mockUsers.length} />
        <Card title="System" value="Admin Panel" />
      </div>

      {/* ================= ROLES LIST ================= */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">

        <h3 className="mb-3 text-base font-semibold text-slate-800">
          Company Roles
        </h3>

        <div className="space-y-2">

          {rolesData.map((role) => {

            const rolePermissions =
              permissions[role.name] || [];

            const usersCount =
              mockUsers.filter(
                (u) => u.role === role.name
              ).length;

            return (
              <div
                key={role.id}
                className="flex items-center rounded-xl bg-slate-50 px-4 py-4 hover:bg-slate-100 transition"
              >

                {/* LEFT */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {role.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {role.description}
                  </p>
                </div>

                {/* USERS */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium text-slate-700">
                      {usersCount}
                    </p>
                    <p className="text-xs text-slate-400">
                      Users
                    </p>
                  </div>
                </div>

                {/* PERMISSIONS */}
                <div className="hidden lg:flex flex-1 justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium text-slate-700">
                      {rolePermissions.includes("*")
                        ? "All Access"
                        : rolePermissions.length}
                    </p>
                    <p className="text-xs text-slate-400">
                      Permissions
                    </p>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-2">
                                <Link
                to={`/roles/${role.name}`}
                className="rounded-lg border border-indigo-200 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-50"
                >
                Permissions
                </Link>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

/* ================= CARD ================= */
function Card({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900">
        {value}
      </h2>
    </div>
  );
}

/* ================= ROLE DESCRIPTION ================= */
function getRoleDescription(role) {
  const map = {
    ADMIN: "Full company management access",
    MANAGER: "Project and invoice control",
    ACCOUNT: "Finance and billing operations",
    CLIENT: "Limited client access",
  };

  return map[role] || "No description";
}