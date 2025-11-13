import { useRef } from "react";
import gsap from "gsap";

const ProjectCard = ({ name, description, link, className }) => {
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
    <a
      href={link}
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      title={`View project: ${name}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} max-w-4/5 border border-lightbackground shadow-xs shadow-muted rounded p-2 flex justify-between hover:text-primary hover:border-primary hover:shadow hover:shadow-primary transition-colors`}
    >
      <div>
        <h3 className="">{name}</h3>
        <p className="text-sm text-muted font-extralight">{description}</p>
      </div>
      <div className="flex items-center justify-end h-full">
        <p>➞</p>
      </div>
    </a>
  );
};

export default ProjectCard;
