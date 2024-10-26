import AllPlayers from "./Components/AllPlayers/AllPlayers";
import Banner from "./Components/Banner";
import CardContainer from "./Components/CardContainer/CardContainer";
import Header from "./Components/Header";
import "./App.css"
import { useState } from "react";
import Footer from "./Components/Footer";
const App = () => {

  const [isActive, setIsActive] = useState({
    Card: true,
    // isCardContainerActive: false,
    status: "active"
  })


  const [selctedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    // console.log(player);

    const isexist = selctedPlayers.find((p) => p.id === player.playerId);
    if(isexist){
      // console.log("Agee theke ase");
      alert ("R add kora jabe na")
    }

    else{
      const newPlayers = [...selctedPlayers,player]
      // console.log(newPlayers);
      setSelectedPlayers(newPlayers)
    }

    // console.log(isexist);

   
  }
  console.log(selctedPlayers);

















  
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
      <Header/>

      {/* Banner */}

      <Banner/>

    <div className="flex1 ">
      
    <AllPlayers handleSelectedPlayer={handleSelectedPlayer}></AllPlayers>

    <CardContainer isActive={isActive} handleIsActiveState = {handleIsActiveState}></CardContainer>

    </div>

    <Footer></Footer>

    </div>
  );
};

export default App;