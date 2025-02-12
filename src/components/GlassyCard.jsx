import React from "react";
import bannerShadow from "../assets/bg-shadow.png";
export default function GlassyCard() {
	return (
		<div className="relative z-50 p-6 mb-20 w-full top-[150px] ring ring-white  rounded-lg  border-[#fffffff1] h-80 bg-white/30  backdrop-blur-md ">
			<div className=" bg-gradient-to-r from-teal-50  to-yellow-100 w-full h-full rounded-xl  flex flex-col justify-center gap-5 items-center px-3">
				<h3 className="font-bold text-2xl">Subscribe to our Newsletter</h3>
				<p className="text-black opacity-100">
					Get the latest updates and news right in your inbox!
				</p>
				<form action="" className="opacity-100 space-x-3 ">
					<input
						type="email"
						placeholder="Enter Your Email"
						name=""
						id=""
						className="border outline-none py-2 px-2 md:px-8 rounded-xl placeholder:text-xs"
					/>
					<button className="bg-gradient-to-r mt-2 md:mt-0 from-red-200 via-red-300 to-yellow-200 py-2 px-2 rounded-md">
						Subcribe
					</button>
				</form>
			</div>
		</div>
	);
}
