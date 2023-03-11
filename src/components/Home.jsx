import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800 text-neutral-100">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center">
        <p className="py-2">hi, I'm</p>
        <h1 className="text-3xl sm:text-6xl font-bold md:py-2 py-1 tracking-wider text-amber-300">
          Cedric Ahenkorah
        </h1>
        <p className="text-xl xm:text-4xl font-bold md:py-2 py-1 tracking-wider">
          Software Engineer
        </p>
        <p className="md:py-5 tracking-wider py-3">
          cedricahenkorah@gmail.com | +233 201 648 743
        </p>
        <div className="flex text-5xl justify-center gap-16 py-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/cedricahenkora_"
          >
            <FiTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cedricahenkorah"
          >
            <FiGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/cedric-ahenkorah-593116189"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
