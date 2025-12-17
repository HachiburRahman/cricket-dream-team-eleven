
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Banner from './Components/Banner/Banner'




const fetchPlayers= async()=>{
  const res=await fetch("/Players.json")
  return res.json();
}

const promisePlayers=fetchPlayers();
function App() {
 
const [toggle,setToggle]=useState(true);

const [availableBalance,setAvailableBalance]=useState(500000)

const [purchasedPlayers,setPurchasedPlayers]=useState([]);

const removePlayer=(p)=>{

  const filteredPlayer=purchasedPlayers.filter(ply=>ply.name!==p.name);
  setPurchasedPlayers(filteredPlayer);
  setAvailableBalance(availableBalance+p.price)
  // console.log(filteredPlayer);
  
}

//  console.log(purchasedPlayers);
  return (
    <>
    <Navbar availableBalance={availableBalance}></Navbar>
    <Banner></Banner>



    <div className='flex justify-between max-w-300 mx-auto m-4 p-4 items-center'>
      <h2 className='font-bold text-2xl'>{toggle?"Available Players":`Selected Player (${purchasedPlayers.length}/6)`}</h2>
      <div className='border-2 border-gray-200 rounded-2xl '>
        <button onClick={()=>setToggle(true)} className={`py-2 px-4 ${toggle===true &&" bg-amber-200 "}rounded-l-2xl`}>Available</button>
        <button onClick={()=>setToggle(false)} className={` py-2 px-4 rounded-r-2xl ${toggle===false &&" bg-amber-200 "}`}>Selected({purchasedPlayers.length})</button>
      </div>
    </div>
    
    {
      toggle===true?<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <AvailablePlayers promisePlayers={promisePlayers} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} ></AvailablePlayers>
    </Suspense>: <SelectedPlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
    }

    
   
    </>
  )
}

export default App
