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

export const formatPrice = (price: number) => {

   const splitPrice = price.toString().split('.');

   const integerPart = splitPrice[0];

   const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   const decimalPart = splitPrice[1] ? ('.' + splitPrice[1]) : '';

   return '$' + formattedInteger + decimalPart;

};

export const fetchResource = async (endpoint: string) => {

   const data = await axiosInstance.get(endpoint).then(response => response.data);

   return data;

};

export const handleTrackedAPI = (coinID: number, newTrackedFlag: boolean, onSuccess: () => void) => {

   axiosInstance.post(`/currencies/tracked_currencies/${coinID}?status=${newTrackedFlag}`)
      .then(() => onSuccess())
      .catch(error => console.error(error));

};