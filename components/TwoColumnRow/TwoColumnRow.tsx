import React from 'react';
import styles from './TwoColumnRow.module.css'

type TwoColumnRow = {
    left: React.ReactNode;
    right: React.ReactNode;
}
export default function TwoColumnRow({ left, right }: TwoColumnRow) {

    return (
        <div className={styles.container}>
            <div className={styles.left}>{left}</div>
            <div className={styles.right}>{right}</div>
        </div>
    )
}