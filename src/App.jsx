
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Banner from './Components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
import footerLogo from "./assets/logo-footer.png";




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

    {/* <!-- Newsletter Section --> */}
<section class="bg-[#0b0f1a] py-20 max-w-300 mx-auto">
  <div class="max-w-5xl mx-auto px-6">
    <div
  class="relative -mt-48 bg-linear-to-r from-blue-100 via-white to-orange-100 rounded-2xl p-10 text-center shadow-lg"
>

      <h2 class="text-2xl font-bold text-gray-900">
        Subscribe to our Newsletter
      </h2>
      <p class="text-gray-600 mt-2">
        Get the latest updates and news right in your inbox!
      </p>

      <div class="mt-6 flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          class="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          class="px-6 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 font-semibold text-black"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>

{/* <!-- Footer --> */}
<footer class="bg-[#050914] text-gray-400 pt-20 pb-6 max-w-300 mx-auto">
  <div class="max-w-6xl mx-auto px-6">

    {/* <!-- Top Grid --> */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

      {/* <!-- About --> */}
      <div>
        <h3 class="text-white font-semibold mb-3">About Us</h3>
        <p class="text-sm">
          We are a passionate team dedicated to providing the best services to
          our customers.
        </p>
      </div>

      {/* <!-- Logo + Links --> */}
      <div class="flex flex-col items-center">
        <img
          src={footerLogo}
          alt="Cricket Logo"
          class="w-16 mb-3"
        />
        <h3 class="text-white font-semibold mb-3">Quick Links</h3>
        <ul class="space-y-1 text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <!-- Subscribe --> */}
      <div>
        <h3 class="text-white font-semibold mb-3">Subscribe</h3>
        <p class="text-sm mb-3">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div class="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
          />
          <button
            class="px-4 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 font-semibold text-black"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Bottom --> */}
    <div class="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
      ©2025 Your Company All Rights Reserved.
    </div>

  </div>
</footer>


    <ToastContainer />
   
    </>
  )
}

export default App
