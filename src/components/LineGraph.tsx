import { useEffect, useState } from 'react';
import { timeParse, timeFormat } from 'd3';
import { LineChart, XAxis, YAxis, Line, ResponsiveContainer, CartesianGrid } from 'recharts'
import { formatPrice } from '../helpers/utils';
import { CoinHistory } from '../@types';

export const LineGraph: React.FC<{ timeframe: string; data: CoinHistory }> = ({ timeframe, data }) => {

   const [timeFormatString, setTimeFormatString] = useState<string>("%I %p");

   useEffect(() => {

      if (timeframe === 'D') {

         setTimeFormatString("%I %p");

      } else { setTimeFormatString("%e/%m"); }

   }, [timeframe]);

   const dateFormatterFunction = (date: string) => {

      const parser = timeParse("%Y-%m-%d %H:%M:%S");
      const formatter = timeFormat(timeFormatString);

      const parsedDate = parser(date);
      const tick = formatter(parsedDate as Date);

      return tick;

   };

   const priceFormatterFunction = (price: number) => formatPrice(price);

   return (

      data ?

         <ResponsiveContainer className='chart-container' width='95%' height={window.innerHeight <= 700 ? 200 : 250}>
            <LineChart
               style={{ width: '100%' }}
               width={300}
               height={150}
               data={data}
            >
               <CartesianGrid stroke='#3C3B48' vertical={false} />
               <XAxis minTickGap={10} tickLine={false} axisLine={false} dataKey="date_time" tickFormatter={dateFormatterFunction} />
               <YAxis tickLine={false} axisLine={false} tickCount={5} domain={['auto', 'auto']} dataKey="price" tickFormatter={priceFormatterFunction} />
               <Line dot={false} type="monotone" dataKey="price" stroke="#9694F2" />
            </LineChart>
         </ResponsiveContainer>

         :

         null

   );

};