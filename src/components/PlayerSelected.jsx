import React from 'react';

import PlayerSelectCard from './PlayerSelectCard';

export default function PlayerSelected({ setIsTrue, selectedPlayer, setSelectedPlayer }) {
  console.log(selectedPlayer)
  const handleDelete = (delCurPlayer)=>{
    const filterData = selectedPlayer.filter(data=> {
      return data.playerId !== delCurPlayer.playerId
    })
    
    setSelectedPlayer( filterData)
  }
  return (
    <>
      <h3 className='font-bold text-xl mb-5'>Selected Players({selectedPlayer.length} / 6)</h3>
      <div className='flex flex-col gap-4 '>
        {
          selectedPlayer.map(curPlayer => <PlayerSelectCard key={curPlayer.playerId} curPlayer={curPlayer} handleDelete={handleDelete}/>)
        }
      </div>
      <div>
        <button className='bg-yellowColors btn mt-8'
          onClick={() => setIsTrue(true)}
        >Add More Player
        </button>
      </div>
    </>
  );
}
