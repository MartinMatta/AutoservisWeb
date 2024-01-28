import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";

const ContactSection = () => {
  return (
    <div className="w-full h-fill container mx-auto px-6 md:px-16 mt-[70px] items-center py-[60px]">
      <h2 className="text-3xl font-[sans-serif] text-[#627680] text-center">
        Kontakt
      </h2>
      <p className="py-4 pb-8 text-xl text-[#576971] font-[sans-serif] text-center">
        Ďakujeme vám za váš záujem o naše služby. V prípade akýchkoľvek otázok,
        informácií alebo plánovania servisu nás prosím kontaktujte a my sa vám
        čo najskôr ozveme.
      </p>
      <div className="w-full h-full bg-[#f7f8f9] flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 p-4 md:p-8">
          <iframe
            title="maps"
            src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            class="h-full w-full min-h-[240px] rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="md:w-1/2 p-4 md:p-8 flex flex-col m-auto">
          <div className="flex flex-row items-center my-4">
            <div className="bg-[#009cea] p-4 rounded-md">
              <BsTelephoneFill color="#f7f8f9" size={32} />
            </div>
            <p className="pl-6 text-xl text-[#576971] font-[sans-serif]">
              +421 950 886 171
            </p>
          </div>
          <div className="flex flex-row items-center my-4">
            <div className="bg-[#009cea] p-4 rounded-md">
              <IoMdMail color="#f7f8f9" size={32} />
            </div>
            <p className="pl-6 text-xl text-[#576971] font-[sans-serif]">
              info@myautoservis.sk
            </p>
          </div>
          <div className="flex flex-row items-center my-4">
            <div className="bg-[#009cea] p-4 rounded-md">
              <SiGooglemaps color="#f7f8f9" size={32} />
            </div>
            <p className="pl-6 text-xl text-[#576971] font-[sans-serif]">
              Košice 09548 12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
