import { useCryptoApi } from "../hooks";
import { Coin } from "../@types";
import { CoinsList } from "../components/CoinsList";

export const CurrenciesContainer = () => {

   const coins = useCryptoApi<{ currencies_list: Array<Coin> }>(`/currencies/list`);

   return coins?.currencies_list ? <CoinsList coins={coins.currencies_list} /> : null

};