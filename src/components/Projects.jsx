import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="border-b border-r-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded hover:opacity-90 transition-opacity duration-300"
                />
                <span className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 mt-2 w-max rounded bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                  {project.link.replace(/^https?:\/\//, "")}
                </span>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">{project.title}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBoxArrowUpRight className="text-lg text-neutral-400 hover:text-white transition-colors" />
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
