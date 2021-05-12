import styled from 'styled-components';
import { Coin } from '../@types';
import { CoinSummary } from './CoinSummary';

export const CoinsList: React.FC<{ coins?: Coin[] }> = ({ coins }) => {

   return (

      coins ?

         <Coins>
            {coins.map((coin: Coin) => <CoinSummary key={coin.coin_id} coin={coin} />)}
         </Coins>

         :

         null

   );

};

const Coins = styled.ul`
   width: 100%;
   display: block;
   padding: 15px 25px;
   background: #1D1C28;
`;