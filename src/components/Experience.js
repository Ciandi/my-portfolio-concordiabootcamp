import React from "react";
import { ExperienceContainer } from "./styles";
import Image1 from "../images/Commission-scolaire.png";
import Image2 from "../images/Field-office.jpg";
import Image3 from "../images/warehouse.jpg";

const experiences = [
  {
    company: "Commission Scolaire de la pointe de l'ile",
    location: "Montreal, Quebec",
    position: "Operator Technicians",
    duration: "August 2022 - Present",
    image: Image1,
    responsibilities: [
      "Replace and install new TVs in classrooms and administrative areas.",
      "Troubleshoot network issues",
      "Maintain accurate inventory records of networking equipment and other technological assets.",
      "Stay updated on advancements in networking technology and recommend upgrades or changes as needed.",
    ],
  },
  {
    company: "Amazon",
    location: "Montreal, Quebec",
    position: "Associate FC",
    duration: "June 2021 – June 2022",
    image: Image3,
    responsibilities: [
      "Unload deliveries into the warehouse and organize contents into designated storage areas",
      "Operate pallet trucks, forklifts, and other heavy-duty equipment to transport goods throughout the facility",
      "Assess merchandise for irregularities, defects, or damage before packaging",
    ],
  },
  {
    company: "Field Office",
    location: "Montreal, Quebec",
    position: "Full Stack Developer Internship",
    duration: "January 2021 – May 2021",
    image: Image2,
    responsibilities: [
      "Created a simple website using JavaScript",
      "Utilized React and Gatsby Framework",
      "Implemented a content model to create a database and used the API to retrieve data",
      "Developed multiple components for each web page and deployed the website",
    ],
  },
];

const Experience = () => {
  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
          <img
            src={experience.image}
            alt={experience.company}
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
            }}
          />{" "}
          {/* Image */}
          <div>
            <h3>
              {experience.position} - {experience.company}
            </h3>
            <p>
              {experience.location} | {experience.duration}
            </p>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
