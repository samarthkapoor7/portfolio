import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import TechToolTip from "./Tooltip";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Samarth Kapoor
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
            >
              <a
                initial="hidden"
                animate="visible"
                className="group mr-2 mb-7 rounded-full px-7 py-3 flex text-sm items-center gap-2 font-medium text-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 border border-purple-600 focus:scale-100 hover:scale-100 hover:bg-gray-800 active:scale-105 transition cursor-pointer"
                href="/SamarthKapoorCV.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <TechToolTip label="Hey there!">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-2xl"
                src={profilePic}
                alt="Samarth Kapoor"
              />
            </TechToolTip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
