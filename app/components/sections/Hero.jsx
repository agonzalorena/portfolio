"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import StackCard from "../StackCard.jsx";
import { stackList } from "../../utils/data.js";

const Hero = () => {
  const container = useRef();
  const stackContainer = useRef();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.set(container.current, { visibility: "visible" });
      const mm = gsap.matchMedia();
      const tl = gsap.timeline({
        defaults: { ease: "power1.out", duration: 0.8 },
      });
      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;
          if (isDesktop) {
            tl.from("#title", { y: -20, autoAlpha: 0, immediateRender: true })
              .from("#subtitle", { x: -30, autoAlpha: 0 }, "-=0.5")
              .from("#description", { x: -50, autoAlpha: 0 }, "-=0.4");
          }
          if (isMobile) {
            gsap.from("#title", {
              y: -20,
              autoAlpha: 0,
              duration: 0.4,
              ease: "none",
            });
            gsap.from("#subtitle", {
              x: -30,
              autoAlpha: 0,
              duration: 0.4,
              ease: "none",
              delay: 0.4,
            });
          }
        }
      );
      return () => mm.revert(); // cleanup animations
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(stackContainer.current.children, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "elastic.out(1.5, 0.5)",
        delay: 1.3,
        stagger: 0.1,
      });
    },
    { scope: stackContainer }
  );
  return (
    <section
      className="lg:w-3/5 flex flex-col justify-center gap-11 lg:h-1/2"
      ref={container}
      style={{ visibility: "hidden" }}
    >
      <div className="flex flex-col justify-center text-left gap-3">
        <h1 className="text-5xl font-extrabold" id="title">
          Agustin Gonzalorena
        </h1>
        <p className="text-2xl text-muted" id="subtitle">
          Software Developer
        </p>
      </div>
      <div className="hidden lg:flex" id="description">
        <p className="font-light">
          Backend Developer specialized in Java and{" "}
          <span className="text-primary font-semibold">Spring Boot</span>, with
          experience in frontend projects using React and Next.js. I’m
          continuously learning and exploring new tools that complement my work
          as a developer.
        </p>
      </div>
      <div className="hidden lg:flex gap-2" ref={stackContainer}>
        {stackList.map((tech) => (
          <StackCard key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
