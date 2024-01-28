import React from "react";
import Air from "../assets/air-conditioning.png";
import CarOil from "../assets/car-oil.png";
import Brake from "../assets/brake.png";
import Light from "../assets/car-light.png";
import Engine from "../assets/car-engine.png";
import Diag from "../assets/diagnostic-tool.png";
import Glass from "../assets/car-windscreen.png";
import Battery from "../assets/car-battery.png";
import Tires from "../assets/tires.png";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const links = [
    {
      id: 1,
      title: "Motor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Engine,
      href: "/motor",
    },
    {
      id: 2,
      title: "Výmena oleja",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: CarOil,
      href: "/olej",
    },
    {
      id: 3,
      title: "Brzdy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Brake,
      href: "/brzdy",
    },
    {
      id: 4,
      title: "Sklá vozidla",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Glass,
      href: "/sklo",
    },
    {
      id: 5,
      title: "Elektronika",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Battery,
      href: "/elektronika",
    },
    {
      id: 6,
      title: "Diagnostika",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Diag,
      href: "/diagnostika",
    },
    {
      id: 7,
      title: "Osvetlenie",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Light,
      href: "/svetla",
    },
    {
      id: 8,
      title: "Pneumatiky",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Tires,
      href: "/pneumatiky",
    },
    {
      id: 9,
      title: "Klimatizácia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus.",
      src: Air,
      href: "/klima",
    },
  ];

  return (
    <div className="w-full h-full py-[60px] md:py-0 md:mt-0 bg-gradient-to-b from-white via-[#d6d7d7] to-[#f7f8f9]">
      <div className="w-full h-full container mx-auto px-6 md:px-16 py-[60px]">
        <div className="">
          <h2 className="text-3xl font-[sans-serif] text-[#627680] text-center">
            Služby
          </h2>
          <p className="pt-4 text-xl text-[#576971] font-[sans-serif] text-center">
            V spoločnosti MAutoservis sa zameriavame na poskytovanie komplexných
            a profesionálnych služieb pre vaše vozidlo. Vďaka nášmu tímu
            skúsených odborníkov a najmodernejšiemu vybaveniu ponúkame rozsiahle
            služby údržby a opráv.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-1 justify-evenly pt-8">
          {links.map(({ id, title, text, src, href }) => (
            <Link to={href}>
              <div
                key={id}
                className="bg-[#f7f8f9] m-2 border-1 border-[#c3c4c5] hover:scale-105"
              >
                <img
                  className="w-[80px] flex justify-center m-6 mx-auto pt-4"
                  src={src}
                  alt="/"
                />
                <h2 className="text-center font-bold p-2 text-xl text-[#576971]">
                  {title}
                </h2>
                <p className="text-center p-2 text-[#576971] pb-4">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
