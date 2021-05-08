import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';

export const Tracker: React.FC = () => {

   return (
      <Router>
         <TrackerWrapper>
            <Route path={['/', '/tracked-coins']} component={Home} />
         </TrackerWrapper>
      </Router>
   );

};


const TrackerWrapper = styled.div`

   min-height: 100%;
   width: 100%;
   background: #1D1C28;

`;