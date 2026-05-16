// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import { mockInvoices } from "../../assets/mockData/invoices";
// import { mockTenants } from "../../assets/mockData/tenants";

// export default function CompanyInvoices() {
//   const { id } = useParams();

//   const [invoices, setInvoices] = useState([]);

//   /* ================= TENANT ================= */

//   const tenant = mockTenants.find(
//     (t) => t.id === id
//   );

//   /* ================= LOAD INVOICES ================= */

//   useEffect(() => {
//     async function loadInvoices() {
//       try {
//         const companyInvoices = mockInvoices.filter(
//           (invoice) =>
//             invoice.tenantId === id
//         );

//         setInvoices(companyInvoices);
//       } catch (error) {
//         console.error(
//           "Invoice Load Error:",
//           error
//         );
//       }
//     }

//     loadInvoices();
//   }, [id]);

//   /* ================= CALCULATIONS ================= */

//   const totalPaid = invoices
//     .filter(
//       (invoice) =>
//         invoice.status === "PAID"
//     )
//     .reduce(
//       (total, invoice) =>
//         total + invoice.amount,
//       0
//     );

//   const totalPending = invoices
//     .filter(
//       (invoice) =>
//         invoice.status === "PENDING"
//     )
//     .reduce(
//       (total, invoice) =>
//         total + invoice.amount,
//       0
//     );

//   return (
//     <section className="h-[calc(95vh-80px)] space-y-6 overflow-y-auto pr-2">

//       {/* ================= HEADER ================= */}

//       <div className="flex items-center justify-between">

//         <div>

//           <h1 className="text-2xl font-semibold text-slate-900">
//             {tenant?.name} Invoices
//           </h1>

//           <p className="text-sm text-slate-500">
//             Track paid &amp; pending invoices for this company
//           </p>

//         </div>

//         <Link
//           to={`/system/tenants/${id}`}
//           className="text-sm text-indigo-600 hover:underline"
//         >
//           ← Back
//         </Link>

//       </div>

//       {/* ================= STATS ================= */}

//       <div className="grid gap-4 md:grid-cols-3">

//         {/* TOTAL */}

//         <div className="rounded-xl border bg-white p-5 shadow-sm">

//           <p className="text-sm text-slate-500">
//             Total Invoices
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-slate-800">
//             {invoices.length}
//           </h2>

//         </div>

//         {/* PAID */}

//         <div className="rounded-xl border bg-white p-5 shadow-sm">

//           <p className="text-sm text-slate-500">
//             Paid Amount
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-green-600">
//             ₹{totalPaid}
//           </h2>

//         </div>

//         {/* PENDING */}

//         <div className="rounded-xl border bg-white p-5 shadow-sm">

//           <p className="text-sm text-slate-500">
//             Pending Amount
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-yellow-600">
//             ₹{totalPending}
//           </h2>

//         </div>

//       </div>

//       {/* ================= TABLE ================= */}

//       <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

//         <div className="overflow-x-auto">

//           <table className="min-w-full">

//             {/* ================= TABLE HEAD ================= */}

//             <thead className="bg-slate-50">

//               <tr className="text-left text-sm font-medium text-slate-600">

//                 <th className="px-5 py-4">
//                   Invoice ID
//                 </th>

//                 <th className="px-5 py-4">
//                   Tenant ID
//                 </th>

//                 <th className="px-5 py-4">
//                   Client ID
//                 </th>

//                 <th className="px-5 py-4">
//                   Amount
//                 </th>

//                 <th className="px-5 py-4">
//                   Due Date
//                 </th>

//                 <th className="px-5 py-4">
//                   Status
//                 </th>

//               </tr>

//             </thead>

//             {/* ================= TABLE BODY ================= */}

//             <tbody>

//               {invoices.length > 0 ? (

//                 invoices.map((invoice) => (

//                   <tr
//                     key={invoice.id}
//                     className="border-t text-sm hover:bg-slate-50"
//                   >

//                     {/* INVOICE ID */}

//                     <td className="px-5 py-4 font-medium text-slate-800">
//                       {invoice.id}
//                     </td>

//                     {/* TENANT ID */}

