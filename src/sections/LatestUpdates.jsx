import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";

const updates = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
];

const LatestUpdates = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-black text-white text-center" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold uppercase"
      >
        Enjoy Our Latest Updates
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slideToClickedSlide={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          slidesPerView={windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1}
          coverflowEffect={{
            rotate: 0,
            stretch: windowWidth >= 1024 ? 100 : windowWidth >= 768 ? 50 : 0,
            depth: windowWidth >= 1024 ? 300 : windowWidth >= 768 ? 200 : 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full max-w-6xl"
        >
          {updates.map((update, index) => (
            <SwiperSlide
              key={index}
              className="relative cursor-pointer flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-[700px]  mx-auto overflow-hidden rounded-lg"
              >
                <img
                  src={`images/updates/${update}`}
                  alt={update}
                  className="rounded-lg w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default LatestUpdates;
