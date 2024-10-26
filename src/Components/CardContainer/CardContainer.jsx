/* eslint-disable react/prop-types */
// import React from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './CardContainer.css'

const CardContainer = ({handleIsActiveState, isActive}) => {
    // console.log(handleIsActiveState);
    // console.log(isActive);
    return (
        <div>
            <div className='flex '>
                <button onClick={()=>handleIsActiveState("card")} className={`${isActive.Card? "btn active":"btn"}`}>Available</button>
                <button onClick={()=>handleIsActiveState("selected")} className={`${isActive.Card? "btn":"btn active"}`}>Selected</button>
               
            </div>

           {isActive.Card? <Available></Available>:<Selected></Selected>}


        </div>
    );
};

export default CardContainer;