// IndustryCards.tsx
import React from "react";
import styles from "./styles.module.css";
import { Button } from "../button";
import Link from "next/link";

interface Industry {
  id: string;
  heading: string;
  description: string;
  cardTitle: string;
  buttonText: string;
  imageSrc: string;
  icon: React.ReactNode;
}

interface IndustryCardsProps {
  industries: Industry[];
}

const IndustryWeServe: React.FC<IndustryCardsProps> = ({ industries }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Industries We Serve</h2>
        <div className={styles.cardContainer}>
          {industries.map((industry) => (
            <div key={industry.id} className={styles.card}>
              <div className={styles.cardUpper}>
                <div className={styles.imageContainer}>
                  <img
                    src={industry.imageSrc}
                    alt={industry.heading}
                    className={`${styles.image}  ${styles.invertedRadius}`}
                  />
                </div>
                <div className={styles.titleBadge}>
                  <h2 className={styles.title}>{industry.heading}</h2>
                </div>
                <div className={styles.icon}>{industry.icon}</div>
              </div>
              <div className={styles.cardLower}>
                <div className={styles.textContainer}>
                  <h3 className={styles.cardTitle}>{industry.cardTitle}</h3>
                  <p className={styles.cardDescription}>
                    {industry.description}
                  </p>
                </div>
                <Link href="/contact" className={styles.link}>
                  <Button variant="outline" className={styles.button}>
                    {industry.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryWeServe;
