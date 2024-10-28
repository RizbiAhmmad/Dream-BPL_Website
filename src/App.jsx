// App.jsx
import Banner from "./Components/Banner";
import CardContainer from "./Components/CardContainer/CardContainer";
import Header from "./Components/Header";
import "./App.css";
import { useState } from "react";
import Footer from "./Components/Footer";
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  const [coins, setCoins] = useState(0);
  const [isActive, setIsActive] = useState({
    Card: true,
    status: "active"
  });
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleClaimFreeCredit = () => {
    setCoins((prevCoins) => prevCoins + 500000);
    toast.success('You have claimed 500,000 coins!'); 
  };

  const handleSelectedPlayer = (player) => {
    
    if (selectedPlayers.length >= 6) {
      toast.info("You can only select up to 6 players!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        transition: Bounce,
      });
      return;
    }

    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);

    if (isExist) {
      toast.info("Player is already added!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        transition: Bounce,
      });
    } else {
      setCoins((prevCoins) => {
        if (prevCoins >= player.biddingPrice) {
          setSelectedPlayers((prevSelectedPlayers) => [
            ...prevSelectedPlayers,
            player,
          ]);
          toast.success('Successful Player added', { transition: Bounce });
          return prevCoins - player.biddingPrice; 
        } else {
          toast.error("Not enough coins to select this player!", { transition: Bounce });
          return prevCoins; 
        }
      });
    }
  };

  const handleRemove = (playerId) => {
    const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);

    if (playerToRemove) {
      
      setCoins(prevCoins => prevCoins + Number(playerToRemove.biddingPrice));
      toast.info(`${playerToRemove.name} removed, your money refunded to your balance.`);
    }

    const updatedSelectedPlayers = selectedPlayers.filter(player => player.playerId !== playerId);
    setSelectedPlayers(updatedSelectedPlayers);
  };

  const handleIsActiveState = (status) => {
    if (status === "card") {
      setIsActive({
        Card: true,
        status: "Available"
      });
    } else {
      setIsActive({
        Card: false,
        status: "Selected"
      });
    }
  };

  return (
    <div>
      <Header coins={coins} />
      <Banner handleClaimFreeCredit={handleClaimFreeCredit} />
      <div className="flex1">
        <CardContainer 
          handleSelectedPlayer={handleSelectedPlayer} 
          isActive={isActive} 
          handleIsActiveState={handleIsActiveState}
          selectedPlayers={selectedPlayers} 
          handleRemove={handleRemove}
        />
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} transition={Bounce} />
    </div>
  );
};

export default App;
