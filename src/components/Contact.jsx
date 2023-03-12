import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-slate-800 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/912e9d59-e380-43be-9dee-cbf6ae5419a2 "
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-300 text-neutral-100">
            Contact me
          </p>
          <p className="py-4 text-neutral-100">
            Let's get to work, shoot me an email - cedricahenkorah@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-neutral-100 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-neutral-100 p-2 my-4"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="bg-neutral-100 p-2"
        ></textarea>
        <button className="text-neutral-100 border-2 hover:text-slate-800 rounded-md hover:bg-amber-300 hover:border-amber-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's get to work!
        </button>
      </form>
    </div>
  );
};
