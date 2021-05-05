import styled from 'styled-components';
import { Header } from './Header';

export const Home: React.FC = () => {

   return (
      <HomeWrapper>
         <Header />
      </HomeWrapper>
   );

};

const HomeWrapper = styled.main`

   height: 100%;
   width: 100%;
   background: #1D1C28;

`;