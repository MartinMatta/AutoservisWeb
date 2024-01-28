import React from "react";
import HeroSection from "../Components/HeroSection";
import ServicesTextSection from "../Components/ServicesTextSection";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        title="O nás"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat purus. Suspendisse pulvinar, lorem sed semper facilisis, libero ex rhoncus nisi, commodo facilisis nulla neque non metus. Sed tincidunt nulla nec porttitor luctus. Morbi magna purus, consequat quis dui ut, gravida bibendum libero. Integer at justo est. Donec vitae justo odio."
        imgUrl="https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg"
        page="about"
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
      <InfoSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
