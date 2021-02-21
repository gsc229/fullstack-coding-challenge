import axios from 'axios'
import {baseUrl} from '../config/config'
const token = localStorage.getItem('token')
console.log({token})

const axiosWithAuth = () =>  {
  return axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token ? `Token ${token}` : '',    
    Accept: 'application/json',
    
  },
  responseType: 'json'
  
})}

export default axiosWithAuth