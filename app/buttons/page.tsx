'use client'

import CardOne from "../cards/components/CardOne/CardOne";
import TwoColumnRow from "../row-layouts/TwoColumnRow/TwoColumnRow";
import MainButton from "./components/MainButton/MainButton";

export default function Buttons() {
    function handleClick() {
        console.log('clicked')
    }

    const buttonCSS = `
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.small {
    font-size: 12px;
    padding: 5px 10px;
}

.medium {
    font-size: 16px;
    padding: 10px 20px;
}

.large {
    font-size: 20px;
    padding: 15px 30px;
}

.blue {
    background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

    `

    const buttonCode = `
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
        <button className={\`\${styles.btn} \${sizeStyle} \${colorStyle}\`\} onClick={handleClick}>{text}</button>
    )
}
    `
    return (
        <>
            <h1>Buttons</h1>
            <MainButton
                text={'Contact Us'}
                handleClick={handleClick}
            />
            <TwoColumnRow>
                <CardOne
                    width={'lg'}
                >
            <h3>Button Code</h3>
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
                    </pre>
                </CardOne>
                <CardOne
                    width={'lg'}
                >
                <h3>Button Css</h3>
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
                        <code>{buttonCSS}</code>
                    </pre>
                </CardOne>
            </TwoColumnRow>

        </>
    )
}