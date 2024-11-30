import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Slides array using Unsplash URLs
const slides = [
  
  {
    img:"https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?w=1800",
    title: "Expert Appliance Repair",
    description: "Professional service for all major brands",
    buttonText: "Call Now: (847) 767-0547",
  },
  {
    img:"https://images.pexels.com/photos/6636290/pexels-photo-6636290.jpeg?w=1260",
    title: "Licensed & Insured Technicians",
    description: "Trusted professionals with years of experience",
    buttonText: "Call Now: (847) 767-0547",
  },
  {
    img:"  https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?w=1260",
    title: "Commercial Repair Services",
    description: "Serving businesses with minimal downtime",
    buttonText: "Call Now: (847) 767-0547",
  },
  {
    img:"https://www.lowcostappliancerepair.com/images/resource/viking-appliance-services.jpg",
    title: "24/7 Available Service",
    description: "Quick and reliable solutions, any time of day.",
    buttonText: "Call Now: (847) 767-0547",
  },
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      loop={true}
      className="h-[500px] md:h-[600px] lg:h-[700px] relative group"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
              // loading={index === 0 ? "eager" : "lazy"} // Keeps eager for the first image
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-black/50 p-10 m-10 text-white px-4 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {slide.description}
                </p>
                <a
                  href="tel:+18477670547"
                  className="inline-flex items-center font-bold bg-white text-emerald-700 px-8 py-3 rounded-md text-lg hover:bg-emerald-50 transition-colors"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
