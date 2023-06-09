import React from "react";
import blogit from "../assets/Web capture_19-6-2023_1501_blogit-2.vercel.app.jpeg";
import cineflix from "../assets/cineflix.jpeg";
import mymoney from "../assets/money.jpeg";
// import projectmgt from "../assets/projectmgt.jpeg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-neutral-100 bg-slate-800 mb-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-300">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* grid item */}
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blogit-2.vercel.app/"
            >
              <img src={blogit} alt="blogit" className="h-40 mx-auto" />

              <p className="mt-4 text-center">
                <span className="font-bold text-lg text-amber-300">
                  blogIt -{" "}
                </span>
                blog site created with reactjs, firebase and tailwind css
              </p>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cineflix-jet-seven.vercel.app/"
            >
              <img src={cineflix} alt="cineflix" className="h-40 mx-auto" />

              <p className="mt-4 text-center">
                <span className="font-bold text-lg text-amber-300">
                  Cineflix -{" "}
                </span>
                movie app created with reactjs, firebase and tailwindcss
              </p>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mymoney-2940f.web.app/"
            >
              <img src={mymoney} alt="myMoney" className="h-40 mx-auto" />

              <p className="mt-4 text-center">
                <span className="font-bold text-lg text-amber-300">
                  myMoney -{" "}
                </span>
                expenses tracker built with reactjs, firebase and tailwindcss
              </p>
            </a>
          </div>
          {/* <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thedojosite-3b435.web.app/"
            >
              <img src={projectmgt} alt="projectmgt" className="h-40 mx-auto" />

              <p className="mt-4 text-center">
                <span className="font-bold text-lg text-amber-300 ">
                  The dojo -{" "}
                </span>
                project management site built with reactjs and tailwindcss
              </p>
            </a>
          </div>
        */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
