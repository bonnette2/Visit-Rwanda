import axios from 'axios';

export const getAccommodations = async (type) => {
  const res = await axios.get(`http://localhost:5000/api/accomodation/${type}`);
  return res.data;
};
