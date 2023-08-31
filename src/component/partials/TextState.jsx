import React from "react";

const TextState = ({ label = "ACTIVE", tc = "text-green-800" }) => {
  return <span className={`${tc} text-sm text-center font-bold`}>{label}</span>;
};

export default TextState;
