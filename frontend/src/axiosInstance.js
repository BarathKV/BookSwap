import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;