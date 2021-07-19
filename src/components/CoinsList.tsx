import styled from 'styled-components';
import { Coin } from '../@types';
import { CoinSummary } from './CoinSummary';

export const CoinsList: React.FC<{ coins: Coin[] }> = ({ coins }) => {

   return (
      <Coins>
         {coins.map((coin: Coin) => <CoinSummary key={coin.currency_id} coin={coin} />)}
      </Coins>
   );

};

const Coins = styled.ul`
   width: 100%;
   display: block;
   padding: 15px 25px;
   background: #1D1C28;
`;