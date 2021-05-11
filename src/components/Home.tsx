import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { Header } from './Header';
import { CoinsList } from './CoinsList';
import { Coin } from '../@types';
import { useCryptoApi } from '../state/hooks';
import { useEffect, useState } from 'react';

export const Home: React.FC = () => {

   const tracked = useRouteMatch({ path: "/tracked-coins" }) ? true : false;

   const allCoins = useCryptoApi<{ coins_list: Coin[] }>(`/coins/list?tracked_only=false&limit=20&offset=0`);
   const trackedCoins = useCryptoApi<{ coins_list: Coin[] }>(`/coins/list?tracked_only=true&limit=20&offset=0`);

   const [displayedCoins, setDisplayedCoins] = useState<Coin[]>();

   useEffect(() => {

      let coins: Coin[] = [];

      if (allCoins?.coins_list && trackedCoins?.coins_list) {

         if (tracked) {

            coins = trackedCoins.coins_list.map((coin: Coin) => {

               coin.tracked = true;

               return coin;

            });

         } else {

            coins = allCoins.coins_list.map((coin: Coin) => {

               for (let i = 0; i < trackedCoins.coins_list.length; i++) {

                  if (trackedCoins.coins_list[i].coin_id === coin.coin_id) { coin.tracked = true; }

               }

               return coin;

            });

         }

      }

      setDisplayedCoins(coins);

   }, [allCoins, trackedCoins, tracked]);

   return (
      <HomeWrapper>
         <Header />
         <CoinsList coins={displayedCoins} />
      </HomeWrapper>
   );

};

const HomeWrapper = styled.main`
   position: relative;
   display: block;
   height: 100%;
   width: 100%;
`;