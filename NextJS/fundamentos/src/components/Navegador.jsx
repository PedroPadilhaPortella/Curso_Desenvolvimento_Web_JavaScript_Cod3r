import Link from 'next/link';
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.route} passHref={true}>
            <div className={styles.navegador} style={{ backgroundColor: props.color ?? 'dodgerblue' }}>
                {props.title}
            </div>
        </Link>
    )
}