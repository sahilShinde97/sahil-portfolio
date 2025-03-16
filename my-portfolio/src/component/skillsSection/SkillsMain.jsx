import React from "react";
import SkillsTxt from "./SkillsTxt";
import AllSkill from "./AllSkill";
import AllSkillsSm from "./AllSkillsSm";
import SubSkills from "./SubSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsTxt />
        </motion.div>
        <div className=" bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkill /> 
        </div>
        <div className=" sm:block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
