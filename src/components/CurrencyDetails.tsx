import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CoinDetailsLocation, CoinHistory } from '../@types';
import { DetailsHeader } from './DetailsHeader';
import { TrackButton } from './TrackButton';
import { LineGraph } from './LineGraph';
import { useCryptoApi } from '../hooks';

export const CurrencyDetails: React.FC = () => {

   const { state: { coin: coinData } } = useLocation<CoinDetailsLocation>();
   const [timeframe, setTimeframe] = useState<string>('D');
   const coinHistory = useCryptoApi<{ quotes_data: CoinHistory }>(`/currencies/history/${coinData.currency_id}?time_scope=1${timeframe}&time_zone=1`);

   const updateTimeframe = (e: React.FormEvent<HTMLInputElement>) => setTimeframe(e.currentTarget.value);

   return (
      <DetailsWrapper>
         <DetailsHeader coinData={coinData} />

         {coinHistory ?

            <>
               <TimeframeInput>
                  <input onChange={updateTimeframe} id='day' name='timeframe' type='radio' value='D' defaultChecked /><label htmlFor='day'>1 day</label>
                  <input onChange={updateTimeframe} id='month' name='timeframe' type='radio' value='M' /><label htmlFor='month'>1 month</label>
                  <input onChange={updateTimeframe} id='year' name='timeframe' type='radio' value='Y' /><label htmlFor='year'>1 year</label>
               </TimeframeInput>
               <LineGraph data={coinHistory.quotes_data} timeframe={timeframe} />
            </>

            :

            null}

         <TrackButton coin={coinData} />
      </DetailsWrapper>
   );

};

const DetailsWrapper = styled.div`
   
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   height: 100%;

   svg { font-family: 'Roboto', sans-serif; }

`;

const TimeframeInput = styled.div`

   display: flex;
   justify-content: space-evenly;
   width: 100%;

   input[type='radio']{

      display: none;

      &:checked + label{border-color: #D6D5DA; }

   }

   label{
      background: #2B2F39;
      padding: 9px 28px;
      border-radius: 40px;
      color: #D6D5DA;
      border: 1px solid #2B2F39;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
   }

`;