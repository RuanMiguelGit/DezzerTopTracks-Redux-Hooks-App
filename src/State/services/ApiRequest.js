const axios = require('axios');

const axiosConfig = {
    withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Accept: 'application/json',

  },
};

export const getDataFromApi = async (url) => {
  const products = await axios.get(url, axiosConfig)
    .then((res) => res.data)
    .then((data) => data)
    .catch((err) => {
      console.log('deu ruim', err);
    });

  return products;
};