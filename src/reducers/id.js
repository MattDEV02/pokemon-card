import {
   createSlice
} from '@reduxjs/toolkit';



const idSlice = createSlice({
   name: 'id',
   initialState: {
      value: 1
   },
   reducers: {
      setId: (state, action) => {
         new Audio('./pokemon.mp3').play();
         state.value = action.payload;
      }
   }
});

const {
   setId
} = idSlice.actions;

const selectId = state => state.id.value;

const idReducer = idSlice.reducer;


export default idReducer;

export {
   idSlice,
   selectId,
   setId,
};