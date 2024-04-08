"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";
import FullWidthBorder from "../shared/FullWidthBorder";

export default function Ecosystem() {
  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
  };

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

  const buttonVariantRef = useRef(null);
  const [butttonHeight, setButttonHeight] = useState(null);

  // getting rendered navbar button height and set to a variable for positioning inner content
  useEffect(() => {
    if (buttonVariantRef.current) {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    function resizeCheck() {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [buttonVariantRef && typeof window !== "undefined" && window.innerWidth]);

  return (
    <motion.section
      className="text-white overflow-hidden bg-[url('/assets/images/mint-soon-banner.webp')] bg-cover bg-center relative"
      variants={textVariant}
      initial="initial"
      whileInView="animate"
      // viewport={{
      //   once: true,
      // }}
    >
      {/* left lines */}
      <div className="absolute bg-[url('/assets/icons/leftLines.svg')] bg-contain bg-no-repeat z-[5] w-1/2 h-full opacity-40 left-0" />
      {/* right lines */}
      <div className="absolute bg-[url('/assets/icons/rightLines.svg')] bg-contain bg-no-repeat z-[2] w-1/2 h-full opacity-40 right-0" />

      <div className="relative flex flex-col gap-10">
        <div className="pl-6 pr-6 sm:pl-10 sm:pr-10 md:pl-12 md:pr-10 lg:pr-0 lg:pl-12 relative sm:py-8 md:py-10 mx-auto flex flex-col justify-center items-center top-7 sm:top-10">
          {/* // left content */}
          <div className="mx-auto flex flex-col justify-center items-center gap-5 sm:gap-7 lg:gap-9 xl:gap-10 relative z-10">
            <div className="w-full flex flex-col gap-5 sm:gap-7 lg:gap-9 xl:gap-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center">
                Katana Inu is a{" "}
                <span className="text-lime">MMO NFT PC Game</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-[#D0D4EA] text-center max-w-[870px]">
                Check for Katana Inu Ecosystem for Renting, Staking, our
                Marketplace or for purchasing our $Kata Token:
              </p>
            </div>

            <div className="w-[260px] sm:w-[340px]">
              {mintSoonBtn.map((btn, i) => (
                <CustomButtonVariant1
                  key={btn.bgColor}
                  textLabel={btn.textLabel}
                  bgColor={btn.bgColor}
                  textSize={btn.textSize}
                  innerBtnPadding={btn.innerBtnPadding}
                  bgVariantType={btn.bgVariantType}
                  hoverTextColor={btn.hoverTextColor}
                  elementColor={btn.elementColor}
                  hoverElementColor={btn.hoverElementColor}
                  showFullLines={btn.showFullLines}
                  isFullWidth={true}
                />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-7">
              {/* katana logo */}
              {logoData.map((data, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  {/* /////////////////// BTN //////////////////// */}
                  <div className="relative p-1 min-h-[42px] min-w-[175px] lg:min-w-[210px] flex justify-center items-center">
                    {/* left lines/border */}
                    <div className=" absolute left-0 top-0 h-full min-h-[42px] w-full flex flex-col">
                      <div className="w-[1px] h-full bg-[#f1f1f1]" />
                      <div className="w-[1px] min-h-[5px] bg-transparent" />
                      <div className="w-[1px] h-full bg-[#f1f1f1]" />
                    </div>
                    {/* top line */}
                    <div
                      className="h-[1px] absolute top-0 bg-[#f1f1f1]"
                      style={{
                        width: "calc(100% - 8px)",
                      }}
                    />

                    {/* bottom line */}
                    <div
                      className="h-[1.5px] absolute bottom-0 bg-[#a1a1a1]"
                      style={{
                        width: "calc(100% - 8px)",
                      }}
                    />
                    {/* right lines/border */}
                    <div
                      className="w-[1.5px] absolute top-0 right-0 flex flex-col justify-between"
                      style={{ height: `${butttonHeight + 6}px` }}
                    >
                      <div
                        className="w-[1.5px]  bg-[#f1f1f1]"
                        style={{ height: `${butttonHeight / 2 - 2}px` }}
                      />
                      <div className="w-[1.5px] min-h-[4px] bg-transparent" />
                      <div
                        className="w-[1.5px] bg-[#f1f1f1]"
                        style={{ height: `${butttonHeight / 2 - 2}px` }}
                      />
                    </div>
                    {/* original button inner style element content*/}
                    <div className=" relative w-full h-full">
                      {/* left top qube */}
                      <div className="bg-black w-[6px] h-[6px] absolute top-0 left-0 z-10" />
                      {/* middle line */}
                      <div
                        className={`absolute left-0 w-[7px] h-[3px] z-10 transition duration-300 ease-in middle-qube`}
                        style={{
                          top: `${butttonHeight / 2 - 1}px`,
                          "--elemClr": "#ffffff",
                          "--hoverElemClr": "#000000",
                        }}
                      />
                      {/* right bottom qube */}
                      <div
                        className={`w-[6px] h-[6px] absolute bottom-0 right-0 z-10 transition duration-300 ease-in  right-bottom-qube`}
                        style={{
                          "--elemClr": "#ffffff",
                          "--hoverElemClr": "#000000",
                        }}
                      />

                      {/* button content */}
                      <Link
                        ref={buttonVariantRef}
                        href={"#"}
                        className="w-full flex justify-center items-center"
                      >
                        <Button
                          variant="customAnimated"
                          style={{
                            "--gradClr": "#65FF9E",
                            "--hoverClr": "#000000",
                          }}
                          className={`w-full h-5 font-extrabold rounded-none bg-[#1a1a1a] text-sm text-[#ffffff]`}
                        >
                          {data.textLabel}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*  */}
          </div>
        </div>
        {/* poster */}
        <div className="w-full h-full">
          <Image
            src={"/assets/images/mint-soon-poster.webp"}
            alt=""
            width={1924}
            height={615}
            className=""
          />
        </div>
      </div>

      {/* border-top */}
      <div className="absolute top-0 left-0 w-full h-[3px]">
        <FullWidthBorder reversed={true} />
      </div>
    </motion.section>
  );
}
const mintSoonBtn = [
  {
    textLabel: "Mint soon",
    bgColor: "#CC44FF",
    textSize: "text-sm lg:text-base 2xl:text-xl ",
    innerBtnPadding: "px-10 h-8",
    bgVariantType: "#232323",
    hoverTextColor: "#ffffff",
    elementColor: "#ffffff",
    hoverElementColor: "#FFD026",
    showFullLines: true,
  },
];

const logoData = [
  {
    icon: "/assets/images/katanaLogo.webp",
    textLabel: "KATANAINU.IO",
  },
  {
    icon: "/assets/images/baby-doge-logo.png",
    textLabel: "Buy $KATA Token",
  },
];
