import React from "react";

const ConnectMobileCard = ({ name, link, id }) => {
  if (id != 1) {
    return (
      <a
        href={link}
        title={`Connect on ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-foreground/60 shadow-xs shadow-muted w-full text-center text-lg py-4 rounded active:scale-95 transition"
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
      className="bg-foreground text-background shadow-custom text-lg w-full text-center py-4 rounded active:scale-95 transition"
    >
      {name}
    </a>
  );
};

export default ConnectMobileCard;
