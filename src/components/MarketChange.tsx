import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parseChange } from '../helpers/utils';
import positiveArrow from '../assets/images/green_arrow.png';
import negativeArrow from '../assets/images/red_arrow.png';

export const MarketChange: React.FC<{ change: string }> = ({ change }) => {

   const [marketDirection, setMarketDirection] = useState<number>();

   useEffect(() => {

      const direction = parseChange(change);

      setMarketDirection(direction);

   }, [change]);

   return (

      marketDirection ? //once the market change has been determined render tracker

         <MarketTracker>

            {

               marketDirection > 0 ? //render a positive traker, yay!

                  <>
                     <h1>Market is up</h1>
                     <div className='positive'>
                        <img alt='market is going up!' src={positiveArrow} />
                        <span>{change}</span>
                     </div>
                  </>

                  :

                  //render a negative traker );
                  <>
                     <h1>Market is down</h1>
                     <div className='negative'>
                        <img alt='market is down' src={negativeArrow} />
                        <span>{change}</span>
                     </div>
                  </>

            }


         </MarketTracker>

         : null //wait while loading the market's change

   );

};

const MarketTracker = styled.div`

   display:block;
   text-align: center;
   margin: 0 auto;
   margin-top: 25px;
   font-family: 'Roboto', sans-serif;
   color: #D6D5DA;

   h1{ font-size: 2.2rem; }

   div{

      &.positive{ color: #59BB6E; }

      &.negative{ color: #DB4848; }

      display: flex;
      align-items: baseline;
      justify-content: center;
      position: relative;

      img{
         width: auto;
         height: 16.5px;
         margin-right: 5px;
      }

      span{ font-size: 2.4rem; }

   }

`;