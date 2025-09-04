import logo from "../assets/SK.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <a href="https://www.behance.net/samarthkapoor" target="_blank" rel="noopener noreferrer">
       <img className="mx-2 w-16" src={logo} alt="logo" />
    </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/samarthkapoor7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/samarthkapoor7" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/thesamarthkapoor/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/samarthtwt" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
  </nav>
}

export default Navbar