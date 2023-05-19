import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-5 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hi, I'm Benjamin, and graduated from the Federal Polytechnic, Ilaro with a degree in
                Computer Science. My interests are in Front-End Engineering, and i'm passionate about crafting
                interactive and visually stunning websites that seamlessly blend form and function.
              </p>
            </div>
            <div>
              <p>
                {" "}
               I specialize in HTML, CSS, and JavaScript, leveraging modern frameworks like React to build
               dynamic and responsive web applications. With a keen eye for design and a deep understanding
               of UX principles, I strive to create intuitive user interfaces that enhance user engagement and 
               satisfaction. What drives me in front-end development is the ever-evolving nature of technology
               and the opportunity to create seamless digital experiences. I am constantly honing my skills through
               continuous learning, keeping pace with the latest trends and attending conferences. If you are looking
               for a dedicated and ever-ready front-end developer to bring your vision to life, i would love to hear
               from you. You reach out to me through any of my social media handles. In addition to frontend development, I am also a
                growing technical data analyst. <i>Thanks for reading</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;