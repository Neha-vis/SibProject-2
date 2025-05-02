import React from 'react';
import Pic1 from "../static/img/pic1.png";
import Pic2 from "../static/img/pic2.png";
import Pic3 from "../static/img/pic3.png";

const Whychoose = () => {
  const features = [
    {
      image: Pic1,
      title: '15 YEARS EXPERIENCE',
      description: 'We know how to maximize rental income, find great tenants, and keep your property running smoothly—stress-free and profitable.',
    },
    {
      image: Pic2,
      title: 'ORANGE COUNTY PROPERTY EXPERTS',
      description: 'We know the OC rental market inside and out—helping you get top dollar for your property.Specializing in property management in central and north Orange County.',
    },
    {
      image: Pic3,
      title: '24/7 SUPPORT & TRUSTED VENDORS',
      description: 'Need repairs? Our network of top-rated vendors gets the job done fast and at the best rates, keeping your property in top shape without the hassle.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose Our Property Management
        </h2>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className=" p-6 rounded-lg   ">
                 <div className="w-20 h-20 overflow-hidden rounded-full mx-auto mb-4"> 
              <img src={feature.image} alt={feature.title} className="w-full h-20 object-cover rounded-md mb-4" /> </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
