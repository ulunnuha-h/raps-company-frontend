import getAPIurl from '@/config/API-url'
import phoneNumberFormatter from '@/utilities/phoneNumberFormatter'
import axios from 'axios'

const postPenjualan = (data) => {
  const form = new FormData()
  form.append('image', data.file)
  form.append('jumlah_dl', data.jumlah)
  form.append('whatsapp', phoneNumberFormatter(data.whatsapp))
  form.append('transfer', data.metodeBayar)
  form.append('nomor_transfer', data.norekening)
  form.append('nama', data.nama)
  return axios.post(`${getAPIurl()}/api/v1/penjualan`, form)
}

export {
  postPenjualan
}
