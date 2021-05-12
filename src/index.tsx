import React from 'react';
import ReactDOM from 'react-dom';
import { Crypto } from './Crypto';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   *, *::before, *::after{
      box-sizing: border-box;
      position: relative;
      margin: 0;
      padding: 0;
   }

   a{
      color: inherit;
      text-decoration: none;
   }
   
   html{ font-size: 10px; }
   
   ul, ol{ list-style-type: none; }

`;

ReactDOM.render(
   <React.StrictMode>
      <GlobalStyle />
      <Crypto />
   </React.StrictMode>,
   document.getElementById('root')
);
