import React from "react";
import "./introductorySection.css";

const listOfTitles = [
  "Artisan",
  "designer",
  "indépendent.",
  "creating",
  "interactive",
  "unique",
  "experiences",
  "for clients",
];

const highlightedTitles = ["Artisan", "designer", "interactive", "experiences"];

const showSingleText = (title) => {
  const whiteText = (
    <span className="selected-whitened-text">
      {title} <br />
    </span>
  );
  const nonWhiteText = (
    <span>
      {title} <br />
    </span>
  );
  return highlightedTitles.includes(title) ? whiteText : nonWhiteText;
};

const showListOfTitles = () => {
  return listOfTitles.map((title) => showSingleText(title));
};

const introductorySection = () => {
  return (
    <div className="introduction-section-container">
      <h1>{showListOfTitles()}</h1>
    </div>
  );
};

export default introductorySection;
