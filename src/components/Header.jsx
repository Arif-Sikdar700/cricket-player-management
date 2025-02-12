import React from 'react';
import icon from "../assets/logo.png";
import coin from "../assets/Coin.png";

export default function Header({ myCoin }) {
  return (
    <header className='sticky top-0 backdrop-filter-[20px] bg-white/30 z-[1000]'>
      <div className='w-11/12 mx-auto flex justify-between py-4 '>
        <div>
          <img src={icon} className='shrink-0' alt="" />
        </div>
        <ul className='flex flex-col md:flex-row  items-center justify-center gap-8'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className='btn bg-white flex justify-center items-center'>
            {myCoin} Coins
            <img src={coin} alt="" />
          </button>
        </ul>
      </div>
    </header>
  );
}
