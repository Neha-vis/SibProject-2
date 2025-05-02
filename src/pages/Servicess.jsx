import React from "react";
import { CheckCircle } from "lucide-react";

const Servicess = () => {
  const benefits = [
    {
      title: "You Prefer Hands-Off Management and Full Transparency",
      description:
        "OC Pro Property Management handle everything while keeping you informed with real-time updates and financial reports.",
    },
    {
      title: "You Want a Team That Treats Your Property Like Their Own",
      description:
        "OC Pro Property Management's local expertise and dedicated service ensure your investment is in the best hands.",
    },
    {
      title: "You Need Reliable Tenants Who Will Pay on Time",
      description:
        "OC Pro Property Management has a thorough screening process to help ensure responsible renters treat your property with care.",
    },
    {
      title: "You Want Higher Rental Income with Less Stress",
      description:
        "OC Pro Property Management maximizes your rental value while handling all the details, from tenant screening to maintenance.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
        OC PRO PROPERTY MANAGEMENT SERVICE IS THE RIGHT CHOICE IF:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4   "
            >
              <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-500 text-white rounded-full p-3">

                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicess;
