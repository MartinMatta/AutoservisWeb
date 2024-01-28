import React from "react";

const ReservationSection = () => {
  return (
    <div className="w-full h-full container mx-auto px-6 md:px-16 bg-[#f7f8f9] py-[80px] m-12">
      <div className="w-full h-full bg-[#f7f8f9] flex flex-col md:flex-row justify-between items-center">
        <div className="md:2/3">
          <h2 className="text-3xl font-[sans-serif] text-[#364146] text-center md:text-left">
            Rezervovat online
          </h2>
          <p className="pt-4 text text-[#576971] font-[sans-serif] md:pr-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat
            purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex
            rhoncus nisi, commodo facilisis nulla neque non metus.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-16 md:mt-0">
          <button className="bg-[#009cea] rounded-md text-white font-bold py-3 px-6 hover:scale-105">
            Rezervacia
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;
