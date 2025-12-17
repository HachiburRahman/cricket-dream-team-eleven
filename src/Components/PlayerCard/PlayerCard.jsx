import React, { useState } from 'react';
import PlayerIcon from "../../assets/PlayerIcon.png";
import CountryFlag from "../../assets/CountryLogo.png";


const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {
    
    const [isSelected,setIsSelected]=useState(false);

    const handleSelectedPlayer=(playerData)=>{
        if(availableBalance<playerData.price)
        {
         alert("No Sufficient Balance");
         return
        }
        else{
           
            setIsSelected(true);
        setAvailableBalance(availableBalance-playerData.price)
        }
        setPurchasedPlayers([...purchasedPlayers,playerData])
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img src={player.image} alt="Shoes" className="w-75 h-87.5 object-cover"/>
          </figure>
          <div className="flex mt-2 items-center">
            <img src={PlayerIcon} alt="" className="w-4 h-4 object-cover mr-2" />
            <h3 className="font-bold">{player.name}</h3>
          </div>

          <div className="mt-2 flex justify-between items-center">
           <div className="flex ">
            <img src={CountryFlag} alt=""className="mr-2" />
            <p>{player.country}</p>
           </div>
           <button className="btn">{player.playingStyle}</button>
          </div>
          <hr className="mt-2 border-t border-gray-200"/>

          <div className="flex justify-between">
            <h3 className="font-bold">Rating</h3>
            <span className="font-bold">{player.rating}</span>
          </div>

          <div className="flex justify-between mt-2">
            <p>Playing-Style</p>
            <p>{player.playingStyle}</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex">
            <p className="mr-2">Price</p>
            $ <span>{player.price}</span>
          </div>
          <button disabled={isSelected} onClick={() => handleSelectedPlayer(player)} className="btn">{isSelected?"Selected":"Choose Player"}</button>
          </div>


        </div>
    );
};

export default PlayerCard;