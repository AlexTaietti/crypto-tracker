import { useState } from 'react';
import { DesktopRedirectView, Tracker } from './components';

const MOBILE_THRESHOLD = 768;

export const Crypto: React.FC = () => {

   const [mobile] = useState(window.innerWidth < MOBILE_THRESHOLD);

   return (

      mobile ? <Tracker /> : <DesktopRedirectView />

   );

};