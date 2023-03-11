import React from "react";
import firebase from "../assets/firebase.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python1.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-slate-800 text-neutral-100 pb-5"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-amber-300">
            Skills
          </p>
          <p className="py-4">Skills and technologies i work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div>
            <img src={javascript} alt="js" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div>
            <img src={react} alt="react" className="w-20 mx-auto" />
            <p className="my-4">Reactjs and React Native</p>
          </div>
          <div>
            <img src={python} alt="python" className="w-20 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div>
            <img src={firebase} alt="firebase" className="w-20 mx-auto" />
            <p className="my-4">Firebase</p>
          </div>
          <div>
            <img src={tailwind} alt="tailwind" className="w-20 mx-auto" />
            <p className="my-4">Tailwind css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
