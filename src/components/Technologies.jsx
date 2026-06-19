import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbGraph } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiPrisma,
  SiRedis,
  SiTwilio,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import TechTooltip from "./Tooltip";

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

const technologies = [
  {
    label: "React",
    icon: RiReactjsLine,
    color: "text-cyan-400",
    duration: 2.5,
  },
  {
    label: "Next.js",
    icon: TbBrandNextjs,
    color: "text-gray-100",
    duration: 3,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    duration: 5,
  },
  {
    label: "Node.js",
    icon: RiNodejsLine,
    color: "text-green-500",
    duration: 2,
  },
  { label: "Express", icon: SiExpress, color: "text-gray-100", duration: 4 },
  {
    label: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "text-blue-700",
    duration: 6,
  },
  { label: "MongoDB", icon: SiMongodb, color: "text-green-600", duration: 6 },
  { label: "Redis", icon: SiRedis, color: "text-red-500", duration: 4.5 },
  { label: "Prisma", icon: SiPrisma, color: "text-teal-300", duration: 3.5 },
  { label: "OpenAI", icon: SiOpenai, color: "text-violet-600", duration: 6 },
  {
    label: "LangGraph",
    icon: TbGraph,
    color: "text-indigo-400",
    duration: 4,
  },
  { label: "Twilio", icon: SiTwilio, color: "text-red-400", duration: 3 },
];

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
        {technologies.map(({ label, icon: Icon, color, duration }) => (
          <TechTooltip key={label} label={label}>
            <motion.div
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
          </TechTooltip>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
