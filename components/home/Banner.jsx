import Image from "next/image";
import BannerButton from "./BannerButton";
import { motion } from "framer-motion";
import ShortBorder from "../shared/SortBorder";

export default function Banner() {
  const textVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75 },
    },
  };

  const img1Variant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.85 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85 },
    },
  };
  return (
    <div className="text-white bg-[url('/assets/images/banner-bg.webp')] bg-cover pt-20 sm:pt-28 md:pt-24 relative min-h-[800px] lg:min-h-[650px] xl:min-h-[750px] 2xl:min-h-[1000px] flex items-center justify-center overflow-hidden pb-14 lg:pb-0">
      {/* left side dots */}
      <div className="absolute bottom-10 left-6 sm:left-10 md:left-12 lg:left-16 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[5] w-[130px] h-[35px] opacity-30 lg:opacity-40" />
      {/* right side dots */}
      <div className="absolute top-32 right-6 sm:right-10 md:right-12 lg:right-16 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[3] w-[60px] h-[96px] opacity-30 lg:opacity-40" />
      {/* left lines */}
      <div className="absolute bg-[url('/assets/icons/leftLines.svg')] bg-contain bg-no-repeat z-[5] w-1/2 h-full opacity-40 left-0" />
      {/* right lines */}
      <div className="absolute bg-[url('/assets/icons/rightLines.svg')] bg-contain bg-no-repeat z-[2] w-1/2 h-full opacity-40 right-0" />
      {/* circle layer */}
      <div className="absolute bg-[url('/assets/images/layer.png')] bg-contain bg-no-repeat z-[5] w-[200px] h-[500px] 2xl:w-[365px] 2xl:h-[731px] opacity-90 left-0" />
      {/* full width overlay */}
      <div className="bg-[url('/assets/images/banner-overlay.png')] bg-cover bg-no-repeat absolute w-full h-full bottom-0 left-0 z-[4]" />
      {/* main content */}
      <section className="flex flex-col-reverse items-center justify-center main-container relative z-[15] gap-7">
        {/* texts and btn */}
        <motion.div
          className="flex justify-center items-center gap-3 sm:gap-5 flex-1 sm:w-full sm:mt-10 lg:mt-20  lg:my-10 xl:my-10 w-[320px] mx-auto lg:mx-0"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase font-bold leading-[0.9] text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl max-w-[556px] text-center font-khand tracking-widest">
              <span className="text-nowrap">Introduction to</span>{" "}
              <span className="text-purple text-[60px] sm:text-[85px] xl:text-[90px] 2xl:text-[110px] tracking-wider">
                Telos
              </span>{" "}
              <span className="text-lime text-[60px] sm:text-[85px] xl:text-[90px] 2xl:text-[110px] tracking-wider">
                EVM
              </span>
            </h1>
            <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-center text-[#DCDCDC] max-w-[700px] xl:min-w-[600px]  2xl:min-w-[760px] px-4 sm:px-0">
              The Telos EVM offers a production-ready environment for developers
              looking to harness the power of Web3. With industry-leading speed,
              low fixed gas fees, and consistent uninterrupted uptime since
              launch, Telos EVM distinguishes itself as one of the few
              blockchains that is genuinely usable, accessible, and secure for
              all.
            </p>
            {/* btn */}
            <div className="mt-5 md:mt-6 xl:mt-10 2xl:mt-12 flex flex-col justify-center items-center">
              <BannerButton />
            </div>
          </div>
        </motion.div>

        {/* mobile image */}
        <motion.div
          className="mt-5 block lg:hidden"
          variants={img1Variant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            src={"/assets/images/mobile-banner-character.webp"}
            alt="hero character 1"
            width={575}
            height={500}
            className="sm:w-[400px] md:w-[500px]"
          />
        </motion.div>
      </section>
      {/* right side content */}
      <motion.div
        className="lg:block hidden absolute top-28 xl:top-16 2xl:top-10 right-7 z-[3]"
        variants={img1Variant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image
          src={"/assets/images/banner-character.webp"}
          alt="hero character 1"
          width={575}
          height={1000}
          className="object-contain lg:w-[300px] xl:w-[400px] 2xl:w-[575px]"
        />
      </motion.div>
    </div>
  );
}
