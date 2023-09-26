import React from "react";
import smart from "../Images/Image.png";

export const MainBackground = () => {
  return (
      <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${smart})`}}>
        <h1>Hello</h1>
      </div>
  );
};
