import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {

   return (
      <NavigationContainer>
         <NavLink exact to='/'>All Currencies</NavLink>
         <NavLink to='/tracked-coins'>Tracked Currencies</NavLink>
      </NavigationContainer>
   );

};

const NavigationContainer = styled.nav`

   width: 100%;
   height: auto;
   position: absolute;
   bottom: 0;
   left: 0;
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;

   a{
      display: inline-block;
      border-bottom: 1px solid #898989;
      padding: 15px 0;
      width: 50%;
      text-align: center;
      color: #898989;

      &.active{
         color: #D6D5DA;
         border-color: #D6D5DA;
      }

   }

`;