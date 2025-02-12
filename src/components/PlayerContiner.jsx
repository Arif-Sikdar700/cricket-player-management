import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
export default function PlayerContiner({selectedPlayers}) {
    const[player, setPlayer] = useState([])

    useEffect(() => {
        fetch(`player.json`)
        .then((res)=>res.json())
        .then((data)=>setPlayer(data))
    }, []);
    return (
        <>
            <h3 className="font-bold text-xl">Available Players</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    player.map(curPlayer=>
                        {
                           return <PlayerCard key={curPlayer.playerId} selectedPlayers={selectedPlayers}  data={curPlayer}/>
                        }
                    )
                }
            </div>
        </>
    );
}
