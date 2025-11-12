import { useRef } from "react";
import gsap from "gsap";

const StackCard = ({ name }) => {
  const cardRef = useRef();

  const handleEnter = () => {
    gsap.killTweensOf(cardRef.current); // Detiene cualquier animación en curso
    gsap.to(cardRef.current, {
      y: -10, // cuánto "salta"
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.killTweensOf(cardRef.current); // Detiene cualquier animación en curso
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="select-none text-muted text-xs font-light bg-lightbackground rounded px-2 py-1 cursor-default transition-colors hover:bg-primary/60"
    >
      <p>{name}</p>
    </div>
  );
};

export default StackCard;
