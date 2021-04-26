import { useState, useEffect } from 'react';
import { DesktopRedirectView } from './components';

const MOBILE_THRESHOLD = 415;

export const Crypto: React.FC = () => {

   const [mobile, setMobile] = useState(false);

   useEffect(() => {

      if (window.innerWidth < MOBILE_THRESHOLD) setMobile(true);

   }, []);

   return (

      mobile ? <h1>CrYpT0 TrAcK3r</h1> : <DesktopRedirectView />

   );

};