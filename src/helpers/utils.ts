import axios from "axios";

const cryptoBaseURL = 'https://api.sprintt.co/crypto';

export const axiosInstance = axios.create({
   baseURL: cryptoBaseURL,
   headers: { 'user-access-token': process.env.REACT_APP_CRYPTO_TOKEN }
});

export const getChange = (change: string) => {

   const direction = change.split('')[0] === '+' ? 1 : -1;

   return direction;

};

export const formatPrice = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");