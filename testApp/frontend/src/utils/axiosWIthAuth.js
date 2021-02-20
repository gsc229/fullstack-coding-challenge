import axios from 'axios'
import {baseUrl} from '../config/config'
const token = JSON.parse(localStorage.getItem('token'))

const axiosWithAuth = () =>  {
  return axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token ? `Token ${token}` : '',    
    Accept: 'application/json'
  },
  responseType: 'json'
  
})}

export default axiosWithAuth