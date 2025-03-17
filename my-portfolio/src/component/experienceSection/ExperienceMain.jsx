import React from "react";
import ExpeienceText from "./ExpeienceText";
import ExperiencTop from "./ExperiencTop";
import AllExperience from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className=" max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExpeienceText />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperiencTop />
      </motion.div>

      <div className=" w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
