"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WhitelistButton from "../shared/WhitelistButton";
import FullWidthBorder from "../shared/FullWidthBorder";

export default function LootBoxDetails() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };

  const CardVariant = {
    initial: {
      opacity: 0.5,
      y: 30,
      transition: { duration: 0.9 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/lootbox-banner.webp')] bg-cover bg-center lg:my-8 lg:pt-0 xl:pt-8 2xl:pt-10 relative">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 w-1/2 h-full z-[2] opacity-50" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 w-1/2 h-full z-[2] opacity-30" />
      {/* left side dots */}
      <div className="absolute bottom-20 right-10 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[4] w-[130px] h-[35px] opacity-40 hidden sm:block" />
      {/* right side dots */}
      <div className="absolute bottom-20 left-10 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[4] w-[60px] h-[96px] opacity-40 hidden sm:block" />

      {/* right side glow */}
      <div className="absolute top-[30%] right-0">
        <Image
          src={"/assets/images/weapon/rigthGlow.png"}
          alt=""
          width={203}
          height={203}
        />
      </div>

      {/* main content */}
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 mx-auto lg:mt-8">
          {/* left card */}
          <div className="relative lg:z-10 px-6 sm:px-10 md:px-12 lg:px-0 lg:pl-16 w-full lg:w-[70%] flex justify-center items-center pt-8 sm:pt-10 lg:pt-0">
            <div className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-full relative z-10 lg:pr-4 xl:pr-16">
              <h2 className=" flex items-center gap-1 sm:gap-5 text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl 2xl:text-5xl font-khand my-2 sm:my-6 xl:my-8">
                <span className="text-white">Katana Inu</span>
                <Image
                  src={"/assets/icons/x-shape.svg"}
                  alt=""
                  width={42}
                  height={46}
                  className="w-7 sm:w-11"
                />
                <span className="text-purple">OKX Chain</span> Loot Box
              </h2>
              {/*  */}
              <div className="mt-5 md:mt-4 2xl:mt-7 w-full">
                <div className="flex flex-col gap-7">
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white text-center mb-4 sm:mb-8">
                      Get your <span className="text-lime">whitelist</span> spot
                      now!
                    </p>
                    <div className="border border-white bg-[#434343]/40 w-full">
                      <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
                        <span className="text-purple font-bold">Supply:</span>{" "}
                        10,000 Loot Boxes
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-light text-white/70 max-w-[335px]">
                      Each Loot Box includes a Baby DogeCharacter and a Weapon
                      NFT
                    </p>
                    <div className="border border-white bg-[#434343]/40">
                      <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <span className="text-purple font-bold">Price:</span>{" "}
                        $15 for whitelisted Wallets
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-light text-white/70 max-w-[335px]">
                      $20 for non-whitelisted Wallets
                    </p>
                    <div className="flex items-center gap-4 xl:gap-8 2xl:gap-20 w-full">
                      <div className="border border-white bg-[#434343]/40 flex-1">
                        <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                          <span className="text-purple font-bold">CHAIN:</span>{" "}
                          BNB
                        </p>
                      </div>
                      {/*  */}
                      <div className="border border-white bg-[#434343]/40 flex-1">
                        <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                          <span className="text-purple font-bold">
                            Mint Date:
                          </span>{" "}
                          TBA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="mt-8 md:mt-10 2xl:mt-16 w-full flex flex-col justify-center items-center max-w-[670px] gap-7">
                {/* WHITELIST BTN */}
                <div className="py-5 xl:py-9 min-w-[270px]">
                  <WhitelistButton
                    isFullWidth={true}
                    bgColor={"#CC44FF"}
                    textColor="#FFFFFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* border-top */}
      <FullWidthBorder reversed={true} />
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
