import {
   createSlice
} from '@reduxjs/toolkit';


const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState: {
      value: null
   },
   reducers: {
      setPokemon: (state, action) => {
         state.value = action.payload;
      }
   }
});

const {
   setPokemon
} = pokemonSlice.actions;

const selectPokemon = state => state.pokemon.value;

const pokemonReducer = pokemonSlice.reducer;


export default pokemonReducer;

export {
   pokemonSlice,
   selectPokemon,
   setPokemon,
};