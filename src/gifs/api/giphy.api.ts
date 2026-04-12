import axios from 'axios';

//Instancia de axios con una URL base 'https://api.giphy.com/v1/gifs' cortada justo antes del "/search?"
const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  },
});

export { giphyApi };
