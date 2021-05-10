export type MarketStatus = { market_change_24hr: string; };

export type Coin = {
   "change_24h": string;
   "coin_id": number;
   "image_url": string;
   "name": string;
   "price": number;
   "symbol": string;
   "volume_24h_mil": number;
};

export interface CoinDetailsLocation {
   coin: Coin;
}