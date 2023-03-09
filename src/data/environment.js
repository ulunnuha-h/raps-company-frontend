import axios from 'axios'
import getAPIurl from '@/config/API-url'

const getEnvironment = () => {
  return axios.get(`${getAPIurl()}/api/v1/env`)
}

export {
  getEnvironment
}
