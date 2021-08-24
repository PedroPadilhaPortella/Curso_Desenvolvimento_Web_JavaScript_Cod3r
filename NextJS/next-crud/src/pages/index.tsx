import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes';
import styles from '../styles/Home.module.css'

export default function Home() {

    const { novoCliente, salvarCliente, selecionarCliente, excluirCliente, 
        cliente, clientes, tableIsVisible, showTable } = useClientes()

    return (
        <div className={`flex h-screen justify-center items-center  bg-gradient-to-r 
            from-purple-500 to-blue-600 text-white`}>
            <Layout titulo="Cadastro">

                {tableIsVisible ? (
                    <>
                        <div className="flex justify-end">
                            <Botao className='mb-4' cor="green" onClick={novoCliente}>
                                Novo Cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelected={selecionarCliente}
                            clienteDeleted={excluirCliente}
                        />
                    </>
                ) : (
                    <Formulario cliente={cliente} cancel={showTable} clientHasChanged={salvarCliente}/>
                )}
            </Layout>
        </div>
    )
}
