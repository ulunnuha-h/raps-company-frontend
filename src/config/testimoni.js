import axios from 'axios'
import getAPIurl from './API-url'

const getTestimoni = () => {
  return axios.get(`${getAPIurl()}/api/v1/testimonis`)
}

export {
  getTestimoni
}
