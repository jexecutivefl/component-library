'use client'

import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import CardOne from "../cards/components/CardOne/CardOne";
import MainButton from "../buttons/components/MainButton/MainButton";
import { useState } from "react";
import TwoColumnRow from "@/components/TwoColumnRow/TwoColumnRow";

const leftFeatures = [
    {
      title: 'SERVICES START AT 2.99%',
      description: 'Find a service plan that fits your needs. Fully integrated and customizable.',
      imageSrc: '/gears.png',
      imageAlt: 'Gears Icon',
      imageWidth: 62,
      imageHeight: 58,
    },
    {
      title: 'SEAMLESS AND EASY',
      description: 'Processes fit to your practice to easily incorporate our service.',
      imageSrc: '/seamlesseasy.png',
      imageAlt: 'Seamless Icon',
      imageWidth: 62,
      imageHeight: 62,
    },
  ];
  
  const rightFeatures = [
    {
      title: 'CERTIFIED CODERS',
      description: 'Fully Certified, and specialize in maximizing visit profitability.',
      imageSrc: '/certified.png',
      imageAlt: 'Certified Icon',
      imageWidth: 62,
      imageHeight: 62,
    },
    {
      title: 'REVENUE CYCLE SPECIALISTS',
      description: 'Tried and tested techniques that optimize the revenue cycle.',
      imageSrc: '/growth.png',
      imageAlt: 'Growth Icon',
      imageWidth: 62,
      imageHeight: 62,
    },
  ];
  
  const centerImage = {
    src: '/clipboard-with-pills.png',
    alt: 'Clipboard with Pills',
    width: 600,
    height: 600,
  };

export default function FeatureGridPage(){
        const [copySuccess, setCopySuccess] = useState('')
        function handleClick() {
            console.log('clicked')
        }
        function LeftSide() {
            return (
                <CardOne
                    width={'lg'}
                    title={'Typescript Code'}
                >
                    <pre
                        style={{
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            overflowX: 'auto',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                        }}
                    >
                        <code>{buttonCode}</code>
                        <MainButton handleClick={() => handleCopyCode(buttonCode)} text={'copy code'} />
                    </pre>
                </CardOne>
            )
        }
    
        function RightSide() {
            return (
                <CardOne
                width={'lg'}
                title={'CSS'}
            >
                <pre
                    style={{
                        backgroundColor: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '5px',
                        overflowX: 'auto',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                    }}
                >
                    <code>
                        {buttonCSS}
                        <MainButton handleClick={() => handleCopyCode(buttonCSS)} text={'copy code'} />
                    </code>
                </pre>
            </CardOne>
            )
        }
    
        const buttonCSS = `
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

.contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    gap: 20px; /* Adds spacing between columns */
}

.leftColumn, .rightColumn {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
}

.leftColumn {
    margin-right: 20px;
}

.rightColumn {
    margin-left: 20px;
}

.section {
    margin-bottom: 20px;
    text-align: center; /* Center-align content for better appearance */
}

.h2 {
    color: var(--heading-color, #424040);
    font-family: "Cera Pro", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0; /* Adds spacing around the heading */
}

.p {
    color: var(--paragraph-color, #706C6C);
    font-family: "Cera Pro", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75; /* Improves readability */
    margin: 0;
}

.imageContainer {
    flex: 0 1 600px; /* Allows the image container to shrink/grow responsively */
    display: flex;
    justify-content: center;
    align-items: center;
}

.centerImage {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures the image maintains its aspect ratio */
}

/* Responsive Design */
@media (max-width: 1024px) {
    .contentWrapper {
        flex-direction: column; /* Stacks columns vertically */
        align-items: center;
    }

    .leftColumn, .rightColumn {
        margin: 0; /* Removes side margins for smaller screens */
        padding: 10px;
    }

    .imageContainer {
        max-width: 100%;
        height: auto; /* Adjusts the height for smaller screens */
    }

    .h2 {
        font-size: 20px;
    }

    .p {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .h2 {
        font-size: 18px;
    }

    .p {
        font-size: 12px;
        line-height: 1.5;
    }

    .imageContainer {
        height: auto; /* Ensures the image resizes dynamically */
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    .h2 {
        font-size: 16px;
    }

    .p {
        font-size: 12px;
    }
}

    
        `
    
        const buttonCode = `
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

        `
        function handleCopyCode(code) {
            navigator.clipboard
                .writeText(code)
                .then(() => {
                    setCopySuccess('Copied');
                    setTimeout(() => setCopySuccess(''), 2000)
                }).catch(() => {
                    setCopySuccess('Failed to Copy');
                    setTimeout(() => setCopySuccess(''), 2000)
                })
        }
    return (
        <div>
            <h1>Feature Grid</h1>
            <FeatureGrid 
                leftFeatures={leftFeatures}
                rightFeatures={rightFeatures}
                centerImage={centerImage}
            />
                        <TwoColumnRow
                            left={<LeftSide/> }
                            right={<RightSide/>}
                        />
                        {copySuccess && <p style={{ color: 'green', marginTop: '0.5rem' }} >{copySuccess}</p>}
        </div>
    )
}