import getAPIurl from "@/config/API-url";
import axios from "axios";

const postPembelian = (data) => {
  const pembelianPayload = {
    world: data.world,
    nama: data.name,
    grow_id: data.growId,
    jenis_item: data.isDl,
    jumlah_dl: data.dl + data.bgl * 100,
    wa: data.whatsapp,
    metode_transfer: data.metodeBayar,
  };
  return axios.post(`${getAPIurl()}/api/v1/new/pembelian`, pembelianPayload);
};

const postImagePembelian = (img) => {
  const formData = new FormData();
  formData.append("file", img);
  return axios.post(`${getAPIurl()}/api/v1/upload`, formData);
};

const getPembelianStatus = (id) => {
  return axios.get(`${getAPIurl()}/api/v1/pembelian/status/${id}`);
};

export { postPembelian, getPembelianStatus, postImagePembelian };
