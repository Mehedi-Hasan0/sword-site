"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { weaponNftData } from "@/data";

export default function WeaponNft() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(2); // State to keep track of active slide index
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );

  const handleSlideChange = (swiper) => {
    if (swiper.realIndex === 4) {
      setActiveSlide(0);
    } else {
      setActiveSlide(swiper.realIndex + 1); // Update active slide index when slide changes
    }
    // console.log(swiper.realIndex, "index");
  };

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay, Navigation]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
      );
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }

  return (
    <section className="text-white overflow-hidden sm:pt-12 lg:pt-0 relative">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* left side dots */}
      <div className="absolute bottom-8 sm:bottom-0 left-6 sm:left-10 md:left-12 lg:left-16 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[4] w-[130px] h-[35px] opacity-30" />
      {/* right side dots */}
      <div className="absolute top-32 right-6 sm:right-10 md:right-12 lg:right-16 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[4] w-[60px] h-[96px] opacity-30" />

      <div className="main-container relative z-10">
        <div className="py-8 flex flex-col justify-center items-center">
          <Image
            src={"/assets/icons/text-top-green.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px]">
            Sword nft
          </h5>
        </div>

        {/* slider */}
        <div className=" text-black xl:px-28 2xl:px-72">
          <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            initialSlide={2}
            // modules={[Pagination]}
            className="mySwiper flex justify-center items-center"
          >
            {weaponNftData.map((data, i) => (
              <SwiperSlide
                key={i}
                className={`${
                  activeSlide === i
                    ? " max-h-[800px] 2xl:max-w-[1000px]"
                    : " max-h-[800px] 2xl:max-w-[1000px]"
                } relative`}
              >
                <div className="flex justify-center items-center">
                  {/* bg */}
                  <Image
                    src={"/assets/images/weapon/weapon-bg.png"}
                    alt=""
                    width={252}
                    height={744}
                    className={`${
                      activeSlide === i ? "block absolute" : "hidden"
                    } max-h-[600px] object-contain grayscale`}
                  />
                  <Image
                    src={"/assets/images/weapon/sparkle.png"}
                    alt=""
                    width={252}
                    height={744}
                    className={`${
                      activeSlide === i ? "block absolute opacity-20" : "hidden"
                    } max-h-[600px] object-contain grayscale`}
                  />

                  {/* sword */}
                  <Image
                    src={data.nft}
                    alt=""
                    width={490}
                    height={520}
                    className={`${
                      activeSlide === i
                        ? " opacity-100 lg:opacity-100"
                        : "opacity-100 lg:opacity-40"
                    } pt-10  min-h-[500px] md:max-w-[300px] 2xl:max-h-[800px] relative z-10 bottom-10 md:bottom-0`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* border top */}
      <div className="absolute w-[10%] h-[3px] top-0 left-0 bg-green" />
    </section>
  );
}
