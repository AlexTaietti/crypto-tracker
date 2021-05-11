import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Coin } from '../@types';
import { Logo } from './Logo';
import { PerformanceIndicator } from './PerformanceIndicator';
import backArrow from '../assets/images/back_arrow.png';

export const DetailsHeader: React.FC<{ coinData: Coin }> = ({ coinData }) => {

   return (
      <Header>
         <Logo />
         <Link to='/'>
            <img alt='back to home' src={backArrow} />
         </Link>
         <CoinName>{coinData.name}<span>{coinData.symbol}</span></CoinName>
         <PerformanceIndicator price={coinData.price} change={coinData.change_24h} />
      </Header>
   );

};

const Header = styled.header`
   
   padding-top: 60px;
   position: relative;
   width: 100%;
   display: block;

   a{
      position: absolute;
      top: 60px;
      left: 30px;
      z-index: 1996;
   }

   .performance{
      
      margin-top: 35px;
      text-align: center;
      font-family: 'Roboto', sans-serif;

      .price{
         font-size: 3.4rem;
         color: #D6D5DA;
         margin-right: 23px;
      }

      .change{

         img{
            height: 18px;
            margin-right: 5px;
         }

         display: inline-flex;
         align-items: baseline;
         font-size: 2.4rem;
      
      }
   }

`;

const CoinName = styled.p`

   margin-top: 40px;
   text-align: center;
   font-size: 2.8rem;
   color: #D6D5DA;
   font-family: 'Roboto', sans-serif;

   span{
      margin-left: 12px;
      color: #8987A0;
      font-size: 1.8rem;
   }

`;