import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse lg:flex-row gap-10 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full lg:w-1/2 px-4"
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="w-full lg:w-1/2 flex justify-center px-4"
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
