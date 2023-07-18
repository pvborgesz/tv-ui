import React from "react";

export default function IconBordered({ children, background }) {
  return (
    <div className={`p-2 border border-white rounded-lg ${background}`}>
      {children}
    </div>
  );
}
