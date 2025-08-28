import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
export const getAccommodations = async (type) => {
  try {
    const res = await axios.get(`${API_URL}/accommodations?type=${type}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching accommodations:', err);
    throw err;
  }
};
export const getDestination = async (type) => {
  try {
    const res = await axios.get(`${API_URL}/destination?type=${type}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching destinations:', err);
    throw err;
  }
};
export const getItineraries = async (duration) => {
  try {
    const res = await axios.get(`${API_URL}/iteneraries?duration=${duration}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching itineraries:', err);
    throw err;
  }
};
export const getTransportation = async (type) => {
  try {
    // if type is empty, don't send the query param
    const url = type 
      ? `${API_URL}/transport?category=${type}` 
      : `${API_URL}/transport`;

    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Error fetching transportation:", err);
    throw err;
  }
};