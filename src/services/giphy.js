import axios from "axios";
const API_BASE = process.env.REACT_APP_APIBASE;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const getTrendingiphy = async params => {
  console.log("params", { ...params, api_key: API_KEY });
  try {
    const response = await axios.get(`${API_BASE}/gifs/trending`, {
      params: { ...params, api_key: API_KEY }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getSearchgiphy = async params => {
  try {
    const response = await axios.get(`${API_BASE}/gifs/search`, {
      params: { ...params, api_key: API_KEY }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getSearchSuggestion = async params => {
  try {
    const response = await axios.get(`${API_BASE}/gifs/search/tags`, {
      params: { ...params, api_key: API_KEY }
    });
    return response;
  } catch (error) {
    return error;
  }
};
