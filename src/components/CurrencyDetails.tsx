import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleTrackedAPI } from '../helpers/utils';
import { CoinDetailsLocation } from '../@types';
import { DetailsHeader } from './DetailsHeader';
import { TrackButton } from './TrackButton';

export const CurrencyDetails: React.FC = () => {

   const { state: { coin: coinData } } = useLocation<CoinDetailsLocation>();

   const [tracked, setTracked] = useState(coinData.tracked as boolean);

   const toggleTrackedState = () => {

      const newTrackedFlag = !tracked;

      handleTrackedAPI(coinData.coin_id, newTrackedFlag);

      setTracked(newTrackedFlag);

   };

   return (
      <>
         <DetailsHeader coinData={coinData} />
         <TrackButton tracked={tracked} handleClick={toggleTrackedState} />
      </>
   );

};