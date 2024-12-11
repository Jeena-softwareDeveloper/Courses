import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    return response.data;

    
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
  
};
