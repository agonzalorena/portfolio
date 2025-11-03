import React from "react";

const StackBtn = ({ name }) => {
  return (
    <div className="select-none text-muted text-xs font-light bg-lightbackground rounded px-2 py-1 hover:bg-primary/60 transition-colors">
      <p>{name}</p>
    </div>
  );
};

export default StackBtn;
