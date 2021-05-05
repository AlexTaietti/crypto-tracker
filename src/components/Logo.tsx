import styled from 'styled-components';

export const Logo: React.FC = () => {

   return <LogoLine>sprintt<span>crypto</span></LogoLine>;

};

const LogoLine = styled.h1`

   font-family: 'Varela Round', sans-serif;
   font-size: 1.6rem;
   color: #C0C0C0;
   text-align: center;
   text-transform: uppercase;

   span{ color: #FCFCFC; }

`;