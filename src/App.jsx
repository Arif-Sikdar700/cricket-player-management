import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import HeroSection from "./components/HeroSection";
import PlayerContiner from "./components/PlayerContiner";
import GlassyCard from "./components/GlassyCard";
import Footer from "./components/Footer";
import { Bounce, toast } from "react-toastify";
import PlayerSelected from "./components/PlayerSelected";
import ConditionalRender from "./components/ConditionalRender";

export default function App() {
  const [myCoin, setMyCoin] = useState(0);
  const handleMyCoin = () => {
    setMyCoin((prv) => prv + 1700000);
    toast.success("Creadit added you Acount", {
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
    <div className="">
      <Header myCoin={myCoin} />
      <main className="w-11/12 mx-auto ">

        <HeroSection handleMyCoin={handleMyCoin} />
        <ConditionalRender AvilavleTaka = {[myCoin, setMyCoin]}/>  
        <GlassyCard/>
      </main>
      <Footer />
    </div>
  );
}
