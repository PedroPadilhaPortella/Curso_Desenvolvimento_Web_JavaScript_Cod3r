import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"
import Navegador from "../components/Navegador";

export default function App() {
    return (
        <Layout>
            <Cabecalho subtitle="Aprenda React usando o framework NextJS" preco={19.99} />
        </Layout>
    )
}