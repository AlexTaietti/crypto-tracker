import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';
import { CurrencyDetails } from './CurrencyDetails';

export const Tracker: React.FC = () => {

   return (
      <Router>
         <TrackerWrapper>
            <Route exact path={["/", "/tracked-coins"]} component={Home} />
            <Route path="/details/:coinName" component={CurrencyDetails} />
         </TrackerWrapper>
      </Router>
   );

};


const TrackerWrapper = styled.div`
   min-height: 100%;
   width: 100%;
   background: #1D1C28;
`;