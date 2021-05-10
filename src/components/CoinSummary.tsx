import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Coin } from '../@types';
import { PerformanceIndicator } from './PerformanceIndicator';

export const CoinSummary: React.FC<{ coin: Coin }> = ({ coin }) => {

   return (
      <Summary>
         <Link to={{
            pathname: `/details/${coin.name}`,
            state: { coin: coin }
         }}>
            <Info>
               <img alt='coin icon' src={coin.image_url} />
               <div className='name'>
                  <span className='main-text'>{coin.name}</span>
                  <span>{coin.symbol}</span>
               </div>
            </Info>
            <PerformanceIndicator change={coin.change_24h} price={coin.price} />
         </Link>
      </Summary>
   );

};

const Summary = styled.div`

   a{
      display: flex;
      height: 80px;
      width: 100%;
      justify-content: space-between;
      background: #2B2F39;
      border-radius: 20px; 
      padding: 25px 15px;
      font-family: 'Roboto', sans-serif;
      color: #D6D5DA;
      font-weight: 400;
   }

   span{ display: block; }

   .main-text{
      font-size: 1.6rem;
      margin-bottom: 2px;
   }

   .performance{

      text-align: right;

      .price{
         font-size: 1.6rem;
         margin-bottom: 2px;
      }

      .change{

         display: inline-flex;
         align-items: baseline;
         font-size: 1rem;
         
         img{
            height: 7px;
            margin-right: 2px;
         }

      }

   }

   &:not(:last-of-type){ margin-bottom: 15px; }

`;

const Info = styled.div`

   display: flex;
   height: 100%;
   align-items: center;

   img{
      height: 100%;
      margin-right: 10px;
   }

   span:last-of-type{ font-size: 1rem; }

`;