//                     <td className="px-5 py-4 text-slate-600">
//                       {invoice.tenantId}
//                     </td>

//                     {/* CLIENT ID */}

//                     <td className="px-5 py-4 text-slate-600">
//                       {invoice.clientId}
//                     </td>

//                     {/* AMOUNT */}

//                     <td className="px-5 py-4 font-medium text-slate-800">
//                       ₹{invoice.amount}
//                     </td>

//                     {/* DUE DATE */}

//                     <td className="px-5 py-4 text-slate-600">
//                       {new Date(
//                         invoice.dueDate
//                       ).toLocaleDateString()}
//                     </td>

//                     {/* STATUS */}

//                     <td className="px-5 py-4">

//                       <span
//                         className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                           invoice.status === "PAID"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-yellow-100 text-yellow-700"
//                         }`}
//                       >
//                         {invoice.status}
//                       </span>

//                     </td>

//                   </tr>

//                 ))

//               ) : (

//                 <tr>

//                   <td
//                     colSpan="6"
//                     className="px-5 py-10 text-center text-sm text-slate-500"
//                   >
//                     No invoices found for this company
//                   </td>

//                 </tr>

//               )}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "../../pdf/InvoicePDF";
import { Eye, Download } from "lucide-react";

import { mockInvoices } from "../../assets/mockData/invoices";
import { mockTenants } from "../../assets/mockData/tenants";

export default function CompanyInvoices() {
  const { id } = useParams();
  const [invoices, setInvoices] = useState([]);
  const [previewInvoice, setPreviewInvoice] = useState(null);

  /* ================= TENANT ================= */
  const tenant = mockTenants.find((t) => t.id === id);

  /* ================= LOAD INVOICES ================= */
  useEffect(() => {
    async function loadInvoices() {
      try {
        const companyInvoices = mockInvoices.filter(
          (invoice) => invoice.tenantId === id
        );
        setInvoices(companyInvoices);
      } catch (error) {
        console.error("Invoice Load Error:", error);
      }
    }
    loadInvoices();
  }, [id]);

  /* ================= CALCULATIONS ================= */
  const totalPaid = invoices
    .filter((i) => i.status === "PAID")
    .reduce((total, i) => total + i.amount, 0);

  const totalPending = invoices
    .filter((i) => i.status === "PENDING")
    .reduce((total, i) => total + i.amount, 0);

  return (
    <section className="h-[calc(95vh-80px)] space-y-6 overflow-y-auto pr-2">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            {tenant?.name} Invoices
          </h1>
          <p className="text-sm text-slate-500">
            Track paid & pending invoices for this company
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* BACK */}
          <Link
            to={`/system/tenants/${id}`}
            className="text-sm text-indigo-600 hover:underline"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Invoices</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">{invoices.length}</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Paid Amount</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">₹{totalPaid}</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Pending Amount</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-600">₹{totalPending}</h2>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm font-medium text-slate-600">
                <th className="px-5 py-4">Invoice ID</th>
                <th className="px-5 py-4">Tenant ID</th>
                <th className="px-5 py-4">Client ID</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Due Date</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {invoices.length > 0 ? (
                invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-t text-sm hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">{invoice.id}</td>
                    <td className="px-5 py-4 text-slate-600">{invoice.tenantId}</td>
                    <td className="px-5 py-4 text-slate-600">{invoice.clientId}</td>
                    <td className="px-5 py-4 font-medium text-slate-800">{invoice.amount}</td>
                    <td className="px-5 py-4 text-slate-600">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          invoice.status === "PAID"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 flex gap-3 items-center">
                      {/* PREVIEW ICON */}
                      <Eye
                        size={16}
                        className="cursor-pointer text-slate-600 hover:text-black"
                        onClick={() => setPreviewInvoice(invoice)}
                      />
                      {/* DOWNLOAD ICON */}
                      <PDFDownloadLink
                        document={<InvoicePDF tenant={tenant} invoice={invoice} />}
                        fileName={`invoice-${invoice.id}.pdf`}
                      >
                        {({ loading }) =>
                          loading ? (
                            <span className="text-xs text-slate-400">...</span>
                          ) : (
                            <Download
                              size={16}
                              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                            />
                          )
                        }
                      </PDFDownloadLink>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-sm text-slate-500">
                    No invoices found for this company
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= PREVIEW MODAL ================= */}
     {previewInvoice && (
  <div className="fixed top-0 right-0 left-0 z-50 flex justify-center">
    
    <div className="w-[80%] h-[90vh] bg-white rounded-xl shadow-xl border overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <h2 className="text-sm font-medium text-slate-700">
          Invoice Preview - {previewInvoice.id}
        </h2>

        <button
          onClick={() => setPreviewInvoice(null)}
          className="text-sm text-slate-600 hover:text-black"
        >
          Close
        </button>
      </div>

      {/* PDF VIEWER */}
      <div className="h-[calc(100%-40px)]">
        <PDFViewer width="100%" height="100%">
          <InvoicePDF
            tenant={tenant}
            invoice={previewInvoice}
          />
        </PDFViewer>
      </div>

    </div>
  </div>
)}
    </section>
  );
}


























// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// import {
//   Edit,
//   FileText,
//   Users,
//   CreditCard,
//   Activity,
//   LogIn,
//   Trash2,
//   Mail,
//   Download,
//   Lock,
//   Power,
// } from "lucide-react";

// import { getTenantsApi } from "../../services/api/tenant.api";

// export default function TenantDetails() {
//   const { id } = useParams();
//   const [tenant, setTenant] = useState(null);

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await getTenantsApi();

//         const found = (res.data || []).find((t) => t.id === id);

//         setTenant(found || null);
//       } catch (error) {
//         console.error("Tenant Details Error:", error);
//       }
//     }

//     load();
//   }, [id]);

//   // ✅ reusable action style
//   const action =
//     "flex flex-col items-center justify-center rounded-xl border bg-slate-50 p-3 hover:bg-slate-100 hover:shadow-md transition";

//   if (!tenant) {
//     return (
//       <div className="p-6 text-slate-500">
//         Tenant not found
//       </div>
//     );
//   }

//   const isActive = tenant.status === "ACTIVE";

//   return (
//     <section className="h-[calc(95vh-80px)] overflow-y-auto space-y-6 pr-2">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-slate-900">
//             {tenant.name}
//           </h1>
//           <p className="text-sm text-slate-500">
//             Tenant Full Profile
//           </p>
//         </div>

//         <Link
//           to="/system"
//           className="text-sm text-indigo-600 hover:underline"
//         >
//           ← Back
//         </Link>
//       </div>

//       {/* TOP GRID */}
//       <div className="grid gap-4 lg:grid-cols-3">

//         {/* BASIC INFO */}
//         <div className="rounded-2xl border bg-white p-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-700">
//               {tenant.name?.charAt(0)}
//             </div>

//             <div>
//               <h2 className="text-lg font-semibold text-slate-800">
//                 {tenant.name}
//               </h2>
//               <p className="text-sm text-slate-500">
//                 {tenant.email}
//               </p>
//             </div>
//           </div>

//           <div className="mt-5 space-y-2 text-sm text-slate-600">
//             <p><b>Phone:</b> {tenant.phone}</p>
//             <p><b>Website:</b> {tenant.website}</p>
//             <p><b>Industry:</b> {tenant.industry}</p>
//             <p><b>Employees:</b> {tenant.employees}</p>
//             <p><b>Plan:</b> {tenant.plan}</p>

//             <p>
//               <b>Status:</b>{" "}
//               <span className={isActive ? "text-green-600" : "text-red-600"}>
//                 {tenant.status}
//               </span>
//             </p>

//             <p><b>GST:</b> {tenant.gstNumber}</p>
//             <p><b>Type:</b> {tenant.gstType}</p>
//             <p><b>Rate:</b> {tenant.gstRate}%</p>
//             <p><b>Joined:</b> {tenant.joinedAt}</p>
//           </div>
//         </div>

//         {/* FINANCIAL */}
//         <div className="rounded-2xl border bg-white p-5 shadow-sm">
//           <h3 className="mb-4 text-lg font-semibold text-slate-800">
//             Financial Overview
//           </h3>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between rounded-xl bg-slate-50 p-3">
//               <span>Total Invoices</span>
//               <span className="font-semibold">{tenant.totalInvoices}</span>
//             </div>

