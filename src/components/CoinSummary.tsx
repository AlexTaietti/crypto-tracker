import styled from 'styled-components';
import { formatPrice, getChange } from '../helpers/utils';
import { Coin } from '../@types';
import positiveArrow from '../assets/images/green_arrow.png';
import negativeArrow from '../assets/images/red_arrow.png';

export const CoinSummary: React.FC<{ coin: Coin }> = ({ coin }) => {

   const formattedPrice = formatPrice(coin.price);

   const coinChange = getChange(coin.change_24h);

   return (
      <Summary>
         <Info>
            <img alt='coin icon' src={coin.image_url} />
            <div className='name'>
               <span className='main-text'>{coin.name}</span>
               <span>{coin.symbol}</span>
            </div>
         </Info>
         <Performance change={coinChange}>
            <span className='main-text'>${formattedPrice}</span>
            <div><img alt='change arrow' src={coinChange > 0 ? positiveArrow : negativeArrow} /><span>{coin.change_24h}</span></div>
         </Performance>
      </Summary>
   );

};

const Summary = styled.div`

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

   span{ display: block; }

   .main-text{
      font-size: 1.6rem;
      margin-bottom: 2px;
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

const Performance = styled.div`

   text-align: right;

   img{
      height: 7px;
      margin-right: 2px;
   }

   div{
      
      display: inline-flex;
      align-items: baseline;
      color: ${(props: { change: number }) => props.change > 0 ? '#59BB6E' : '#DB4848'};

      span{ font-size: 1rem; }

   }

`;