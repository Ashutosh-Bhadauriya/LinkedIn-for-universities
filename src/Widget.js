import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./Widget.css";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Testing it out..", "I am sure this will work this time")}
      {newsArticle("FAANG: Work, life balance", "Random description")}
      {newsArticle("FAANG: Work, life balance", "Random description")}
      {newsArticle("FAANG: Work, life balance", "Random description")}
      {newsArticle("FAANG: Work, life balance", "Random description")}
      {newsArticle("FAANG: Work, life balance", "Random description")}
    </div>
  );
};

export default Widget;
