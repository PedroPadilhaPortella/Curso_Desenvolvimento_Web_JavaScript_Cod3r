import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente';
import styles from '../styles/Home.module.css'

export default function Home() {

const clientes = [
    new Cliente('pedro', 32, '1'),
    new Cliente('pedro', 32, '2'),
    new Cliente('pedro', 32, '3'),
    new Cliente('pedro', 32, '4'),
]

function clienteSelecionado(cliente: Cliente) {
    console.log('selecionar');
    
}
function clienteExcluido(cliente: Cliente) {
    console.log('excluir');
    
}

  return (
    <div className={`flex h-screen justify-center items-center 
    bg-gradient-to-r from-purple-500 to-blue-600 text-white`}>
        <Layout titulo="Cadastro">
            <Tabela clientes={clientes} clienteSelected={clienteSelecionado} clienteDeleted={clienteExcluido}/>
        </Layout>
    </div>
  )
}
