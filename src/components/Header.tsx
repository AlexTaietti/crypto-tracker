import styled from 'styled-components';
import { MarketStatus } from '../@types';
import { useCryptoApi } from '../hooks';
import { Logo } from './Logo'
import { MarketChange } from './MarketChange';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {

   const marketChange = useCryptoApi<MarketStatus>('currencies/market_change');

   return (
      <HeaderContainer>
         <Logo />
         {marketChange && <MarketChange change={marketChange.market_change_24hr} />}
         <Navigation />
      </HeaderContainer>
   );

};

const HeaderContainer = styled.header`

   height: 225px;
   width: 100%;
   padding-top: 60px;
   position: relative;
   background: #2A283D;

   @media screen and (max-height: 650px){
      padding-top: 40px;
      height: 200px;
   }

`;