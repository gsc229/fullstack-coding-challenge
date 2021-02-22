import axios from 'axios'
import {baseUrl} from '../config/config'


const axiosWithAuth = () =>  {
  const token = localStorage.getItem('token')
  
  return axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token ? `Token ${token}` : '',    
    Accept: 'application/json',
    
  },
  responseType: 'json'
  
})}

export default axiosWithAuth