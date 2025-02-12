import React, { useState } from "react";
import PlayerSelected from "./PlayerSelected";
import PlayerContiner from "./PlayerContiner";
import { Bounce, toast } from "react-toastify";
export default function ConditionalRender({ AvilavleTaka }) {
    const [myCoin, setMyCoin] = AvilavleTaka;
    const [isTrue, setIsTrue] = useState(true);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const selectedPlayers = (PlayerData) => {
        if (selectedPlayer.length >= 6) {
            toast.warn(`You Already Selected 6 Players`);
            return;
        }

        if (PlayerData.biddingPrice > myCoin || myCoin <= 0) {
            toast.error("Not Enough Money to by this player. Calim Some Credit", {

                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

            });
            return;
        }

        const finding = selectedPlayer.find((curselectedPlayer) => {
            return curselectedPlayer.playerId == PlayerData.playerId;
        });

        if (finding) {
            toast.warn(`${PlayerData.name} already in your Squad Please Select Another Player `, {

                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

            });
            return;
        }

        const arrPlayer = [...selectedPlayer, PlayerData];
        setSelectedPlayer(arrPlayer);
        setMyCoin(myCoin - PlayerData.biddingPrice);
        toast.success(`Congrates 👏 ${PlayerData.name} is Now in your Squad`, {

            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,

        });

    };

    return (
        <>
            <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-8">
                <div></div>
                <div className="flex border gap-4 py-2 px-2 rounded-lg">
                    <button
                        className={`btn ${isTrue ? "bg-yellowColors" : ""}`}
                        onClick={() => setIsTrue(true)}
                    >
                        Available
                    </button>
                    <button
                        className={`btn ${isTrue ? "" : "bg-yellowColors"}`}
                        onClick={() => setIsTrue(false)}


                    >
                        Selected ({selectedPlayer.length})
                    </button>
                </div>
            </div>
            {isTrue ? <PlayerContiner selectedPlayers={selectedPlayers} /> : <PlayerSelected setIsTrue={setIsTrue} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />}
        </>
    );
}
