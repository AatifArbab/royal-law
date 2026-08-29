import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <WhatsAppButton />
    </>
  );
};

export default Home;