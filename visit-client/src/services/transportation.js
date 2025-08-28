import axios from 'axios';

export const getTransportation = async (category) => {
  const url = category
    ? `http://localhost:5000/api/transport?category=${category}`
    : `http://localhost:5000/api/transport`;

  console.log("➡️ Fetching from:", url);   // 👀 log the request URL

  const res = await axios.get(url);
  console.log("✅ Response data:", res.data); // 👀 log the response
  return res.data;
};
