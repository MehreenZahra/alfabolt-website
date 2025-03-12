import { FC } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import { Button } from '../button';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage: string;
}

export const Card: FC<CardProps> = ({ Icon, title, description, backgroundImage }) => {
  return (
    <div className={styles.card}>
      {/* Background image with overlay */}
      <div className={styles.imageWrapper}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Card content */}
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} strokeWidth={1.5} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonWrapper}>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};