//             <div className="flex justify-between rounded-xl bg-yellow-50 p-3">
//               <span>Pending</span>
//               <span className="font-semibold text-yellow-700">
//                 {tenant.pendingInvoices}
//               </span>
//             </div>

//             <div className="flex justify-between rounded-xl bg-green-50 p-3">
//               <span>Credit</span>
//               <span className="font-semibold text-green-700">
//                 ₹{tenant.totalCredit}
//               </span>
//             </div>

//             <div className="flex justify-between rounded-xl bg-red-50 p-3">
//               <span>Debit</span>
//               <span className="font-semibold text-red-700">
//                 ₹{tenant.totalDebit}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ACTIONS */}
//         <div className="rounded-2xl border bg-white p-5 shadow-sm">
//           <h3 className="mb-4 text-lg font-semibold text-slate-800">
//             Actions
//           </h3>

//           <div className="grid grid-cols-3 gap-3">

//             {/* Activate / Deactivate */}
//             <button className={action}>
//               <Power className={isActive ? "text-red-600" : "text-green-600"} />
//               <span className="text-xs mt-1">
//                 {isActive ? "Disable" : "Enable"}
//               </span>
//             </button>

//             {/* Edit */}
//             <Link to={`/system/edit-company/${tenant.id}`} className={action}>
//               <Edit className="text-indigo-600" />
//               <span className="text-xs mt-1">Edit</span>
//             </Link>

//             {/* Invoices */}
//             <Link to={`/system/company-invoices/${tenant.id}`} className={action}>
//               <FileText className="text-green-600" />
//               <span className="text-xs mt-1">Invoices</span>
//             </Link>

//             {/* Users */}
//             <Link to={`/system/company-users/${tenant.id}`} className={action}>
//               <Users className="text-blue-600" />
//               <span className="text-xs mt-1">Users</span>
//             </Link>

//             {/* Billing */}
//             <Link to={`/system/company-billing/${tenant.id}`} className={action}>
//               <CreditCard className="text-emerald-600" />
//               <span className="text-xs mt-1">Billing</span>
//             </Link>

//             {/* Logs */}
//             <Link to={`/system/company-logs/${tenant.id}`} className={action}>
//               <Activity className="text-orange-600" />
//               <span className="text-xs mt-1">Logs</span>
//             </Link>

//             {/* Login As */}
//             <button className={action}>
//               <LogIn className="text-violet-600" />
//               <span className="text-xs mt-1">Login</span>
//             </button>

//             {/* Reset Password */}
//             <button className={action}>
//               <Lock className="text-sky-600" />
//               <span className="text-xs mt-1">Reset</span>
//             </button>

//             {/* Email */}
//             <button className={action}>
//               <Mail className="text-cyan-600" />
//               <span className="text-xs mt-1">Email</span>
//             </button>

//             {/* Download */}
//             <button className={action}>
//               <Download className="text-slate-700" />
//               <span className="text-xs mt-1">Report</span>
//             </button>

//           </div>

//           {/* DANGER ZONE */}
//           <div className="mt-5 border-t pt-4">
//             <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-sm font-medium text-red-600 hover:bg-red-100">
//               <Trash2 />
//               Delete Company
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* DESCRIPTION */}
//       <div className="rounded-2xl border bg-white p-5 shadow-sm">
//         <h3 className="mb-3 text-lg font-semibold text-slate-800">
//           Company Description
//         </h3>
//         <p className="text-sm text-slate-600">
//           {tenant.description}
//         </p>
//       </div>

//       {/* ADDRESS */}
//       <div className="rounded-2xl border bg-white p-5 shadow-sm">
//         <h3 className="mb-3 text-lg font-semibold text-slate-800">
//           Address
//         </h3>

//         <div className="text-sm text-slate-600 space-y-1">
//           <p>{tenant.address?.line1}</p>
//           <p>{tenant.address?.city}, {tenant.address?.state}</p>
//           <p>{tenant.address?.country} - {tenant.address?.pincode}</p>
//         </div>
//       </div>

//     </section>
//   );
// }