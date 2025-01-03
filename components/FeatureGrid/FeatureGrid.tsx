import Image from 'next/image';
import Section from '../Section/Section';
import styles from './FeatureGrid.module.css';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

interface FeatureGridProps {
  leftFeatures: Feature[];
  rightFeatures: Feature[];
  centerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export default function FeatureGrid({
  leftFeatures,
  rightFeatures,
  centerImage,
}: FeatureGridProps) {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            {leftFeatures.map((feature, index) => (
              <div className={styles.section} key={index}>
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={feature.imageWidth}
                  height={feature.imageHeight}
                />
                <h2 className={styles.h2}>{feature.title}</h2>
                <p className={styles.p}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={centerImage.src}
              alt={centerImage.alt}
              width={centerImage.width}
              height={centerImage.height}
              className={styles.centerImage}
            />
          </div>
          <div className={styles.rightColumn}>
            {rightFeatures.map((feature, index) => (
              <div className={styles.section} key={index}>
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={feature.imageWidth}
                  height={feature.imageHeight}
                />
                <h2 className={styles.h2}>{feature.title}</h2>
                <p className={styles.p}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
