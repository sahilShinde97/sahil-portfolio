import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-[90%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-6 sm:mb-8 md:mb-10 font-bold">
        About Me
      </h2>
      <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
        Hi, I'm Sahil, a web developer who loves building websites. I specialize
        in React and Front-end development. I enjoy working on real-world
        projects and continuously learning new web technologies. My goal is to
        create websites that look great, function smoothly, and offer a great
        user experience. I believe in writing clean and simple code to make
        websites faster and easier to use. I constantly improve my skills to
        stay updated with the latest trends. I'm always excited to take on new
        projects and turn ideas into reality.
      </p>
      <button className="mt-6 border border-orange rounded-full py-2 px-6 sm:px-8 text-sm sm:text-lg flex items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
