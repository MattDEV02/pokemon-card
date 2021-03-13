import React from 'react';
import Button from './components/button';
import Stat from './components/stat';
import './css/card/index.css';


const PokemonCard = props => {
   const pokemon = props.pokemon;
   console.log(pokemon);
   return (
      <React.StrictMode>
         <div className='row justify-content-center mt-3'>
            <Button />
            <div className='col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3'>
               <div className='card ps-3 pe-3'>
                  <div className='row'>
                     <img
                        className='card-img-top img-fluid'
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        title={pokemon.name}
                     />
                  </div>
                  <div className='card-body text-capitalize mb-2'>
                     <h1 className='card-title'>
                        {pokemon.name}
                     </h1>
                     <h3 className='card-subtitle'>
                        {
                           pokemon.types.map(t => `${t.type.name} `)
                        }
                     </h3>
                     <p className='card-text'>
                        {
                           `Weight: ${pokemon.weight}KG | Height: ${pokemon.height}M`
                        }
                     </p>
                     <ul className='list-group list-group-flush'>
                        {
                           pokemon.stats.map(s =>
                              <Stat s={s} key={s.stat.name} />
                           )
                        }
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default PokemonCard;