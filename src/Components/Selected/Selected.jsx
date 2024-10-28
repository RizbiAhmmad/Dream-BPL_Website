/* eslint-disable react/prop-types */
// Selected.jsx
import './Selected.css';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ selectedPlayers, handleRemove }) => {
    return (
        <div>
            <h2>Selected Players: {selectedPlayers.length}/6</h2>

            {selectedPlayers.length > 0 ? (
                selectedPlayers.map((player) => (
                    <div key={player.playerId} className="selected-player-card flex gap-10">
                        <img className="w-20 h-20 rounded-md mr-5" src={player.image} alt={player.name} />
                        <div className='py-3'>
                            <h3>{player.name}</h3>
                            <button className=''>Role: {player.role}</button>
                            <p>Batting Type: {player.battingType}</p>
                            <p>Price: ${player.biddingPrice}</p>
                        </div>
                        <div>
                            <MdDeleteForever
                                onClick={() => { handleRemove(player.playerId) }}
                                className='text-3xl text-red-500 cursor-pointer' />
                        </div>
                    </div>
                ))
            ) : (
                <p>No players selected</p>
            )}
        </div>
    );
};

export default Selected;
