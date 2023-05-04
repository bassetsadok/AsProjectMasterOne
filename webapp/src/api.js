import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchData = async (route) => {
  try {
    const response = await axios.get(`${API_URL}/${route}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (route, data) => {
  try {
    const response = await axios.post(`${API_URL}/${route}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
