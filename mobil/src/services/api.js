import axios from 'axios'



const api = axios.create({
   baseURL: 'http://192.168.227.188:3333'
  
} );

export default axios;