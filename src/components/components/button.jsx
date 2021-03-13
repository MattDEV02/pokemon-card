import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import { setId } from '../../reducers/id';
import { randId } from '../../js';
import './css/button/index.css';


const Button = () => {
   const dispatch = useDispatch();
   const id = 'btn-tooltip';
   return (
      <React.StrictMode>
         <div className='col-2 mt-5'>
            <button
               className='btn btn-primary p-2 border border-dark'
               data-tip=''
               data-for={id}
               onClick={() => dispatch(
                  setId(randId())
               )}>
               <b>
                  <i className='fas fa-sync-alt'></i>
               </b>
            </button>
            <ReactTooltip id={id} type='info' className='fw-bold'>
               New
            </ReactTooltip>
         </div>
      </React.StrictMode>
   );
};


export default Button;