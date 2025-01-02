import styles from './TwoColumnRow.module.css'

type TwoColumnRow = {
    children: React.ReactNode;
}
export default function TwoColumnRow({children}:TwoColumnRow) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}