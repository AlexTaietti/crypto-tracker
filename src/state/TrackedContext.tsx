import React, { useReducer, useContext } from 'react';
import { TrackedState, Action, Coin } from '../@types';
import { useCryptoApi } from './hooks';

const TrackedContext = React.createContext<{ state: TrackedState, dispatch: React.Dispatch<Action> } | undefined>(undefined);

const trackedReducer = (state: TrackedState, action: Action): TrackedState => {

   switch (action.type) {

      case 'TRACK_COIN':
         return { tracked: [...state.tracked, action.coin] };

      case 'UPDATE_TRACKED':
         return { tracked: [...action.newCoins] };

      default: return state;

   };

};

const TrackedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   const trackedCoins = useCryptoApi<{ coins_list: Coin[] }>('/coins/list?tracked_only=true&limit=100&offset=0');

   const [trackedState, trackedDispatch] = useReducer(trackedReducer, { tracked: trackedCoins?.coins_list ? [...trackedCoins?.coins_list] : [] });

   const value = { state: trackedState, dispatch: trackedDispatch };

   return (
      <TrackedContext.Provider value={value}>
         {children}
      </TrackedContext.Provider>
   );

};

const useTracked = () => {

   const context = useContext(TrackedContext);

   if (context === undefined) throw new Error('the trackedContext must be used within a TrackedProvider');

   return context;

};

export { TrackedProvider, useTracked };