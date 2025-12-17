import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./BotonCTA.module.css";

const BotonCTA = () => {
  return (
    <div className={styles.containerCTA}>
      <button className={styles.button}>
        <span className={styles.icon}>
          <FaArrowRight />
        </span>
        Solicitar valuación
      </button>
    </div>
  );
};

export default BotonCTA;