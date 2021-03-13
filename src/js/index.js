import axios from 'axios';


const getPokemon = id => {
   let res = null;
   const base_url = 'https://pokeapi.co/api/v2/pokemon';
   const url = `${base_url}/${id}`;
   try {
      res = axios.get(url);
   } catch (e) {
      throw e;
   }
   return res;
};

const randId = () => {
   const
      min = 1,
      max = 898;
   const randNum = ((Math.random() * max) + min);
   const id = parseInt(randNum);
   return id;
};


export default getPokemon;

export {
   randId,
};