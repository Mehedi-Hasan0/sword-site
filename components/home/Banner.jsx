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
    <div className="text-white bg-[url('/assets/images/banner-bg-bottom.webp')] bg-cover pt-20 sm:pt-28 md:pt-24 relative min-h-[800px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* left side dots */}
      <div className="absolute bottom-0 left-6 sm:left-10 md:left-12 lg:left-16 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[3] w-[130px] h-[35px] opacity-30" />
      {/* right side dots */}
      <div className="absolute top-32 right-6 sm:right-10 md:right-12 lg:right-16 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[3] w-[60px] h-[96px] opacity-30" />
      {/* right side banner */}
      <div className="bg-[url('/assets/images/okx-banner-bg.webp')] absolute w-1/2 h-full right-0 top-0 z-[1] bg-right-top bg-no-repeat opacity-30" />
      {/* full width overlay */}
      <div className="bg-gradient-to-r from-black/10 to-black/40 absolute w-full h-full z-[2]" />
      {/* half width overlay for characters */}
      <div className=" w-1/2 h-2/5 bg-gradient-to-b from-transparent to-black absolute bottom-0 right-0 z-20 lg:block hidden" />
      {/* main content */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between main-container relative z-[15]">
        {/* texts and btn */}
        <motion.div
          className="flex justify-center items-center lg:justify-start lg:items-start gap-3 sm:gap-5 flex-1 sm:w-full sm:mt-10 lg:mt-20 lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[645px] lg:my-10 xl:my-10 w-[320px] mx-auto lg:mx-0"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase font-bold leading-[0.9] banner-heading">
              <span className="text-green">Okx</span> chain
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-base md:text-lg xl:text-2xl 2xl:text-3xl leading-[0.9] font-medium text-center">
                Character in <span className="text-green">Katana Inu</span> game
                on <span className="text-green">OKX Chain</span>
              </p>
              <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-center text-[#DCDCDC] max-w-[450px] xl:max-w-[645px]">
                We have designed the special in-game character to show our
                tribute to the great Baby Doge community and now the community
                members can also claim one of their own through our NFT
                collection. These characters can be used as in-game skins and
                will have several different variations.
              </p>
            </div>
            {/* btn */}
            <div className="mt-5 md:mt-6 2xl:mt-12 flex flex-col justify-center items-center">
              <BannerButton />
            </div>
          </div>
        </motion.div>
        {/* right side content */}
        <motion.div
          className="flex items-center gap-10 lg:block w-full lg:w-1/2 h-full relative bottom-5 sm:bottom-0"
          variants={img1Variant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            src={"/assets/images/okx-banner-ch.webp"}
            alt="hero character 1"
            width={1035}
            height={1000}
            className=" sm:h-auto sm:object-contain hero-ch relative z-10"
          />

          {/* mobile device overlay */}
          <div className="absolute w-full h-[10%] bg-gradient-to-b from-transparent to-black z-[11] bottom-0 left-0" />
        </motion.div>
      </section>
    </div>
  );
}
