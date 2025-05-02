import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="py-16 px-6 sm:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 max-w-4xl leading-tight mx-auto mb-4">
          Stress-Free <span className="text-orange-600">Property Management for Orange County Rental Property</span>  Owners & Investors!
        </h2>
        <p className="text-sm sm:text-xl text-gray-600 max-w-5xl mx-auto">
          One of the Leading Property Managers In Southern California. We’re setting a high standard for rental property management in Orange County through services designed to exceed your expectations. At OC Pro Property Management, client satisfaction isn’t just a promise—it’s a core part of how we operate. Our team understands the rental trends in Southern California and how important it is to set the right rental price. Request a free rental analysis of your investment property. A well-priced property attracts better tenants and can help reduce vacancy time. With our comparative market research, we’ll help you land on an appropriate rent that’s competitive and profitable. We help drive demand for your Orange County rental property right from the start—by making sure your rent is priced just right.
        </p>
        
        <div className="mt-8">
          <Button text="Get Free Assessment" />
        </div>
      </div>
    </section>
  );
};

export default About;
