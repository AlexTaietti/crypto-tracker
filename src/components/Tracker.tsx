import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';

export const Tracker: React.FC = () => {

   return (
      <Router>
         <TrackerWrapper>
            <Route path="/" component={Home} />
         </TrackerWrapper>
      </Router>
   );

};


const TrackerWrapper = styled.div`

   overflow: hidden;
   min-height: 100%;
   height: 100%;
   width: 100%;

`;