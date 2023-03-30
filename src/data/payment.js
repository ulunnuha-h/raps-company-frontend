import axios from "axios";
import getAPIurl from "@/config/API-url";

const getAllPayments = () => {
  return axios.get(`${getAPIurl()}/api/v1/payments`);
};

const getPaymentById = (id) => {
  return axios.get(`${getAPIurl()}/api/v1/payment/${id}`);
};

const patchPayment = (id) => {
  return axios.patch(`${getAPIurl()}/api/v1/pembelian/button/${id}`, {
    button_bayar: true,
  });
};

export { getAllPayments, getPaymentById, patchPayment };
