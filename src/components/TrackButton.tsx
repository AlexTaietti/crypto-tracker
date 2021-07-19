import { useState } from 'react';
import styled from 'styled-components';
import { Coin } from '../@types';
import { handleTrackedAPI } from '../helpers/utils';

export const TrackButton: React.FC<{ coin: Coin }> = ({ coin }) => {

   const [localTrackedFlag, setLocalTrackedFlag] = useState(coin.is_tracked);

   const handleClick = () => {

      const newTrackedStatus = !localTrackedFlag;
      const updateSuccessCallback = () => setLocalTrackedFlag(newTrackedStatus);

      handleTrackedAPI(coin.currency_id, newTrackedStatus, updateSuccessCallback);

   };

   return (
      <Button onClick={handleClick} className={localTrackedFlag ? 'tracked' : 'default'}>
         {!localTrackedFlag ? 'Add to tracked currencies list' : 'Remove from tracked currencies list'}
      </Button>
   );

};

const Button = styled.button`

   display: block;
   margin: 0 auto;
   width: 325px;
   padding: 15px 25px;
   border: none;
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   color: #FCFCFC;
   background: #686CD6;
   border-radius: 50px;
   border: 2px solid #686CD6;
   margin-bottom: 40px;

   &.tracked{ background: none; }

`;