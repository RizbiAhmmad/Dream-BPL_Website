/* eslint-disable react/prop-types */
// CardContainer.jsx
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './CardContainer.css';

const CardContainer = ({ handleIsActiveState, isActive, handleSelectedPlayer, selectedPlayers, handleRemove }) => {
    return (
        <div>
            <div className='flex justify-end mx-5'>
    <button
        onClick={() => handleIsActiveState("card")}
        className={`btn1 ${isActive.Card ? "active" : ""}`} 
    >
        Available
    </button>
    <button
        onClick={() => handleIsActiveState("selected")}
        className={`btn1 ${!isActive.Card ? "active" : ""}`} 
    >
        Selected ({selectedPlayers.length})
    </button>
</div>


            {isActive.Card ? (
                <Available handleSelectedPlayer={handleSelectedPlayer} />
            ) : (
                <Selected handleRemove={handleRemove} selectedPlayers={selectedPlayers} />
            )}
        </div>
    );
};

export default CardContainer; 
