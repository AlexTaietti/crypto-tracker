import { useState, useEffect } from 'react';
import { axiosInstance } from '../helpers/utils';

export const useCryptoApi = <ResourceType>(apiEndpoint: string) => {

   const [data, setData] = useState<ResourceType>();

   useEffect(() => {

      const getResource = async (endpoint: string) => {

         const data: ResourceType = await axiosInstance.get(endpoint).then(response => response.data);

         setData(data);

      };

      getResource(apiEndpoint);

   }, [apiEndpoint]);

   return data;

};