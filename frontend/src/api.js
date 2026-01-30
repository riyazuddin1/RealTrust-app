import axios from 'axios';

// In dev, CRA proxy handles /api -> backend; in prod, set REACT_APP_API_BASE_URL
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  timeout: 15000
});

