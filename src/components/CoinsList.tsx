import styled from 'styled-components';
import { Coin } from '../@types';
import { useCryptoApi } from '../state/hooks';
import { CoinSummary } from './CoinSummary';

export const CoinsList: React.FC<{ tracked?: boolean }> = ({ tracked }) => {

   const coins = useCryptoApi<{ coins_list: Coin[] }>(`/coins/list?tracked_only=${tracked}&limit=20&offset=0`);

   return (

      coins && coins.coins_list ?

         <Coins>
            {coins.coins_list.map((coin: Coin) => <CoinSummary key={coin.coin_id} coin={coin} />)}
         </Coins>

         :

         null

   );

};

const Coins = styled.ul`
   width: 100%;
   display: block;
   padding: 15px 25px;
`;