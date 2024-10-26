/* eslint-disable react/prop-types */
// import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({player, handleSelectedPlayer}) => {
    // console.log(player);
    // console.log(handleSelectedPlayer);
    const {image, name, country, role, battingType, biddingPrice}=player;

    return (
        <div className='card1 rounded-xl p-2'>
            <img className='img rounded-xl' src={image} alt="" />
            <h1 className='font-bold'>{name}</h1>
            <div className='flex justify-between items-center'>
                <h3>{country}</h3>
                <button className='btn'>{role}</button>
            </div>
            <hr />
            <h3>Rating</h3>
            <div className='flex justify-between items-center'>
                <h3>Batting Type:</h3>
                <h3>{battingType}</h3>
            </div>

            <div className='flex justify-between items-center'>
                <h3>Price: ${biddingPrice}</h3>
                <button onClick={()=>handleSelectedPlayer(player)} className='btn'>Choose player</button>
            </div>
            

        </div>
    );

};

export default SinglePlayer;