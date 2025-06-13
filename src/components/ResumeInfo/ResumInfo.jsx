import React from "react";
import "./ResumeInfo.css";


const ResumeInfo = () => {
/**
 * Attributes of the resume
 * Email
 * Address
 * Date of Birth
 * Languages
 * Hobbies
 */

  const attributes = [
    { name: "Email", value: "matheusgmello1@gmail.com" },
    { name: "Endereço", value: "Brasil" },
    //{ name: "Date of Birth", value: "2005" },
    { name: "Idiomas", value: "Português\nInglês" },
    //{ name: "Hobbies", value: "Jogos e academia" },
  ];

  return (

    // About me
    <div className="resume-info__root">
      <span className="resume-info__title">Sobre</span>
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
