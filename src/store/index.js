import {
   configureStore
} from '@reduxjs/toolkit';
import idReducer from '../reducers/id';
import pokemonReducer from '../reducers/pokemon';


const store = configureStore({
   reducer: {
      id: idReducer,
      pokemon: pokemonReducer,
   }
});


export default store;