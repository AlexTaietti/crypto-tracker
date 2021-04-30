import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

export const Tracker: React.FC = () => {

   return (
      <Router>
         <TrackerWrapper>
            <h1>sprintt<span>crypto</span></h1>
         </TrackerWrapper>
      </Router>
   );

};


const TrackerWrapper = styled.div`

   overflow: hidden;
   min-height: 100%;
   height: 100%;
   width: 100%;
   background: #1D1C28;

   h1{

      font-family: 'Varela Round', sans-serif;
      text-align: center;
      text-transform: uppercase;
      margin-top: 60px;
      font-size: 1.6rem;
      color: #C0C0C0;

      span{ color: #FCFCFC; }

   }

`;