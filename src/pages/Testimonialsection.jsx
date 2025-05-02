import React from 'react';
import { Star } from 'lucide-react';
import TestBg from "../static/img/test.png";

const testimonials = [
  {
    content: "We live 3000 miles from our property in Orange County, so quality management is a must. OC Pro has excelled at taking care of the property and keeping it rented. Highly recommended!",
    author: "Jud S.",
    rating: 5
  },
  {
    content: "OC Pro Property Management has successfully managed my property for over 7 years. Their performance rates an A++. With excellent tenant screening, they have provided me with full occupancy at market rental rates.",
    author: "Robert S.",
    rating: 5
  },
  {
    content: "OC Pro Prop. Management is a great company to work with. I have no worries about my property being taken care of while I'm out of state. Mitch is up front & very organized with his business & has a great staff of people with him to help with all communication & details needed.",
    author: "Todd F.",
    rating: 5
  },
  {
    content: "Mitch and his staff have managed our properties for more than 5 years. They are honest, trustworthy, very responsive to our tenants and to us, if we have any questions. From our experience with previous managers, OC Pro/Mitch are far and away the very best.",
    author: "Nancy R.",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section
      className="py-16 md:py-20 relative"
      style={{
        backgroundImage: `url(${TestBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            STRESS-FREE PROPERTY MANAGEMENT:
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Just Ask Our Clients
          </h3>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-orange-400" />
                ))}
              </div>

              <p className="text-white text-lg mb-4 font-light">"{testimonial.content}"</p>
              <footer>
                <p className="text-green-400 font-semibold">{testimonial.author}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
