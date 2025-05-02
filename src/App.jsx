import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Aboutus from "./pages/Aboutus";
import Service  from "./pages/Service";
import CallToAction from "./pages/CalltoAction";
import Servicess from "./pages/Servicess";
import CallToAction2 from "./pages/CallToAction2";
import Whychoose from "./pages/Whychoose";
import TestimonialSection from "./pages/Testimonialsection";
import LocationSection from "./pages/LocationSection";
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Aboutus/>
      <Service/>
      <CallToAction/>
      <Servicess/>
      <CallToAction2/>
      <Whychoose/>
      <TestimonialSection/>
      <LocationSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
