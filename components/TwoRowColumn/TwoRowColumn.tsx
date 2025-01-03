import React from 'react';
import styles from './TwoRowColumn.module.css';

type TwoRowColumnProps = {
    width: string;
    children: React.ReactNode;
}

export default function TwoRowColumn({ width = '400px', children }: TwoRowColumnProps) {

    return (
        <div style={{width: `${width}`}} className={styles.container}>
                    {children}
        </div>
    );
}