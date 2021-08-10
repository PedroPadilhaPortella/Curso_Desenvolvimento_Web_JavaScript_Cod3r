import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
    return (
        <Layout>
            <div className={styles.purple}>
                <h1>Estilos usando CSS Modules</h1>
            </div>
        </Layout>
    )
}