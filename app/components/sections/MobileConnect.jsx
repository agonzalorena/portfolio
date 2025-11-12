"use client";
import React from "react";
import ConnectMobileCard from "../ConnectMobileCard";
import { connectList, proyectsUrl } from "../../utils/data.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MobileConnect = () => {
  const connectMobile = React.useRef();
  useGSAP(
    () => {
      gsap.set(connectMobile.current, { visibility: "visible" });
      gsap.fromTo(
        ".connect-item",
        { x: -500, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.6,
          stagger: 0.4,
        }
      );
    },
    { scope: connectMobile }
  );
  return (
    <div
      className="lg:hidden flex flex-col justify-center items-center gap-5"
      ref={connectMobile}
      style={{ visibility: "hidden" }}
    >
      {connectList.map((connect) => (
        <ConnectMobileCard
          key={connect.id}
          name={connect.name}
          link={connect.link}
          id={connect.id}
          className="connect-item"
        />
      ))}
      <a
        href={proyectsUrl}
        title="View all projects"
        target="_blank"
        rel="noopener noreferrer"
        className={`connect-item w-full text-center font-semibold py-3 text-muted active:scale-95 hover:underline hover:text-primary`}
      >
        View all projects ➞
      </a>
    </div>
  );
};

export default MobileConnect;
