import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemon, setPokemon } from './reducers/pokemon';
import { selectId } from './reducers/id';
import PokemonCard from './components/pokemonCard.jsx';
import Loading from './components/loading';
import getPokemon from './js';
import './css/index.css';


const App = () => {
   const dispatch = useDispatch();
   let
      pokemon = useSelector(selectPokemon),
      id = useSelector(selectId);
   useEffect(() => {
      (async () => {
         const res = await getPokemon(id);
         dispatch(setPokemon(res.data));
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);
   return (
      <React.StrictMode>
         <div className='container-fluid'>
            <div className='row'>
               {
                  pokemon ?
                     <PokemonCard pokemon={pokemon} />
                     : <Loading />
               }
            </div>
         </div>
      </React.StrictMode>
   );
};


export default App;
