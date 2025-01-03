'use client'

import { useEffect, useState } from 'react';
import styles from './CardOne.module.css'

type CardOneProps = {
    width?: string;
    shadow?: string;
    radius?: string;
    title?: string;
    children: React.ReactNode;
}

export default function CardOne({width='sm', shadow='1', radius='sm', title, children}: CardOneProps) {
    const [widthStyle, setWidthStyle] = useState<string>('');
    const [shadowStyle, setShadowStyle] = useState<string>('');
    const [radiusStyle, setRadiusStyle] = useState<string>('');
    useEffect(() => {
        // Handle width-based styles
        switch (width) {
            case 'sm':
                setWidthStyle(styles.widthSmall);
                break;
            case 'md':
                setWidthStyle(styles.widthMedium);
                break;
            case 'lg':
                setWidthStyle(styles.widthLarge);
                break;
            case 'xlg':
                setWidthStyle(styles.widthXtraLarge);
                break;
            default:
                setWidthStyle(styles.widthSmall); // Default
        }

        // Handle shadow-based styles
        switch (shadow) {
            case '1':
                setShadowStyle(styles.shadow1);
                break;
            case '2':
                setShadowStyle(styles.shadow2);
                break;
            case '3':
                setShadowStyle(styles.shadow3);
                break;
            default:
                setShadowStyle(styles.shadow1); // Default
        }

        // Handle radius-based styles
        switch (radius) {
            case 'sm':
                setRadiusStyle(styles.radiusSmall);
                break;
            case 'md':
                setRadiusStyle(styles.radiusMedium);
                break;
            case 'lg':
                setRadiusStyle(styles.radiusLarge);
                break;
            default:
                setRadiusStyle(styles.radiusSmall); // Default
        }
    }, [width, shadow, radius]);

    return (
        <div>
            <h3>{title}</h3>
            <div className={`${styles.cardContainer} ${widthStyle} ${shadowStyle} ${radiusStyle}`}>
                {children}
            </div>
        </div>
    )
}