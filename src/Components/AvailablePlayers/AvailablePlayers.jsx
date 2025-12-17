import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ promisePlayers,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers }) => {
  const availablePlayers = use(promisePlayers);
  // console.log(availablePlayers);
  return (
    <div className="max-w-300 mx-auto grid grid-cols-3 gap-3">
      {availablePlayers.map((player,index) => <PlayerCard key={index} player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} ></PlayerCard>)}
    </div>
  );
};

export default AvailablePlayers;
