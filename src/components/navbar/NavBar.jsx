import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FaHistory, FaUniversity, FaFileContract, FaChartLine } from "react-icons/fa";
import { FaPeopleGroup, FaPeopleArrows, FaPeopleLine } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
// import { DrawerComponent } from "../drawer/DrawerComponent";
// import LanguageSelector from "../languageSelector/LanguageSelector";
// import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [isOpenBusisnes, setIsOpenBusisnes] = useState(false);
  const [isOpenSectores, setIsOpenSectores] = useState(false);

  
  const handleAboutUsHover = () => setIsOpenBusisnes(true);
  const handleSectoresHover = () => setIsOpenSectores(true);
  const handleMouseLeave = () => {
    setIsOpenBusisnes(false);
    setIsOpenSectores(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <img
            src="/SVG/emtasa.svg"
            className={styles.logo}
            alt="Emtasa Logotipo"
          />
        </Link>
        <div className={styles.subnav}></div>
        <div className={styles.optionsNav}>
          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#"></Link>
            </button>
            <div
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenBusisnes ? styles.slidebottom : ""
              }`}
            >
              <Link to="/who-we-are">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <IoPeopleSharp className={styles.icon} />
                    {"navbar.Who we are"}
                  </div>
                </div>
              </Link>

              <Link to="/history">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaHistory className={styles.icon} />
                    {"navbar.History"}
                  </div>
                </div>
              </Link>
              <Link to="/institutional-pillars">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaUniversity className={styles.icon} />
                    {"navbar.Institutional Pillars"}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#">Nosotros</Link>
            </button>
            <div
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenBusisnes ? styles.slidebottom : ""
              }`}
            >
              <Link to="/operating-lease">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaFileContract className={styles.icon} />
                    {"navbar.Operating Lease"}
                  </div>
                </div>
              </Link>

              <Link to="/infrastructure-private-equity/managed-funds">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaChartLine className={styles.icon} />
                    {"navbar.Infrastructure Private Equity"}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#">Servicios</Link>
            </button>
            <div
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenSectores ? styles.slidebottom : ""
              }`}
            >
              <Link to="https://www.smv.gob.pe/SIMV/Frm_LisDatosGenerales?data=1526C9A15B544F0B1C7C30E69D8118B7F01CEC39E0"/*"/board-of-directors"*/>
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaBookReader className={styles.icon} />
                    {"Enlace a portal SMV"}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>
              <Link to="/news">Valuaciones por sectores</Link>
            </button>
          </div>
          <Link to="/contact-us">Contacto</Link>
          
        </div>
        {/* <DrawerComponent /> */}
      </div>
    </>
  );
};

export default NavBar;
