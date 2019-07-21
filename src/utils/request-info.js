import axios from 'axios'

/**
 * @description Just for the external request
 */

// create an axios instance
const service = axios.create({
  timeout: 5000 // request timeout
})
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default service
