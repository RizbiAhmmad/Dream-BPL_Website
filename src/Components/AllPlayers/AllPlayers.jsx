/* eslint-disable react/prop-types */
// import React from 'react';
import { useEffect, useState } from 'react';
import './AllPlayers.css'
import SinglePlayer from '../SinglePlayer/SinglePlayer';
const AllPlayers = ({handleSelectedPlayer}) => {

    const [players, setPlayers] = useState([]);


    useEffect(()=>{
        fetch('./PlayerData.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data.players))
    },[])

    return (
        <div >
          <h1 className='font-bold'>Available Players:{players.length} </h1>

          <div className='grid grid-cols-1 md:grid-cols-3'>
          {
            players.map(player=><SinglePlayer handleSelectedPlayer={handleSelectedPlayer} key={player.playerId} player={player}/>)
        }
          </div>

        </div>
        
    );
};

export default AllPlayers;