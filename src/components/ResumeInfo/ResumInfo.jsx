import React from "react";
import "./ResumeInfo.css";


const ResumeInfo = () => {
  const attributes = [
    { name: "Email", value: "matheusgmello1@gmail.com" },
    { name: "Address", value: "Brasil" },
    { name: "Date of Birth", value: "2005" },
    { name: "Languages", value: "Portuguese\nEnglish" },
    { name: "Hobbies", value: "Games and Books" },
  ];

  return (
    <div className="resume-info__root">
      <span className="resume-info__title">About</span>
      <div>
        {attributes.map((attribute, index) => {
          return (
            <div key={index} className="resume-info__attribute">
              <span className="resume-info__attribute__name">
                {attribute.name}
              </span>
              <br />
              <span className="resume-info__attribute__value">
                {attribute.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeInfo;
