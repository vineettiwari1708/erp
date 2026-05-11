// import { useState } from "react";
// import { createTenantApi } from "../../services/api/tenant.api";

// const initialForm = {
//   name: "",
//   adminEmail: "",
//   plan: "FREE",
//   status: "ACTIVE"
// };

// export default function CreateCompany() {
//   const [form, setForm] = useState(initialForm);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const onChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setError("");
//     setMessage("");

//     try {
//       const response = await createTenantApi(form);
//       setMessage(`Company created: ${response.data.name}`);
//       setForm(initialForm);
//     } catch (err) {
//       setError(err.message || "Failed to create company");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
//       <h1 className="text-xl font-semibold text-slate-900">Create Company</h1>
//       <p className="mt-1 text-sm text-slate-500">
//         Super Admin can register a new company account from this form.
//       </p>

//       <form onSubmit={onSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
//         <label className="flex flex-col gap-1 sm:col-span-2">
//           <span className="text-sm font-medium text-slate-700">Company Name</span>
//           <input
//             name="name"
//             value={form.name}
//             onChange={onChange}
//             placeholder="Enter company name"
//             className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400"
//             required
//           />
//         </label>

//         <label className="flex flex-col gap-1 sm:col-span-2">
//           <span className="text-sm font-medium text-slate-700">Admin Email</span>
//           <input
//             name="adminEmail"
//             value={form.adminEmail}
//             onChange={onChange}
//             type="email"
//             placeholder="admin@company.com"
//             className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400"
//           />
//         </label>

//         {/* <label className="flex flex-col gap-1">
//           <span className="text-sm font-medium text-slate-700">Plan</span>
//           <select
//             name="plan"
//             value={form.plan}
//             onChange={onChange}
//             className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400"
//           >
//             <option value="FREE">FREE</option>
//             <option value="PRO">PRO</option>
//             <option value="ENTERPRISE">ENTERPRISE</option>
//           </select>
//         </label> */}

//         <label className="flex flex-col gap-1">
//           <span className="text-sm font-medium text-slate-700">Status</span>
//           <select
//             name="status"
//             value={form.status}
//             onChange={onChange}
//             className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400"
//           >
//             <option value="ACTIVE">ACTIVE</option>
//             <option value="DISABLED">DISABLED</option>
//           </select>
//         </label>

//         <div className="sm:col-span-2">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {isSubmitting ? "Creating..." : "Create Company"}
//           </button>
//         </div>
//       </form>

//       {message ? <p className="mt-4 text-sm text-emerald-600">{message}</p> : null}
//       {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
//     </section>
//   );
// }


import { useState } from "react";
import { createTenantApi } from "../../services/api/tenant.api";

const initialForm = {
  name: "",
  adminEmail: "",
  phone: "",
  description: "",
  plan: "FREE",
  status: "ACTIVE",
};

export default function CreateCompany() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await createTenantApi(form);
      setSuccess(`Company "${res.data.name}" created successfully`);
      setForm(initialForm);
    } catch (err) {
      setError(err?.message || "Failed to create company");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-[calc(95vh-80px)] flex-1 overflow-y-auto space-y-6 pr-2">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Create Company
        </h1>
        <p className="text-sm text-slate-500">
          Register a new tenant company in the system
        </p>
      </div>

      {/* FORM CARD */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">

        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">

          {/* NAME */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Company Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Admin Email
            </label>
            <input
              name="adminEmail"
              type="email"
              value={form.adminEmail}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* PLAN */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Plan
            </label>
            <select
              name="plan"
              value={form.plan}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            >
              <option value="FREE">FREE</option>
              <option value="PRO">PRO</option>
              <option value="ENTERPRISE">ENTERPRISE</option>
            </select>
          </div>

          {/* STATUS */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="DISABLED">DISABLED</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows="3"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* BUTTON */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Company"}
            </button>
          </div>

        </form>

        {/* MESSAGES */}
        {success && (
          <p className="mt-4 text-sm text-green-600">{success}</p>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}

      </div>
    </section>
  );
}