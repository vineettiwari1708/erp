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


// import { useState } from "react";
// import { createTenantApi } from "../../services/api/tenant.api";

// const initialForm = {
//   name: "",
//   adminEmail: "",
//   phone: "",
//   description: "",
//   plan: "FREE",
//   status: "ACTIVE",
// };

// export default function CreateCompany() {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       const res = await createTenantApi(form);
//       setSuccess(`Company "${res.data.name}" created successfully`);
//       setForm(initialForm);
//     } catch (err) {
//       setError(err?.message || "Failed to create company");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="h-[calc(95vh-80px)] flex-1 overflow-y-auto space-y-6 pr-2">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-900">
//           Create Company
//         </h1>
//         <p className="text-sm text-slate-500">
//           Register a new tenant company in the system
//         </p>
//       </div>

//       {/* FORM CARD */}
//       <div className="rounded-xl border border-slate-200 bg-white p-6">

//         <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">

//           {/* NAME */}
//           <div className="sm:col-span-2">
//             <label className="text-sm font-medium text-slate-700">
//               Company Name
//             </label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={onChange}
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//               required
//             />
//           </div>

//           {/* EMAIL */}
//           <div className="sm:col-span-2">
//             <label className="text-sm font-medium text-slate-700">
//               Admin Email
//             </label>
//             <input
//               name="adminEmail"
//               type="email"
//               value={form.adminEmail}
//               onChange={onChange}
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//             />
//           </div>

//           {/* PHONE */}
//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Phone
//             </label>
//             <input
//               name="phone"
//               value={form.phone}
//               onChange={onChange}
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//             />
//           </div>

//           {/* PLAN */}
//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Plan
//             </label>
//             <select
//               name="plan"
//               value={form.plan}
//               onChange={onChange}
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//             >
//               <option value="FREE">FREE</option>
//               <option value="PRO">PRO</option>
//               <option value="ENTERPRISE">ENTERPRISE</option>
//             </select>
//           </div>

//           {/* STATUS */}
//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Status
//             </label>
//             <select
//               name="status"
//               value={form.status}
//               onChange={onChange}
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//             >
//               <option value="ACTIVE">ACTIVE</option>
//               <option value="DISABLED">DISABLED</option>
//             </select>
//           </div>

//           {/* DESCRIPTION */}
//           <div className="sm:col-span-2">
//             <label className="text-sm font-medium text-slate-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={onChange}
//               rows="3"
//               className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
//             />
//           </div>

//           {/* BUTTON */}
//           <div className="sm:col-span-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
//             >
//               {loading ? "Creating..." : "Create Company"}
//             </button>
//           </div>

//         </form>

//         {/* MESSAGES */}
//         {success && (
//           <p className="mt-4 text-sm text-green-600">{success}</p>
//         )}
//         {error && (
//           <p className="mt-4 text-sm text-red-600">{error}</p>
//         )}

//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { createTenantApi } from "../../services/api/tenant.api";

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   gstNumber: "",
//   website: "",
//   industry: "",
//   employees: "",
//   description: "",
//   plan: "FREE",
//   status: "ACTIVE",

//   address: {
//     line1: "",
//     city: "",
//     state: "",
//     country: "India",
//     pincode: "",
//   },

//   gstEnabled: true,
//   gstType: "REGULAR",
//   gstRate: 18,
// };

// export default function CreateCompany() {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const onAddressChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       address: {
//         ...prev.address,
//         [name]: value,
//       },
//     }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       const payload = {
//         ...form,
//         employees: Number(form.employees),
//       };

//       const res = await createTenantApi(payload);

//       setSuccess(`Company "${res.data.name}" created successfully`);
//       setForm(initialForm);
//     } catch (err) {
//       setError(err?.message || "Failed to create company");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="h-[calc(95vh-80px)] flex-1 overflow-y-auto space-y-6 pr-2">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-900">
//           Create Company
//         </h1>
//         <p className="text-sm text-slate-500">
//           Register a new tenant company in the system
//         </p>
//       </div>

//       {/* FORM */}
//       <div className="rounded-xl border bg-white p-6">

//         <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">

//           {/* NAME */}
//           <input
//             name="name"
//             placeholder="Company Name"
//             value={form.name}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//             required
//           />

//           {/* EMAIL */}
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* PHONE */}
//           <input
//             name="phone"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* GST */}
//           <input
//             name="gstNumber"
//             placeholder="GST Number"
//             value={form.gstNumber}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* WEBSITE */}
//           <input
//             name="website"
//             placeholder="Website"
//             value={form.website}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* INDUSTRY */}
//           <input
//             name="industry"
//             placeholder="Industry"
//             value={form.industry}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* EMPLOYEES */}
//           <input
//             name="employees"
//             placeholder="Employees"
//             type="number"
//             value={form.employees}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* PLAN */}
//           <select
//             name="plan"
//             value={form.plan}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           >
//             <option value="FREE">FREE</option>
//             <option value="PRO">PRO</option>
//             <option value="ENTERPRISE">ENTERPRISE</option>
//           </select>

//           {/* STATUS */}
//           <select
//             name="status"
//             value={form.status}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           >
//             <option value="ACTIVE">ACTIVE</option>
//             <option value="INACTIVE">INACTIVE</option>
//           </select>

