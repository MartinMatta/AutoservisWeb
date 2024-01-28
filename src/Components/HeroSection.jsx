import React from "react";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
  return (
    <div className="w-full min-h-screen mt-[70px] py-[60px] md:py-0 md:mt-0 flex justify-center bg-gradient-to-t from-white via-[#d6d7d7] to-[#f7f8f9]">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 pr-0">
          <h2 className="text-4xl font-bold leading-tight mb-4 text-[#364146]">
            {props.title}
          </h2>
          <p className="text-xl mb-4 text-[#576971]">{props.text}</p>
          {props.page === "home" || props.page === "about" ? (
            <div className="">
              <Link to="/">
                <button className="bg-[#009cea] text-white rounded-md font-bold py-3 px-6 hover:scale-105">
                  Rezervácia
                </button>
              </Link>
              <Link to="/kontakt">
                <button className="bg-[#576971] text-white rounded-md font-bold ml-4 py-3 px-6 hover:scale-105">
                  Kontakt
                </button>
              </Link>
            </div>
          ) : (
            <div className="">
              <Link to="/kontakt">
                <button className="bg-[#009cea] text-white rounded-md font-bold py-3 px-6 hover:scale-105">
                  Kontakt
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <img className="w-full rounded-xl" src={props.imgUrl} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
