import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-neutral-400 h-[4.5rem] px-12 flex justify-between items-center sticky top-0 bg-transparent backdrop-blur-lg opacity-90 z-10">
      <h1 className="text-3xl font-semibold cursor-pointer hover:text-white transition-all duration-300">Pokédex</h1>
      <div className="flex gap-8 items-center text-xl">
        <a
          className="cursor-pointer hover:text-neutral-50 transition-all duration-300"
          href="https://x.com/_nikhilcodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          className="cursor-pointer hover:text-neutral-50 transition-all duration-300"
          href="https://github.com/nikhil-tiwari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