//           {/* ADDRESS */}
//           <input
//             name="line1"
//             placeholder="Address Line"
//             value={form.address.line1}
//             onChange={onAddressChange}
//             className="rounded-lg border px-3 py-2 text-sm sm:col-span-2"
//           />

//           <input
//             name="city"
//             placeholder="City"
//             value={form.address.city}
//             onChange={onAddressChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           <input
//             name="state"
//             placeholder="State"
//             value={form.address.state}
//             onChange={onAddressChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           <input
//             name="pincode"
//             placeholder="Pincode"
//             value={form.address.pincode}
//             onChange={onAddressChange}
//             className="rounded-lg border px-3 py-2 text-sm"
//           />

//           {/* DESCRIPTION */}
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={onChange}
//             className="rounded-lg border px-3 py-2 text-sm sm:col-span-2"
//             rows="3"
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="sm:col-span-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Create Company"}
//           </button>

//         </form>

//         {success && (
//           <p className="mt-4 text-sm text-green-600">{success}</p>
//         )}

//         {error && (
//           <p className="mt-4 text-sm text-red-600">{error}</p>
//         )}

//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createTenantApi,
  getTenantByIdApi,
} from "../../services/api/tenant.api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  gstNumber: "",
  website: "",
  industry: "",
  employees: "",
  description: "",
  plan: "FREE",
  status: "ACTIVE",

  address: {
    line1: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
  },

  gstEnabled: true,
  gstType: "REGULAR",
  gstRate: 18,
};

export default function CreateCompany() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ========================
  // LOAD (EDIT MODE)
  // ========================
  useEffect(() => {
    async function load() {
      if (!isEdit) return;

      try {
        const res = await getTenantByIdApi(id);
        const tenant = res.data;

        if (tenant) {
          setForm({
            ...initialForm,
            ...tenant,
            employees: tenant.employees || "",
            address: {
              ...initialForm.address,
              ...tenant.address,
            },
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, [id, isEdit]);

  // ========================
  // HANDLERS
  // ========================
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onAddressChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  // ========================
  // SUBMIT
  // ========================
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const payload = {
        ...form,
        employees: Number(form.employees),
      };

      if (isEdit) {
        console.log("UPDATE COMPANY:", payload);
        setSuccess("Company updated successfully");
      } else {
        const res = await createTenantApi(payload);
        setSuccess(`Company "${res.data.name}" created successfully`);
        setForm(initialForm);
      }
    } catch (err) {
      setError(err?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-slate-900">
          {isEdit ? "Edit Company" : "Create Company"}
        </h1>
        <p className="text-sm text-slate-500">
          {isEdit
            ? "Update tenant company details"
            : "Register a new tenant company in the system"}
        </p>
      </div>

      {/* FORM CARD */}
      <div className="rounded-2xl border bg-white shadow-sm">

        <form onSubmit={onSubmit} className="p-6 space-y-6">

          {/* ================= COMPANY INFO ================= */}
          <div className="rounded-xl border bg-slate-50 p-4">
            <h2 className="mb-4 text-sm font-semibold text-slate-700">
              Company Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <Input label="Company Name" name="name" value={form.name} onChange={onChange} />
              <Input label="Email" name="email" value={form.email} onChange={onChange} />
              <Input label="Phone" name="phone" value={form.phone} onChange={onChange} />
              <Input label="Website" name="website" value={form.website} onChange={onChange} />
              <Input label="Industry" name="industry" value={form.industry} onChange={onChange} />
              <Input label="Employees" name="employees" value={form.employees} onChange={onChange} />

            </div>
          </div>

          {/* ================= TAX INFO ================= */}
          <div className="rounded-xl border bg-slate-50 p-4">
            <h2 className="mb-4 text-sm font-semibold text-slate-700">
              Tax Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <Input label="GST Number" name="gstNumber" value={form.gstNumber} onChange={onChange} />

              <Select label="Plan" name="plan" value={form.plan} onChange={onChange}>
                <option value="FREE">FREE</option>
                <option value="PRO">PRO</option>
                <option value="ENTERPRISE">ENTERPRISE</option>
              </Select>

              <Select label="Status" name="status" value={form.status} onChange={onChange}>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Select>

            </div>
          </div>

          {/* ================= ADDRESS ================= */}
          <div className="rounded-xl border bg-slate-50 p-4">
            <h2 className="mb-4 text-sm font-semibold text-slate-700">
              Address Details
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <Input label="Address Line" name="line1" value={form.address.line1} onChange={onAddressChange} />
              <Input label="City" name="city" value={form.address.city} onChange={onAddressChange} />
              <Input label="State" name="state" value={form.address.state} onChange={onAddressChange} />
              <Input label="Pincode" name="pincode" value={form.address.pincode} onChange={onAddressChange} />

            </div>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div className="rounded-xl border bg-slate-50 p-4">
            <h2 className="mb-4 text-sm font-semibold text-slate-700">
              Description
            </h2>

            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows="4"
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write company description..."
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60 transition"
          >
            {loading
              ? "Saving..."
              : isEdit
              ? "Update Company"
              : "Create Company"}
          </button>

          {/* MESSAGES */}
          {success && (
            <p className="text-center text-sm text-green-600">{success}</p>
          )}
          {error && (
            <p className="text-center text-sm text-red-600">{error}</p>
          )}

        </form>
      </div>
    </section>
  );
}

/* ================= UI COMPONENTS ================= */

function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <select
        {...props}
        className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {children}
      </select>
    </div>
  );
}