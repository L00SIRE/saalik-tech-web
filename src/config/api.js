// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/health`,
  WAITLIST: `${API_BASE_URL}/waitlist`,
  WAITLIST_BY_ID: (id) => `${API_BASE_URL}/waitlist/${id}`,
};

export default API_BASE_URL;

