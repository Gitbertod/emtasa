import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Link to="/">
              <img
                src="/SVG/emtasa.svg"
                className={styles.logo}
                alt="Emtasa Logotipo"
              />
            </Link>
            <p className={styles.tagline}>
              Valuaciones y tasaciones confiables, precisas y profesionales
            </p>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Nosotros</h4>
              <ul>
                <li>
                  <Link to="/who-we-are">Quiénes somos</Link>
                </li>
                <li>
                  <Link to="/history">Historia</Link>
                </li>
                <li>
                  <Link to="/institutional-pillars">Pilares institucionales</Link>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Servicios</h4>
              <ul>
                <li>
                  <Link to="/operating-lease">Arrendamiento operativo</Link>
                </li>
                <li>
                  <Link to="/infrastructure-private-equity">
                    Infraestructura
                  </Link>
                </li>
                <li>
                  <Link to="/news">Valuaciones por sectores</Link>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacidad</Link>
                </li>
                <li>
                  <Link to="/terms">Términos y condiciones</Link>
                </li>
                <li>
                  <Link to="/cookies">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.socialSection}>
            <h4 className={styles.columnTitle}>Síguenos</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} EMTASA. Todos los derechos reservados.
          </p>
          <p className={styles.contact}>
            Contacto: <a href="mailto:info@emtasa.com">info@emtasa.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
