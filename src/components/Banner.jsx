import React from "react";
import BannerBg from "../static/img/Banner.png";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 text-white space-y-6 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Orange County's Trusted Property Management Company
        </h2>
        <p className="text-base sm:text-lg max-w-xl">
          Tired of late rent, constant repair calls, or problem tenants? We
          handle it all -- so you don't have to. Let us take care of your
          property while you enjoy more income and peace of mind. Managing a
          rental doesn’t have to be stressful. At OC Pro Property Management,
          we’ll help you figure out what your property’s really worth and guide
          you on the smart moves to turn it into a solid investment.
        </p>
        <Button text="Get Free Assessment" />
      </div>

      {/* Right Content */}
      <div className="relative z-10 w-full md:w-1/2 bg-white p-6 rounded-lg shadow-xl max-w-lg mt-10 md:mt-0 sm:px-8 ">
  <h3 className="text-green-600 text-xl sm:text-2xl font-bold mb-4 ">
    Get Your Free Property Rental Assessment:
  </h3>
  <p className="text-black mb-4">
    Find out how much your property will rent for.
  </p>
  <form className="space-y-4">
    <input
      type="text"
      placeholder="First Name"
      className="w-full border border-gray-300 p-2  mb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full border border-gray-300 p-2 mb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 p-2 mb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
    />
    <textarea
      placeholder="Message"
      className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
      rows="2" 
    ></textarea>
    <Button text="Submit" type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300" />
  </form>
</div>

    </section>
  );
};

export default Banner;
