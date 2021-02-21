import axios from 'axios'
import {baseUrl} from '../config/config'
const token = JSON.parse(localStorage.getItem('token'))
console.log(`AXIOS BASE URL: ${baseUrl}`)
const axiosWithAuth = () =>  {
  return axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token ? `Token ${token}` : '',    
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  responseType: 'json'
  
})}

export default axiosWithAuth