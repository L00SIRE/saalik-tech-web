// API Configuration
// Dynamically determine API URL based on current domain (runtime evaluation)
const getApiBaseUrl = () => {
  // First check for environment variable (highest priority)
  // Set REACT_APP_API_URL in your .env file for production
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Runtime check - only works in browser
  if (typeof window !== 'undefined' && window.location) {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    // Production domain - saalik.tech
    if (hostname === 'saalik.tech' || hostname === 'www.saalik.tech' || hostname.includes('saalik.tech')) {
      // Option 1: API on subdomain (if api.saalik.tech is set up)
      // return 'https://api.saalik.tech/api';
      
      // Option 2: API on same domain (if API is on same server as frontend)
      return `${protocol}//${hostname}/api`;
      
      // Option 3: Custom API server URL (update with your actual production API URL)
      // return 'https://your-api-server.com/api';
    }
  }
  
  // Development - use localhost
  return 'http://localhost:5001/api';
};

// Export function to get API base URL (called at runtime)
export const getApiBaseUrlRuntime = () => getApiBaseUrl();

// Export endpoints as functions (called at runtime)
export const API_ENDPOINTS = {
  HEALTH: () => `${getApiBaseUrl()}/health`,
  WAITLIST: () => `${getApiBaseUrl()}/waitlist`,
  WAITLIST_BY_ID: (id) => `${getApiBaseUrl()}/waitlist/${id}`,
};

// Default export for backward compatibility
export default getApiBaseUrl();

