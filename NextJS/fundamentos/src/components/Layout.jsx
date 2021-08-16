import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import Navegador from './Navegador';

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Navegador route="/" title="Voltar"></Navegador>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}