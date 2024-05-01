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
import FullWidthBorder from "../shared/FullWidthBorder";

export default function WeaponNft() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(2); // State to keep track of active slide index
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 3
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
        typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 3
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
    <section className="text-white overflow-hidden sm:pt-12 lg:pt-0 relative bg-[url('/assets/images/weapon/sword-banner.webp')] bg-cover bg-no-repeat">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 w-1/2 h-full z-[2] opacity-50" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 w-1/2 h-full z-[2] opacity-30" />
      {/* left side dots */}
      <div className="absolute bottom-8 sm:bottom-0 left-6 sm:left-10 md:left-12 lg:left-16 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[4] w-[130px] h-[35px] opacity-30" />
      {/* right side dots */}
      <div className="absolute top-32 right-6 sm:right-10 md:right-12 lg:right-16 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[4] w-[60px] h-[96px] opacity-30" />

      {/* right side glow */}
      <div className="absolute top-[30%] right-0">
        <Image
          src={"/assets/images/weapon/rigthGlow.png"}
          alt=""
          width={203}
          height={203}
        />
      </div>

      {/* main container */}
      <div className="main-container relative z-10  sm:py-10">
        <div className="py-8 flex flex-col justify-center items-center">
          <Image
            src={"/assets/icons/text-top-purple.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px] text-lime">
            Swords nft
          </h5>
        </div>

        {/* slider */}
        <div className=" text-black xl:px-10 2xl:px-56">
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
                    ? " lg:max-h-[800px] 2xl:max-w-[1000px]"
                    : " lg:max-h-[800px] 2xl:max-w-[1000px]"
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
                  <div className="flex flex-col justify-center items-center">
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
                    <div
                      className={`${
                        activeSlide === i
                          ? "from-[#6103d34c]"
                          : "from-[#8f8f8f58]"
                      } bg-gradient-to-b to-transparent p-5 rounded-sm flex flex-col gap-1 text-white max-w-[350px] relative z-40 mx-7 -mt-10 sm:-mt-16 md:-mt-0 md:mx-0`}
                    >
                      <h4
                        className={`text-base lg:text-lg 2xl:text-xl font-medium ${
                          activeSlide === i ? "text-[#65FF9E]" : "text-gray-300"
                        }`}
                      >
                        {data.label}
                      </h4>
                      <p
                        className={`
                      ${
                        activeSlide === i ? "text-gray-300" : "text-gray-400"
                      } text-[10px] lg:text-xs 2xl:text-sm`}
                      >
                        {data.desc}
                      </p>
                      <div className="mt-2">
                        <h5 className="text-sm lg:text-base 2xl:text-lg ">
                          {data.title}
                        </h5>
                        <div className="flex items-center justify-between gap-5">
                          <div>
                            <p className="uppercase text-[8px] lg:text-[10px] 2xl:text-xs text-gray-500">
                              {data.slug1}
                            </p>
                            <p className="uppercase text-[10px] lg:text-xs 2xl:text-sm text-gray-300">
                              {data.sku1}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="uppercase text-[8px] lg:text-[10px] 2xl:text-xs text-gray-500">
                              {data.slug2}
                            </p>
                            <p className="uppercase text-[10px] lg:text-xs 2xl:text-sm text-gray-300">
                              {data.sku2}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-4">
                        <p className="uppercase text-[8px] lg:text-[10px] 2xl:text-xs text-gray-500">
                          Color
                        </p>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full border border-opacity-50" />
                          <div className="w-3 h-3 bg-lime-400 rounded-full border border-opacity-50 opacity-50" />
                          <div className="w-3 h-3 bg-blue-400 rounded-full border border-opacity-50 opacity-50" />
                          <div className="w-3 h-3 bg-orange-400 rounded-full border border-opacity-50 opacity-50" />
                          <div className="w-3 h-3 bg-green-400 rounded-full border border-opacity-50 opacity-50" />
                        </div>
                      </div>

                      {/* logos */}
                      <div className="flex justify-center items-center mt-6 gap-6">
                        <Image
                          src={"/assets/icons/okx.svg"}
                          alt="okx"
                          width={30}
                          height={30}
                        />
                        <p className="text-[8px] lg:text-[10px] 2xl:text-xs font-medium">
                          BNB Chain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* border top */}
      <FullWidthBorder reversed={true} />
    </section>
  );
}
