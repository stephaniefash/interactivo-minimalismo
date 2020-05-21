import React from "react";
import "./mainSection.css";
import IntroductorySection from "../introductorySection/introductorySection";
import ImageWithTextSection from "../imageWithTextSection/imageWithTextSection";
import InfoSection from "../infoSection/infoSection";

const url =
  "https://33.media.tumblr.com/262efb7d0ff0cba18b13750719cfc6e9/tumblr_n9qyew2Jxq1r3nyo8o1_500.gif";
const mainSection = () => {
  return (
    <div className="main-section-div">
      <IntroductorySection />
      <ImageWithTextSection text="About" imageUrl={url} />
      <InfoSection/>
    </div>
  );
};

export default mainSection;
