import styles from './Headers.module.css'

type MainHeaderProps = {
    children: React.ReactNode;
}

export default function MainHeader({children}: MainHeaderProps) {
    return (
        <div>{children}</div>
    )
}