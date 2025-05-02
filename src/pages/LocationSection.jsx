import React from "react";

const LocationSection = () => {
  return (
    <section className="w-full mx-auto px-6">
     
      <div className="w-full h-[400px] mb-6">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4231.513272393403!2d-117.86783327445455!3d33.83700373684707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd314c6b5f6bdf%3A0xc7e071fdd556b99b!2sOrange%20CA!5e0!3m2!1sen!2sus!4v1617045229962!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>

      
      <div className="bg-[#1a1a1a] text-white py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        {[
          [
            "Orange County Property Managers",
            "Anaheim Property Managers",
            "Irvine Property Managers",
            "Yorba Linda Property Managers",
            "La Habra Property Managers",
            "Brea Property Manager",
            "Placentia Property Managers",
          ],
          [
            "Orange County Property Management",
            "Anaheim Property Management",
            "Irvine Property Management",
            "Yorba Linda Property Management",
            "La Habra Property Management",
            "Brea Property Management",
            "Placentia Property Management",
          ],
          [
            "Residential Property Management",
            "Condominium Property Management",
            "Residential Property Managers",
            "Property Management Companies",
            "Property Management Expert",
            "Property Management Firms",
            "Rental Properties Management",
          ],
          [
            "Residential Property Managers",
            "Condominium Property Managers",
            "Residential Property Managers",
            "Property Management Companies",
            "Property Managers",
            "FirmsRental Properties Managers",
            "Condo Managers Company",
          ],
        ].map((column, i) => (
          <ul key={i} className="space-y-2">
            {column.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
