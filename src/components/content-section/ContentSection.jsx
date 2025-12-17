import React from "react";
import styles from "./ContentSection.module.css";

const ContentSection = ({
  title,
  description,
  image,
  imageAlt = "Sección de contenido",
  layout = "left",
  highlight = null,
}) => {
  const content = (
    <div className={styles.textContent}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && (
        <p className={styles.description}>
          {highlight ? (
            <>
              {description.split(highlight).map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < description.split(highlight).length - 1 && (
                    <span className={styles.highlight}>{highlight}</span>
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            description
          )}
        </p>
      )}
    </div>
  );

  const imageElement = image && (
    <div className={styles.imageContainer}>
      <img src={image} alt={imageAlt} className={styles.image} />
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles[`layout-${layout}`]}`}>
        {layout === "left" ? (
          <>
            {imageElement}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
