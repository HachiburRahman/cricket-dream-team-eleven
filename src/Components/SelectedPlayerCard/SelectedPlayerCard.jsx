import React from 'react';
import DeleteLogo from "../../assets/DeleteLogo.png";

const SelectedPlayerCard = ({purchasedPlayer,removePlayer}) => {
    return (
        <div className=''>
            <div className='max-w-300 mx-auto border-2 border-gray-300 h-18  flex justify-between items-center rounded-2xl mt-3 '>
            <div className='flex items-center gap-2'>
                <img className='h-15 w-15 object-cover ml-2 rounded-2xl' src={purchasedPlayer.image} alt="" />
            <div>
                <h3 className='font-bold'>{purchasedPlayer.name}</h3>
                <p className='font-light text-sm text-gray-500'>{purchasedPlayer.playingStyle}</p>
            </div>
            </div>
           <button onClick={()=>removePlayer(purchasedPlayer)} className=''> <img className='mr-5' src={DeleteLogo} alt="" /></button>
            
        </div>
        </div>
    );
};

export default SelectedPlayerCard;