import getAPIurl from '@/config/API-url'
import axios from 'axios'

const getHarga = () => {
  return axios.get(`${getAPIurl()}/api/v1/price`)
}

export {
  getHarga
}
