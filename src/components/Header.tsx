import styled from 'styled-components';
import { Logo } from './Logo'
import { MarketChange } from './MarketChange';
import { useCryptoApi } from '../state/hooks';
import { MarketStatus } from '../@types';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {

   const marketChange = useCryptoApi<MarketStatus>('coins/market_change?n_coins=90');

   return (
      <HeaderContainer>
         <Logo />
         { marketChange && <MarketChange change={marketChange.market_change_24hr} />}
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

`;