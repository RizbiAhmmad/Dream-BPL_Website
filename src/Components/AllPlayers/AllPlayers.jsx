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
        <div>
          <h1 className='font-bold'>Available Players</h1>
          {
            players.map(player=><SinglePlayer handleSelectedPlayer={handleSelectedPlayer} key={player.playerId} player={player}/>)
        }
        </div>
        
    );
};

export default AllPlayers;