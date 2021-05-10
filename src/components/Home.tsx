import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { Header } from './Header';
import { CoinsList } from './CoinsList';

export const Home: React.FC = () => {

   const tracked = useRouteMatch({ path: "/tracked-coins" }) ? true : false;

   return (
      <HomeWrapper>
         <Header />
         <CoinsList tracked={tracked} />
      </HomeWrapper>
   );

};

const HomeWrapper = styled.main`
   position: relative;
   display: block;
   height: 100%;
   width: 100%;
`;