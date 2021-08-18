import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

export default function ClientePorCodigo() {

    const rota = useRouter()

    return (
        <Layout>
            <h1>Navegação Dinâmica</h1>
            <h3>Código = {rota.query.codigo}</h3>
            <h3>Usuário = {rota.query.username}</h3>
        </Layout>
    )
}