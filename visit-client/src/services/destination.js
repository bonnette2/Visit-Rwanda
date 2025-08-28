import axios from 'axios';

export const getDestination = async (type) => {
  const res = await axios.get(`http://localhost:5000/api/destination/${type}`);
  return res.data;
};
