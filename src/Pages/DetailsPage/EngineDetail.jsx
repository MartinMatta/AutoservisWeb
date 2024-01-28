import React from "react";
import ReservationSection from "../../Components/ReservationSection";
import HeroSection from "../../Components/HeroSection";
import ServicesTextSection from "../../Components/ServicesTextSection";
import Footer from "../../Components/Footer";

const EngineDetail = () => {
  return (
    <div>
      <HeroSection
        title="Motor"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus. Sed tincidunt nulla nec porttitor luctus. Morbi magna purus, consequat quis dui ut, gravida bibendum libero. Integer at justo est. Donec vitae justo odio."
        imgUrl="https://scottsfortcollinsauto.com/wp-content/uploads/CarEngine2.jpg"
        page="engine"
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

export default EngineDetail;
