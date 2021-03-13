import React from 'react';


const Stat = props => {
   const s = props.s;
   return (
      <React.StrictMode>
         <li className='list-group-item list-group-item-info'>
            {`${s.stat.name}: ${s.base_stat}`}
         </li>
      </React.StrictMode>
   );
};


export default Stat;