import React from "react";

const ServicesTextSection = (props) => {
  return (
    <div
      className={
        props.id % 2 === 0
          ? "w-full h-full py-[60px] md:py-0 md:mt-0 bg-gradient-to-b from-white to-[#f7f8f9]"
          : "w-full h-full py-[60px] md:py-0 md:mt-0 bg-gradient-to-t from-white to-[#f7f8f9]"
      }
    >
      <div className="w-full h-full container mx-auto px-6 md:px-16 py-[60px]">
        <div className="">
          <h2 className="text-3xl font-[sans-serif] text-[#627680] text-center">
            {props.title}
          </h2>
          <p className="pt-4 text-xl text-[#576971] font-[sans-serif] text-center">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesTextSection;
