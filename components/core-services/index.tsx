import { FC } from 'react';
import { Card } from '../card';
import styles from './CoreServices.module.css';
import { 
  Smartphone, 
  Globe, 
  Code2, 
  Bot, 
  Cloud, 
  Database, 
  Palette, 
  ChartNoAxesCombined
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Develop scalable mobile apps optimized for high performance',
    backgroundImage: '/images/image.avif'
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Complete engineering solutions for high-performance web apps',
    backgroundImage: '/images/image.avif'
  },
  {
    icon: Code2,
    title: 'API Design',
    description: 'Boost your systems with our custom APIs, designed for seamless integration and outstanding performance',
    backgroundImage: '/images/image.avif'
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Unlock new possibilities for your business with AI Agents',
   backgroundImage: '/images/image.avif'
  },
  {
    icon: Cloud,
    title: 'Cloud Optimisation',
    description: 'Optimise your AWS / GCP costs and effectively manage your cloud infrastructure',
   backgroundImage: '/images/image.avif'
  },
  {
    icon: Database,
    title: 'Data Migration',
    description: 'Seamlessly transition between databases in real time without worrying about downtime',
   backgroundImage: '/images/image.avif'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Product Analysis',
    description: 'Seamlessly transition between databases in real time without worrying about downtime',
   backgroundImage: '/images/image.avif'
  },
  {
    icon: Palette,
    title: 'UI/UX',
    description: 'Create products that blend intuitive design with a user-friendly experience for maximum engagement',
   backgroundImage: '/images/image.avif'
  }
];

export const CoreServices: FC = () => {
  return (
    <section className={styles.coreServices}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Core Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Card
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 