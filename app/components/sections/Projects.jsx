"use client";
import React, { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { projectList, projectsUrl } from "../../utils/data.js";
import { Pj } from "../../utils/svgs.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Projects = () => {
  const projectsContainer = useRef(null);
  useGSAP(
    () => {
      gsap.set(projectsContainer.current, {
        visibility: "visible",
      });
      gsap.from(["#titleProjects", ".project-item", "#viewAllProjects"], {
        x: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1.5,
      });
    },
    { scope: projectsContainer }
  );
  const cardRef = useRef();
  const handleEnter = () => {
    gsap.killTweensOf(cardRef.current); // Detiene cualquier animación en curso
    gsap.to(cardRef.current, {
      x: 5,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.killTweensOf(cardRef.current); // Detiene cualquier animación en curso
    gsap.to(cardRef.current, {
      x: 0,
      duration: 0.2,
    });
  };

  return (
    <div
      className="hidden lg:flex flex-col"
      ref={projectsContainer}
      style={{ visibility: "hidden" }}
    >
      <div className="flex gap-0.5 items-center" id="titleProjects">
        <div className="w-3 ">
          <Pj />
        </div>
        <h2 className="text-muted font-light">Selected projects</h2>
      </div>
      <div className="flex flex-col gap-2">
        {projectList.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            className="project-item"
          />
        ))}
      </div>
      <a
        id="viewAllProjects"
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        href={projectsUrl}
        title="View all projects"
        target="_blank"
        rel="noopener noreferrer"
        className="select-none pt-3 text-sm font-semibold text-muted hover:underline hover:text-primary"
      >
        View all projects ➞
      </a>
    </div>
  );
};

export default Projects;
