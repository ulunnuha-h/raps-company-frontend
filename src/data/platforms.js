import axios from 'axios'
import getAPIurl from '@/config/API-url'

const getAllSocialMedia = () => {
  return axios.get(`${getAPIurl()}/api/v1/platforms`)
}

export { getAllSocialMedia }
