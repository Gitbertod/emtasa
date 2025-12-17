import React from "react";
import styles from "./HeroContent.module.css";
import BotonCTA from "../boton-cta/BotonCTA";

const HeroContent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Valuaciones y tasaciones</span>{" "}
            precisas y profesionales
          </h1>
          <p className={styles.description}>
            Somos especialistas en la valuación y tasación de bienes inmuebles,
            maquinarias y activos, brindando informes técnicos con respaldo
            profesional, claridad y rigor, adaptados a las necesidades de
            empresas, instituciones y particulares. <br />
            <span className={styles.highlight}>
              Experiencia, metodología y transparencia
            </span>{" "}
            para respaldar cada decisión con información objetiva y confiable.
          </p>
        </div>
      <BotonCTA />
      </div>
    </>
  );
};

export default HeroContent;
