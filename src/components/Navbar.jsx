import logo from "../assets/SK.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import TechTooltip from "./Tooltip";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <TechTooltip label="Behance">
          <a
            href="https://www.behance.net/samarthkapoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mx-2 w-16" src={logo} alt="logo" />
          </a>
        </TechTooltip>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <TechTooltip label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/samarthkapoor7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </TechTooltip>
        <TechTooltip label="Github">
          <a
            href="https://github.com/samarthkapoor7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </TechTooltip>
        <TechTooltip label="Twitter / X">
          <a
            href="https://x.com/samarthtwt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </TechTooltip>
      </div>
    </nav>
  );
};

export default Navbar;
