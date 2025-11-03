import React from "react";

const ConnectCard = ({ name, link }) => {
  return (
    <a
      href={link}
      title={`Connect on ${name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-md font-semibold hover:underline hover:text-primary"
    >
      {name}
    </a>
  );
};

export default ConnectCard;
