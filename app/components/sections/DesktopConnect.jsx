"use client";
import React from "react";
import ConnectCard from "../ConnectCard";
import { connectList } from "../../utils/data.js";
import { Me } from "../../utils/svgs.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const DesktopConnect = () => {
  const connectDesktop = React.useRef();
  const connectItemContainer = React.useRef();
  useGSAP(() => {
    gsap.set(connectDesktop.current, { visibility: "visible" });
    gsap.from("#connectTitle", {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 1.8,
    });
  });
  useGSAP(
    () => {
      gsap.set(connectItemContainer.current, { visibility: "visible" });
      gsap.from(connectItemContainer.current.children, {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 2,
        stagger: 0.3,
      });
    },
    { scope: connectDesktop }
  );

  return (
    <div
      className="text-left w-full hidden lg:block"
      ref={connectDesktop}
      style={{ visibility: "hidden" }}
    >
      <div className="flex gap-0.5 items-center" id="connectTitle">
        <div className="w-3">
          <Me />
        </div>
        <h2 className="select-none text-muted font-light">Connect</h2>
      </div>
      <div
        className="flex gap-4"
        ref={connectItemContainer}
        style={{ visibility: "hidden" }}
      >
        {connectList.map((connect, index) => (
          <div key={index} className="flex gap-4">
            <ConnectCard name={connect.name} link={connect.link} />
            {index < connectList.length - 1 && (
              <p className="text-sm text-muted">.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopConnect;
