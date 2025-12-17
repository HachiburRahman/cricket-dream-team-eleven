import React from 'react';
import navImg from "../../assets/logo.png";
import Coin from "../../assets/dollar-1.png";

const Navbar = ({availableBalance}) => {
    return (
       <div className="navbar max-w-300 mx-auto">
  <div className="flex-1">
    <a className=" text-xl">
     <img  className="h-16" src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center">
   <span className='mr-1'>{availableBalance}</span>
   <span className='mr-1'>Coin</span>
   <img src={Coin} alt="" />
  </div>
</div>
    );
};

export default Navbar;