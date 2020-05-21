import React from "react";
import "./headerAndParagraph.css";

const headerAndParagraph = ({ header, body, highlightedBody }) => {
  let bpdytag = <p>{body}</p>;

  body.replace("Lorem", <span>Lorem</span>)
  body.replace("remaining essentially unchanged", <span>remaining essentially unchanged</span>)

    console.log(body)


  return (
    <div className="header-and-paragraph-container">
      <h1>{header.toUpperCase()}</h1>
      <p>{body}</p>
    </div>
  );
};

export default headerAndParagraph;
