import React from "react";
import "./CoverLetterComponent.css";

const CoverLetterComponent = () => {
/**
 * Antiga carta de apresentacao
 * Highly motivated developer with experience in software development and a passion for solving problems. Proven ability to quickly adapt to new technologies and work efficiently in a team environment. Seeking a challenge where I can continue to grow and make meaningful contributions
 * 
 */
  return (
    <div className="cover-letter-component__root">
      <span className="cover-letter-component__name">Matheus Mello</span>
      <span className="cover-letter-component__title">
        - Desenvolvedor backend
      </span>
      <span className="cover-letter-component__content">
      Desenvolvedor backend em formação pela UFSM, com experiência prática em projetos full stack utilizando tecnologias como Java, Spring Boot, Node.js, PHP, React e SQL. Atuo em iniciativas acadêmicas e pessoais, onde participo de soluções escaláveis, bem estruturadas. Tenho facilidade em trabalhar em equipe, me adaptar a novas tecnologias e estou sempre em busca de crescimento profissional e aprendizado contínuo.
      </span>
    </div>
  );
};

export default CoverLetterComponent;
