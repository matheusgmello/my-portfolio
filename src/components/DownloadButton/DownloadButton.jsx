import "./DownloadButton.css";
import React from "react";
import resume from "../../assets/resume.pdf";

const DownloadButton = (props) => {
  return (
    <a href={resume} download="cv-matheus-mello.pdf">
    <div onClick={props.onClick} className="download-btn">
      <span className="download-txt">Download CV</span>
    </div>
  </a>
  );
};

export default DownloadButton;
