import React from "react";
import ced from "../assets/ced1.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-slate-800 text-neutral-100 p-5"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="md:ml-auto mr-auto md:mr-12 my-auto rounded-full w-60 h-60 overflow-hidden md:h-60 md:w-60">
            <img src={ced} alt="avatar" className="object-cover" />
          </div>
          <div>
            <p>
              As a React software front-end developer, I bring a creative and
              user-focused approach to every project. From building responsive
              layouts to implementing interactive features, I'm dedicated to
              creating dynamic and user-friendly applications. With a strong
              background in HTML, CSS, and JavaScript, I'm always striving to
              stay on the cutting edge of software development trends. When I'm
              not coding, you can find me reading, listening to music, binge
              watching my favorite tv shows and watching football(yeah i'm a big
              liverpool fan too)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
