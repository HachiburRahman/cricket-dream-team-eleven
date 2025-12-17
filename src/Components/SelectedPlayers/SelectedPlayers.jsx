import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
    // console.log(purchasedPlayers);
    return (
        <div className='max-w-300 mx-auto mb-70'>
            {
                purchasedPlayers.map((purchasedPlayer,index)=><SelectedPlayerCard purchasedPlayer={purchasedPlayer} key={index} removePlayer={removePlayer }></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;