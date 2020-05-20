import React from "react";
import "./App.css";

const links = ["contacts", "creations", "about", "John Doe"];
const rightLinks = ["Scroll", "---------------", "Contact me?"];

const showLinks = (links) => {
    return links.map( link => <li className="single-link"> {link} </li>)
};

function App() {
  return (
    <div className="app-div">
        <li id="text-left" className="side-text-left list-item">
            <ul><a href="www.google.com" className="links">{showLinks(links)}</a></ul>
        </li>

        <li id="text-right" className="side-text-right list-item">
            <ul><a href="www.google.com" className="links">{showLinks(rightLinks)}</a></ul>
        </li>
    </div>
  );
}

export default App;
