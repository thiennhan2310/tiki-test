import {API_URL} from '../config';
import axios from 'axios';
function getToken (){
  return localStorage.getItem('token')
} 

export const apiGet = (endpoint, headers = {} ) => {
  return axios.get(
    `${API_URL}${endpoint}`,
    {
      headers: Object.assign({}, {'Authorization': `Bearer ${getToken()}`}, headers),
    }
  );
};

export const apiPost = (endpoint, data, headers = {}) => {
  return axios.post(
    `${API_URL}${endpoint}`,
    data,
    {
      headers: Object.assign({}, 
        {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${getToken()}`,
        }, headers),
    }
  );
};