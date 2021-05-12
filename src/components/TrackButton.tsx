import styled from 'styled-components';

export const TrackButton: React.FC<{ tracked: boolean; handleClick: () => void }> = ({ tracked, handleClick }) => {

   return (
      <Button onClick={handleClick} className={tracked ? 'tracked' : 'default'}>
         {!tracked ? 'Add to tracked currencies list' : 'Remove from tracked currencies list'}
      </Button>
   );

};

const Button = styled.button`

   display: block;
   margin: 0 auto;
   width: 325px;
   padding: 15px 25px;
   border: none;
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   color: #FCFCFC;
   background: #686CD6;
   border-radius: 50px;
   border: 2px solid #686CD6;
   margin-bottom: 40px;

   &.tracked{ background: none; }

`;