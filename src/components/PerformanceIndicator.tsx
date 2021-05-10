import { formatPrice, getChange } from '../helpers/utils';
import positiveArrow from '../assets/images/green_arrow.png';
import negativeArrow from '../assets/images/red_arrow.png';

export const PerformanceIndicator: React.FC<{ price: number; change: string }> = ({ price, change }) => {

   const formattedPrice = formatPrice(price);

   const direction = getChange(change);

   return (
      <div className='performance'>
         <span className='price'>${formattedPrice}</span>
         <div className='change' style={{ color: direction > 0 ? '#59BB6E' : '#DB4848' }}><img alt='change arrow' src={direction > 0 ? positiveArrow : negativeArrow} /><span>{change}</span></div>
      </div>
   );

};