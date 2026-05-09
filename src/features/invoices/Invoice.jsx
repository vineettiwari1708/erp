import React, { useEffect, useState } from "react";
import { getInvoicesApi } from "../../services/api/invoice.api";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const res = await getInvoicesApi("tnt_001");
      setInvoices(res.data || []);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    }
  };

  const handleEdit = (invoice) => {
    console.log("Edit Invoice:", invoice);
  };

  const handleDelete = (id) => {
    const updatedInvoices = invoices.filter(
      (inv) => inv.id !== id
    );

    setInvoices(updatedInvoices);

    console.log("Deleted Invoice ID:", id);
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Invoices
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
            + New Invoice
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left p-4 text-sm text-gray-500">
                  ID
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Tenant
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Client
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Amount
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Status
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Due Date
                </th>

                <th className="text-left p-4 text-sm text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {invoices.length > 0 ? (
                invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 text-sm text-gray-800">
                      {inv.id}
                    </td>

                    <td className="p-4 text-sm text-gray-800">
                      {inv.tenantId}
                    </td>

                    <td className="p-4 text-sm text-gray-800">
                      {inv.clientId}
                    </td>

                    <td className="p-4 text-sm text-gray-800">
                      ₹ {inv.amount}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          inv.status === "PAID"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </td>

                    <td className="p-4 text-sm text-gray-800">
                      {inv.dueDate}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-3">
                        
                        <button
                          onClick={() => handleEdit(inv)}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(inv.id)
                          }
                          className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-500"
                  >
                    No invoices found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;