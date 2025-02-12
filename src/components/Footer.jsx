import React from "react";
import foterIcon from "../assets/logo-footer.png";

export default function Footer() {
    return (
        <footer className="bg-footerColors py-10   ">
            <div className="w-11/12 mx-auto text-white   flex space-y-8 flex-col ">
                <figure className="flex justify-center mt-20">
                    <img src={foterIcon} alt="" />
                </figure>
                <div className="grid grid-cols-1 gap-4 md:gap-0  md:grid-cols-3 justify-items-center">
                    <div className="space-y-4 justify-self-start">
                        <h3 className="font-bold">About Us</h3>
                        <p className="font-light text-xs opacity-45">
                            We are a passionate team <br /> dedicated to providing the best <br /> services to
                            our customers.
                        </p>
                    </div>
                    <ul className="space-y-4 md:list-disc md:justify-self-center justify-self-start ">
                        <h3 className="font-bold  ">Quick Link</h3>
                        <li className="font-light text-xs opacity-45">Home</li>
                        <li className="font-light text-xs opacity-45">Services</li>
                        <li className="font-light text-xs opacity-45">About</li>
                        <li className="font-light text-xs opacity-45">Contract</li>
                    </ul>
                    <div className="space-y-4 md:justify-self-end justify-self-start">
                        <h3 className="font-bold">Subscribe</h3>
                        <p className="font-light text-xs opacity-45">Subscribe to our newsletter for the <br />latest updates.</p>
                        <form action="" className="flex ">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="w-2/3 text-black border-none outline-none font-extralight placeholder:text-[14px] px-3 rounded-s-xl placeholder:font-semibold" />
                            <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 py-2 px-2 rounded-e-xl text-[16px]">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
