import React from "react";
import { ProjectContainer } from "./styles";
import Project1 from "../images/Project1.png";
import Project2 from "../images/ComingSoon.png";
const projects = [
  {
    title: "Project Field-Office",
    description:
      "Building a site web from scratch for a client using Gatsbyjs and Reactjs",
    image: Project1,
  },
  {
    title: "More Coming soon",
    description:
      "When the bootcamp ends this portfolio will be worked on and be better!",
    image: Project2,
  },
];

const Experience = () => {
  return (
    <ProjectContainer>
      <h2>My Projects</h2>
      <h3>
        Here are some of the projects that I have done in the bootcamp Concordia
        or in my internship
      </h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
        ))}
      </div>
    </ProjectContainer>
  );
};

export default Experience;
