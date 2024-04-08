"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import WhitelistButton from "../shared/WhitelistButton";
import FullWidthBorder from "../shared/FullWidthBorder";

export default function Media() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.9 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };
  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/weapon/sword-banner.webp')] bg-cover bg-no-repeat sm:pb-8 relative sm:mt-8">
      {/* glow */}
      <div className="absolute top-[30%] left-0 z-10">
        <Image
          src={"/assets/icons/layer-3.svg"}
          alt=""
          width={191}
          height={197}
        />
      </div>
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 w-1/2 h-full z-[2] opacity-50" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 w-1/2 h-full z-[2] opacity-30" />
      {/* main content */}
      <div className="main-container">
        <motion.div
          className="py-10 flex flex-col justify-center items-center"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <Image
            src={"/assets/icons/text-top-purple.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[8px]">
            Media
          </h5>
        </motion.div>

        <motion.div
          className="bg-[url('/assets/icons/frame.svg')] bg-contain bg-no-repeat w-full sm:min-h-[600px] sm:mt-4 md:mt-6 lg:mt-8 p-4 sm:px-8 sm:py-10 lg:px-20 pb-10 relative 2xl:w-[70%] mx-auto z-20"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <Image
            src={"/assets/images/media-1.png"}
            alt="meadi1"
            width={1300}
            height={495}
            className="w-full"
          />

          <div className="mt-5 grid grid-cols-3 items-center gap-5 w-full">
            <Image
              src={"/assets/images/media-2.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in"
            />
            <Image
              src={"/assets/images/media-3.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer  transition-all duration-300 ease-in"
            />
            <Image
              src={"/assets/images/media-4.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in"
            />
          </div>

          {/* footer btn */}
          {/* white list button */}
          <div className="mt-7 flex justify-center">
            {/* white list btn */}
            <WhitelistButton isFullWidth={false} bgColor="bg-[#65FF9E]" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 flex flex-row justify-between w-full h-[3px] z-20">
        <FullWidthBorder />
      </div>
    </section>
  );
}

const whiteListBtn = [
  {
    textLabel: "whitelist now",
    bgColor: "#00FF00",
    textSize: "text-sm lg:text-base 2xl:text-xl ",
    innerBtnPadding: "px-10 h-8",
    bgVariantType: "#232323",
    hoverTextColor: "#ffffff",
    elementColor: "#ffffff",
    hoverElementColor: "#FFD026",
    showFullLines: true,
  },
];
