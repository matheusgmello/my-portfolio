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
      Desenvolvedor altamente motivado com experiência em desenvolvimento de software e paixão pela resolução de problemas. Capacidade na rápida adaptação a novas tecnologias e trabalhar eficientemente em um ambiente de equipe. Procurando um desafio onde eu possa continuar a crescer e contribuir significativamente
      </span>
    </div>
  );
};

export default CoverLetterComponent;
