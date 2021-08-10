import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Link href="/"><a>Voltar</a></Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}