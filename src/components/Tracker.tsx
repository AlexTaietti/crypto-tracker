import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { CurrencyDetails } from './CurrencyDetails';

export const Tracker: React.FC = () => {

   return (
      <Router>
         <TrackerWrapper>
            <Switch>
               <Route path="/details/:coinName" component={CurrencyDetails} />
               <Route path="/" component={Home} />
            </Switch>
         </TrackerWrapper>
      </Router>
   );

};


const TrackerWrapper = styled.div`
   height: 100vh;
   width: 100%;
   background: #1D1C28;
`;