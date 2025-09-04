import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiGooglecloud,
  SiMongodb,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import * as Tooltip from "@radix-ui/react-tooltip";

const TechTooltip = ({ children, label }) => (
  <Tooltip.Provider delayDuration={100}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content side="top" sideOffset={8} asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black shadow-lg"
          >
            {label}
            <Tooltip.Arrow className="fill-white" />
          </motion.div>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <TechTooltip label="React">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="Next.js">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandNextjs className="text-7xl text-gray-100" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="TypeScript">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTypescript className="text-7xl text-blue-600" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="Node.js">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiNodejsLine className="text-7xl text-green-500" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="PostgreSQL">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoPostgresql className="text-7xl text-blue-700" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="MongoDB">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-600" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="Docker">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiDocker className="text-7xl text-sky-500" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="GCP">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiGooglecloud className="text-7xl text-yellow-400" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="TailwindCSS">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTailwindcss className="text-7xl text-teal-400" />
          </motion.div>
        </TechTooltip>
        <TechTooltip label="OpenAI">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiOpenai className="text-7xl text-violet-600" />
          </motion.div>
        </TechTooltip>
      </motion.div>
    </div>
  );
};

export default Technologies;
