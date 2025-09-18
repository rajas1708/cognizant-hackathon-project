import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
});

// api.interceptors.request.use(
//   (config) => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     if (userInfo && userInfo.token) {
//       config.headers.Authorization = `Bearer ${userInfo.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
api.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signup = (userData) => api.post('/signup', userData);
export const signin = (credentials) => api.post('/signin', credentials);
export const verifyEmail = (token) => api.get(`/verify-email?token=${token}`);
export const forgotPassword = (data) => api.post('/forgot-password', data);
export const verifyResetCode = (data) => api.post('/verify-reset-code', data);
export const resetPassword = (data) => api.post('/reset-password', data);
export const getPrediction = (deviceData) => api.post('/api/predict', { deviceData });
export const getLatestPrediction = () => api.get('/api/predict/latest');
export const getAllPredictions = () => api.get('/api/predictAll');
export const predict = async (data) => api.post('api/predict', data); 
// export const  getUserProfile = async () => api.get('/profile');
// export const getUserProfile = async (id) => 
//   api.get(`/profile?id=${id}`);
//   // New function to update the user's profile
// export const updateUserProfile= async (userData) => api.put('/profile', userData)

export const getUserProfile = async () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  if (!userInfo || !userInfo._id) {
    throw new Error("User ID not found in localStorage");
  }
  return api.get(`/profile?id=${userInfo._id}`);
};

export const updateUserProfile = async (userData) => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  if (!userInfo || !userInfo._id) {
    throw new Error("User ID not found in localStorage");
  }
  return api.put(`/profile?id=${userInfo._id}`, userData);
};




export default api;