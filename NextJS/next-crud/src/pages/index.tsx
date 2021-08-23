import { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente';
import styles from '../styles/Home.module.css'

export default function Home() {

    const clientes = [
        new Cliente('pedro', 32, '1'),
        new Cliente('andre', 32, '2'),
        new Cliente('thiago', 32, '3'),
        new Cliente('joao', 32, '4'),
    ]

    const [visible, setVisibility] = useState<'table' | 'form'>('table')

    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente);
    }

    function clienteExcluido(cliente: Cliente) {
        console.log(cliente);
    }

    function salvarCliente(cliente: Cliente) {
        console.log(cliente);
    }


    return (
        <div className={`flex h-screen justify-center items-center  bg-gradient-to-r 
            from-purple-500 to-blue-600 text-white`}>
            <Layout titulo="Cadastro">

                {visible === 'table' ? (
                    <>
                        <div className="flex justify-end">
                            <Botao className='mb-4' cor="green" onClick={() => setVisibility("form")}>
                                Novo Cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelected={clienteSelecionado}
                            clienteDeleted={clienteExcluido}
                        />
                    </>
                ) : (
                    <Formulario cliente={clientes[2]} cancel={() => setVisibility('table')} clientHasChanged={salvarCliente}/>
                )}
            </Layout>
        </div>
    )
}
