import React from "react";

const ConnectMobileCard = ({ name, link, id }) => {
  if (id != 1) {
    return (
      <a
        href={link}
        title={`Connect on ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-black/60 w-full text-center text-lg py-4 rounded active:scale-95 hover:bg-black/5 transition"
      >
        {name}
      </a>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white text-lg border w-full text-center py-4 rounded active:scale-95 hover:bg-gray-900 transition"
    >
      {name}
    </a>
  );
};

export default ConnectMobileCard;
