import axios from 'axios';

export const getItineraries = async (duration) => {
  const res = duration
    ? await axios.get(`http://localhost:5000/iteneraries?duration=${duration}`)
    : await axios.get(`http://localhost:5000/iteneraries`);
  return res.data;
};
