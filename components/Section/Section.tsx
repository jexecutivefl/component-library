import React from 'react';
import styles from './Section.module.css';
type SectionProps = {
    children: React.ReactNode;
}
function Section({ children }: SectionProps){
    return (
        <div className={styles.paddedsection}>
            {children}
        </div>
    );
}

export default Section;