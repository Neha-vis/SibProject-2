import React from 'react';
import { Check } from 'lucide-react';

const Servicess = () => {
  const benefits = [
    {
      title: "You Prefer Hands-Off Management and Full Transparency",
      description: "OC Pro Property Management handles everything while keeping you informed with real-time updates and financial reports.",
      icon: <Check className="h-4 w-4 text-white" />
    },
    {
      title: "You Want a Team That Treats Your Property Like Their Own",
      description: "OC Pro Property Management's local expertise and dedicated service ensure your investment is in the best hands.",
      icon: <Check className="h-4 w-4 text-white" />
    },
    {
      title: "You Need Reliable Tenants Who Will Pay on Time",
      description: "OC Pro Property Management has a thorough screening process to help ensure responsible renters treat your property with care.",
      icon: <Check className="h-4 w-4 text-white" />
    },
    {
      title: "You Want Higher Rental Income with Less Stress",
      description: "OC Pro Property Management maximizes your rental value while handling all the details, from tenant screening to maintenance.",
      icon: <Check className="h-4 w-4 text-white" />
    },
  ];

  return (
    <section className="py-12 px-4 md:py-16 lg:py-20 bg-gray-100">
      <div className="mx-auto max-w-6xl">
       
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-22 text-gray-800">
          OC PRO PROPERTY MANAGEMENT SERVICE IS THE RIGHT CHOICE IF:
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-5 rounded-full bg-green-500 flex items-center justify-center mt-2">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicess;
