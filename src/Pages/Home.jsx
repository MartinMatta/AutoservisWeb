import React from "react";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import Footer from "../Components/Footer";
import ReservationSection from "../Components/ReservationSection";
import InfoSection from "../Components/InfoSection";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Vitajte v Autoservise MAutoservis"
        text="Sme tu, aby sme vášmu vozidlu poskytli tú najlepšiu starostlivosť.
        MAutoservis je synonymom profesionálneho autoservisu s dlhoročnou
        tradíciou a vášňou pre auta."
        imgUrl="https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg"
        page="home"
      />
      <ServicesSection />
      <ReservationSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
