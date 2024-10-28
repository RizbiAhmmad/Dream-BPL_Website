/* eslint-disable react/prop-types */
// Available.jsx
import AllPlayers from '../AllPlayers/AllPlayers';

const Available = ({ handleSelectedPlayer }) => {
    return (
        <div>
            <AllPlayers handleSelectedPlayer={handleSelectedPlayer} />
        </div>
    );
};

export default Available;
