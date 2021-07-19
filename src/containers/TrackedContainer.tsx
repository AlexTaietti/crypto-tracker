import { useCryptoApi } from "../hooks";
import { Coin } from "../@types";
import { CoinsList } from "../components/CoinsList";

export const TrackedContainer = () => {

   const trackedCoins = useCryptoApi<{ currencies_list: Array<Coin> }>(`/currencies/list?tracked_only=true`);

   return trackedCoins?.currencies_list ? <CoinsList coins={trackedCoins.currencies_list} /> : null

};