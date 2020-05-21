import React from "react";
import "./imageWithTextSection.css";

const imageWithTextSection = ({ imageUrl, text }) => {
  return (
    <div className={"image-with-text-container"}>
      <div>
        <h1>{text}</h1>
      </div>
        <img src={imageUrl} alt={"model guy"} />
    </div>
  );
};

export default imageWithTextSection;
