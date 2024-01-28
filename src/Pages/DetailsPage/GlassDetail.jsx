import React from "react";
import HeroSection from "../../Components/HeroSection";
import ServicesTextSection from "../../Components/ServicesTextSection";
import Footer from "../../Components/Footer";
import ReservationSection from "../../Components/ReservationSection";

const GlassDetail = () => {
  return (
    <div>
      <HeroSection
        title="Sklá vozidla"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus. Sed tincidunt nulla nec porttitor luctus. Morbi magna purus, consequat quis dui ut, gravida bibendum libero. Integer at justo est. Donec vitae justo odio."
        imgUrl="https://www.shutterstock.com/image-photo/car-windshield-brushes-concept-cleaning-600nw-2126596625.jpg"
      />
      <ServicesTextSection
        id={0}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus. Sed tincidunt nulla nec porttitor luctus. Morbi magna purus, consequat quis dui ut, gravida bibendum libero. Integer at justo est. Donec vitae justo odio."
      />
      <ServicesTextSection
        id={1}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus. Sed tincidunt nulla nec porttitor luctus. Morbi magna purus, consequat quis dui ut, gravida bibendum libero. Integer at justo est. Donec vitae justo odio."
      />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default GlassDetail;
