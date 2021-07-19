import styled from 'styled-components';
import { Header } from './Header';
import { Route, Switch } from 'react-router-dom';
import { TrackedContainer } from '../containers/TrackedContainer';
import { CurrenciesContainer } from '../containers/CurrenciesContainer';

export const Home: React.FC = () => {

   return (
      <HomeWrapper>
         <Header />
         <Switch>
            <Route path="/tracked-coins" component={TrackedContainer} />
            <Route path="/" component={CurrenciesContainer} />
         </Switch>
      </HomeWrapper>
   );

};

const HomeWrapper = styled.main`
   position: relative;
   display: block;
   height: 100%;
   width: 100%;
`;