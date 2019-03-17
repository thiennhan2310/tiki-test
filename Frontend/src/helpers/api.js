import { API_URL } from '../config';
import axios from 'axios';
function getToken() {
  return localStorage.getItem('token')
}

export const apiGet = (endpoint, headers = {}) => {
  return axios.get(
    `${API_URL}${endpoint}`,
    {
      headers: Object.assign({}, { 'Authorization': `Bearer ${getToken()}` }, headers),
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
          'Authorization': `Bearer ${getToken()}`,
        }, headers),
    }
  );
};

export const apiPut = (endpoint, data, headers = {}) => {
  return axios.put(
    `${API_URL}${endpoint}`,
    data,
    {
      headers: Object.assign({},
        {
          'Authorization': `Bearer ${getToken()}`,
        }, headers),
    }
  );
};

export const apiDelete = (endpoint, headers = {}) => {
  return axios.delete(
    `${API_URL}${endpoint}`,
    {
      headers: Object.assign({},
        {
          'Authorization': `Bearer ${getToken()}`,
        }, headers),
    }
  );
};