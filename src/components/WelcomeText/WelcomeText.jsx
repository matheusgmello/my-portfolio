import React from "react";

import "./WelcomeText.css";
/** 
 * Antiga introdução do site
 * Hi there! My name is Matheus and I'm a Software Developer.
 * 
*/
const WelcomeText = () => {
  return (
    <div className="welcome-text__root">
      <div className="welcome-text__wrapper">
        <span className="welcome-text__item">Hello world!</span>
        <span className="welcome-text__item">
          Me chamo <strong className="welcome-text__item__strong">Matheus</strong>
        </span>
        <span className="welcome-text__item">
          {/* Eu sou{" "} */}
          <strong className="welcome-text__item__strong">
            Desenvolvedor de Software
          </strong>
        </span>
      </div>
    </div>
  );
};

export default WelcomeText;
