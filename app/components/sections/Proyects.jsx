"use client";
import React from "react";
import ProyectCard from "../ProyectCard";
import { projectList, proyectsUrl } from "../../utils/data.js";
import { Pj } from "../../utils/svgs.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Proyects = () => {
  const proyectsContainer = React.useRef(null);
  useGSAP(
    () => {
      gsap.set(proyectsContainer.current, { visibility: "visible" });
      gsap.from(proyectsContainer.current.children, {
        x: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.4,
        delay: 0.6,
      });
    },
    { scope: proyectsContainer }
  );

  return (
    <div
      className="hidden lg:flex flex-col"
      ref={proyectsContainer}
      style={{ visibility: "hidden" }}
    >
      <div className="flex gap-0.5 items-center">
        <div className="w-3 ">
          <Pj />
        </div>
        <h2 className="text-muted font-light">Selected projects</h2>
      </div>
      <div className="flex flex-col gap-2">
        {projectList.map((project) => (
          <ProyectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <a
        href={proyectsUrl}
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

export default Proyects;
