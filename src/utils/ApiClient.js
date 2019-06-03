import axios from 'axios'
import { Constants } from 'expo'

export default (method, url, data) => {
  const baseURL = 'http://192.168.11.2:3000'
  if (method === 'get') {
    return axios({
      method,
      url: `${baseURL}${url}`,
      headers: {
        token: Constants.installationId
      }
    })
  } else {
    return axios({
      method,
      data,
      url: `${baseURL}${url}`,
      headers: {
        token: Constants.installationId
      }
    })
  }
}
