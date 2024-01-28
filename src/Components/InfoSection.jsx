import React from "react";

const InfoSection = () => {
  return (
    <div className="w-full h-full container mx-auto px-6 md:px-16 py-[60px] bg-[#f7f8f9]">
      <div className="">
        <p className="pt-4 text-3xl text-[#576971] font-[sans-serif] text-center">
          Prečo si vybrať práve MAutoservis?
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-1 justify-evenly pt-4">
        <div className="m-2 border-1 border-[#c3c4c5]">
          <h2 className="text-center font-bold p-2 text-5xl text-[#009cea]">
            10
          </h2>
          <p className="text-center font-bold text-xl p-2 text-[#576971]">
            rokov skúseností
          </p>
          <p className="text-center p-2 text-[#576971] pb-4">
            Autoservis MAutoservis je tu pre vás už viac ako 13 rokov, čo svedčí
            o našej kvalite.
          </p>
        </div>
        <div className="m-2 border-1 border-[#c3c4c5]">
          <h2 className="text-center font-bold p-2 text-5xl text-[#009cea]">
            15
          </h2>
          <p className="text-center font-bold text-xl p-2 text-[#576971]">
            počet zamestnancov
          </p>
          <p className="text-center p-2 text-[#576971] pb-4">
            Pre autoservis pracujú iba odborníci vo svojom obore.
          </p>
        </div>
        <div className="m-2 border-1 border-[#c3c4c5]">
          <h2 className="text-center font-bold p-2 text-5xl text-[#009cea]">
            1578
          </h2>
          <p className="text-center font-bold text-xl p-2 text-[#576971]">
            spokojných zákazníkov
          </p>
          <p className="text-center p-2 text-[#576971] pb-4">
            Denne dokážeme vyriešiť problémy s motorovým vozidlom až 30.
            zákazníkom.
          </p>
        </div>
        <div className="m-2 border-1 border-[#c3c4c5]">
          <h2 className="text-center font-bold p-2 text-5xl text-[#009cea]">
            1954
          </h2>
          <p className="text-center font-bold text-xl p-2 text-[#576971]">
            opravených vozidiel
          </p>
          <p className="text-center p-2 text-[#576971] pb-4">
            Zákazníci sa k nám radi vracajú opätovne a nechávajú nám v
            starostlivosti svoje automobily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
