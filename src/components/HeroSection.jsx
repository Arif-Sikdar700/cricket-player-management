import React from "react";
import bannerShadow from "../assets/bg-shadow.png";
import bannerMain from "../assets/banner-main.png";

export default function HeroSection({handleMyCoin}) {
	return (
		<div
			className="py-10 my-4 bg-black rounded-2xl flex flex-col justify-center items-center space-y-4"
			style={{ backgroundImage: `url(${bannerShadow})` }}
		>
			<img src={bannerMain} alt="" />
			<h1 className="text-white md:text-3xl text-center">
				Assemble Your Ultimate Dream 11 Cricket Team
			</h1>
			<p className="md:text-2xl text-gray-500 text-center">Beyond Boundaries Beyond Limits</p>
            <button className=  "btn rounded-lg bg-yellowColors  outline outline-offset-4  outline-yellowColors" onClick={()=>{handleMyCoin()}}>
                <h3 className="text-xl">Claim Free Credit</h3>
            </button>
		</div>
	);
}
