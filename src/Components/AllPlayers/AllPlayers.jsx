/* eslint-disable react/prop-types */
// AllPlayers.jsx
import { useEffect, useState } from 'react';
import './AllPlayers.css';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const AllPlayers = ({ handleSelectedPlayer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./PlayerData.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players));
    }, []);

    return (
        <div>
            <h1 className='font-bold'>Available Players: {players.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              
                {players.map(player => (
                    <SinglePlayer 
                        key={player.playerId} 
                        player={player} 
                        handleSelectedPlayer={handleSelectedPlayer} 
                    />
                ))}
            </div>
        </div>
    );
};

export default AllPlayers;
