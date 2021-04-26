import styled from 'styled-components';
import phoneImage from '../assets/images/phone.png';

export const DesktopRedirectView: React.FC = () => {

   return (
      <RedirectPanel>
         <div className='text'>
            <h1>sprintt<span>crypto</span></h1>
            <p>please open the app from a mobile device</p>
         </div>
         <img alt='crypto tracker preview' src={phoneImage} />
      </RedirectPanel>
   );

};

const RedirectPanel = styled.main`

   font-family: 'Varela Round', sans-serif;
   position: relative;
   display: flex;
   height: 100%;
   width: 100%;
   padding: 0 0 0 12%;
   background: #1D1C28;
   align-items: center;
   justify-content: space-evenly;

   .text{
      
      text-align: center;
      color: #C0C0C0;

      h1{
      
         font-size: 3.6rem;
         text-transform: uppercase;

         span{
            color: #FCFCFC;
         }
      
      }

      p{
         font-family: 'Roboto', sans-serif;
         font-size: 2.8rem;
      }

   }

   img{
      margin-left: -150px;
      max-width: 70%;
   }

   @media screen and (max-width: 1000px){

      flex-direction: column;
      padding: 10% 0;
      justify-content: space-evenly;

      img{ margin-left: 0; }

   }

   @media screen and (max-width: 800px){

      img{ max-width: 100%; }

   }

   @media screen and (max-width: 600px){ padding: 5%; }

`;