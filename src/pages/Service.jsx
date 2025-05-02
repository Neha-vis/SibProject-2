import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Pic1 from "../static/img/pic1.png";
import Pic2 from "../static/img/pic2.png";
import Pic3 from "../static/img/pic3.png";

const Service = () => {
  const cards = [
    { img: Pic1, title: "UNLOCK YOUR PROPERTY'S TRUE MARKET RENT", desc: "Rents change constantly, and if you haven’t checked yours recently, you might be underpricing your rental or missing out on potential equity. A valuation helps ensure you’re making the most of your investment." },
    { img: Pic2, title: "MAXIMIZE INCOME, MINIMIZE STRESS", desc: "Stop guessing and start earning what your property’s worth. We’ll show you how to increase rent the smart way, reduce vacancies, and eliminate the day-to-day chaos of DIY management. Less stress for you, more money in your pocket." },
    { img: Pic3, title: "LEVERAGE EQUITY; GROW YOUR INVESTMENT", desc: "Thinking about expanding? A valuation can show how much equity you have available to reinvest in additional properties, upgrade your current rental, or fund other opportunities without dipping into personal savings." },
    { img: Pic3, title: "LEVERAGE EQUITY; GROW YOUR INVESTMENT", desc: "Thinking about expanding? A valuation can show how much equity you have available to reinvest in additional properties, upgrade your current rental, or fund other opportunities without dipping into personal savings." },
  ];

  return (
    <div className="w-full min-h-[300px] p-6 bg-gray-100">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={50}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 rounded-lg shadow text-center   w-100 h-[380px] mb-4"> 
              <div className="w-20 h-20 overflow-hidden rounded-full mx-auto mb-4"> 
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-xl mb-4">{card.desc}</p> 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Service;
