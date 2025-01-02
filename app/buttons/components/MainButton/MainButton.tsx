'use client'

import { useEffect, useState } from 'react';
import styles from './MainButton.module.css'

type MainButtonProps = {
    text?: string;
    size?: string;
    color?: string;
    handleClick: ()=>void
}

export default function MainButton({ size = 'md', text = 'Click Me!', color = 'blue', handleClick }: MainButtonProps) {
    const [sizeStyle, setSizeStyle] = useState<string>();
    const [colorStyle, setColorStyle] = useState<string>();
    useEffect(() => {
        switch (size) {
            case 'sm':
                setSizeStyle(styles.small)
                break;
            case 'md':
                setSizeStyle(styles.medium)
                break;
            case 'lg':
                setSizeStyle(styles.large)
                break;
            default:
                setSizeStyle(styles.medium)
        }

        // Set color-based styles
        switch (color) {
            case 'red':
                setColorStyle(styles.red);
                break;
            case 'green':
                setColorStyle(styles.green);
                break;
            default:
                setColorStyle(styles.blue);
        }
    }, [size, color])
    return (
        <button className={`${styles.btn} ${sizeStyle} ${colorStyle}`} onClick={handleClick}>{text}</button>
    )
}