import { FC } from 'react';
import styles from './Card.module.css';
import { Button } from '../button';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage?: string;
}

export const Card: FC<CardProps> = ({ Icon, title, description, backgroundImage }) => {
  return (
    <div className={styles.card} style={{ '--bg-image': `url(${backgroundImage})` } as any}>
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
