import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "First-Website",
    year: "Jul2023",
    align: "right",
    image: "../../public/images/first-website.png",
    link: "https://github.com/sahilShinde97/First--web-site",
  },
  {
    name: "To-Good-Co",
    year: "Feb2024",
    align: "left",
    image: "../../public/images/to-good-co.png",
    link: "https://github.com/sahilShinde97/To-Good-Co-",
  },
  {
    name: "The-Paper-Portfolio",
    year: "Jul2024",
    align: "right",
    image: "../../public/images/paper-portfolio.png",
    link: "https://github.com/sahilShinde97/The-paper-Portfolio",
  },
  {
    name: "Portfolio",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/portfolio-image.png",
    link: "https://github.com/sahilShinde97/sahilportfolio",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="mx-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((items, index) => {
          return (
            <SingleProject
              key={index}
              name={items.name}
              year={items.year}
              align={items.align}
              image={items.image}
              link={items.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
