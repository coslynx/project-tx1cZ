import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const api = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },
  updateUserSettings: async (userId, settings) => {
    try {
      const response = await axios.put(`${BASE_URL}/user/${userId}/settings`, settings);
      return response.data;
    } catch (error) {
      console.error('Error updating user settings:', error);
      return null;
    }
  },
};

export default api;