import AllPlayers from "./Components/AllPlayers/AllPlayers";
import Banner from "./Components/Banner";
import CardContainer from "./Components/CardContainer/CardContainer";
import Header from "./Components/Header";
import "./App.css"
import { useState } from "react";
import Footer from "./Components/Footer";
const App = () => {

  const [coins, setCoins] = useState(0);

  const [isActive, setIsActive] = useState({
    Card: true,
    // isCardContainerActive: false,
    status: "active"
  })

  const handleClaimFreeCredit = () => {
    setCoins(coins + 500000); 
  };



  const [selctedPlayers, setSelectedPlayers] = useState([]);

  // const handleSelectedPlayer = (player) => {
  //   const isExist = selctedPlayers.find((p) => p.playerId === player.playerId); // Changed `find` to `some`
    
  //   if (isExist) {
  //     alert("Player is already added!");
  //   } else {
  //     const newPlayers = [...selctedPlayers, player];
  //     setSelectedPlayers(newPlayers);
  //   }
  // };
  
const handleSelectedPlayer = (player) => {
  const newPlayers = [...selctedPlayers, player];
  console.log(newPlayers);
};






  
  const handleIsActiveState = (status) => {
    if (status == "card"){
      setIsActive({
        Card: true,
        
        status: "Available"
      })
    }
    else{
      setIsActive({
        Card: false,
        
        status: "Selected"
      })
    }

  }

  // console.log(isActive);

  return (
    <div>

      {/* Header */}
      <Header coins={coins}/>

      {/* Banner */}

      <Banner handleClaimFreeCredit={handleClaimFreeCredit}/>

    <div className="flex1 ">
      
    

    <CardContainer handleSelectedPlayer={handleSelectedPlayer} isActive={isActive} handleIsActiveState = {handleIsActiveState}>

    </CardContainer>

    </div>

    <Footer></Footer>

    </div>
  );
};

export default App;