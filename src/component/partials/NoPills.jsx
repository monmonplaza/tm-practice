import React from "react";

function NoPills({
  label = "Active",
  bgc = "bg-green-800",
  textc = "text-red-400",
}) {
  return (
    <span className={`${bgc} text-[15px] rounded-full py-1 uppercase ${textc}`}>
      {label}
    </span>
  );
}

export default NoPills;
