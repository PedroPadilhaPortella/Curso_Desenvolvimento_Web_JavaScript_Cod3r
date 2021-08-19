import Layout from '../components/Layout';

export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {

    return (
        <Layout>
            <h1>Geração de Conteúdo Estático</h1>
            <p>{props.numero}</p>
        </Layout>
    )
}