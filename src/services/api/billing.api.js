import { apiResponse } from "./base.api";

import { mockInvoices } from "../../assets/mockData/invoices";
import { mockPayments } from "../../assets/mockData/payments";

/* =========================
   INVOICES
========================= */

export const getInvoicesApi = async (tenantId) => {
  const data = mockInvoices.filter((i) => i.tenantId === tenantId);
  return apiResponse(data);
};

export const getInvoiceByIdApi = async (id) => {
  const data = mockInvoices.find((i) => i.id === id);
  return apiResponse(data);
};

export const createInvoiceApi = async (invoice) => {
  const newInvoice = {
    id: "inv_" + Date.now(),
    status: "PENDING",
    createdAt: new Date().toISOString(),
    ...invoice
  };

  mockInvoices.push(newInvoice);

  return apiResponse(newInvoice);
};

export const updateInvoiceStatusApi = async (id, status) => {
  const invoice = mockInvoices.find((i) => i.id === id);
  if (invoice) invoice.status = status;

  return apiResponse(invoice);
};

/* =========================
   PAYMENTS (OFFLINE APPROVAL FLOW)
========================= */

export const getPaymentsApi = async (tenantId) => {
  const data = mockPayments.filter((p) => p.tenantId === tenantId);
  return apiResponse(data);
};

export const submitPaymentApi = async (payment) => {
  const newPayment = {
    id: "pay_" + Date.now(),
    status: "PENDING",
    createdAt: new Date().toISOString(),
    ...payment
  };

  mockPayments.push(newPayment);

  return apiResponse(newPayment);
};

export const approvePaymentApi = async (id) => {
  const payment = mockPayments.find((p) => p.id === id);
  if (payment) payment.status = "APPROVED";

  return apiResponse(payment);
};

export const rejectPaymentApi = async (id) => {
  const payment = mockPayments.find((p) => p.id === id);
  if (payment) payment.status = "REJECTED";

  return apiResponse(payment);
};