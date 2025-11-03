import React from "react";

const ProyectCard = ({ name, description, link }) => {
  return (
    <a
      href={link}
      title={`View project: ${name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-4/5 border border-lightbackground shadow-xs shadow-muted rounded p-2 flex justify-between hover:text-primary hover:border-primary hover:shadow hover:shadow-primary transition-colors"
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-muted font-extralight">{description}</p>
      </div>
      <div className="flex items-center justify-end h-full">
        <p>➞</p>
      </div>
    </a>
  );
};

export default ProyectCard;
