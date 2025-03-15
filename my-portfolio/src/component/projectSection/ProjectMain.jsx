import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "First-Website",
    year: "Jul2023",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "To-Good-Co",
    year: "Feb2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "The-Paper-Portfolio",
    year: "Jul2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Fight-Game",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="mx-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((items, index) => { 
          return (
            <SingleProject
              key={index}
              name={items.name}
              year={items.year}
              align={items.align}
              image={items.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
