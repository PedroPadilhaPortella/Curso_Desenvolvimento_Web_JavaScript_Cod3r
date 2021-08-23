import { useEffect, useState } from 'react';
import ClienteCollection from '../backend/db/ClienteCollection';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente';
import ClienteRepository from '../core/ClienteRepository';
import styles from '../styles/Home.module.css'

export default function Home() {

    const repository: ClienteRepository = new ClienteCollection()

    const [cliente, setCliente] = useState<Cliente>(new Cliente())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visible, setVisibility] = useState<'table' | 'form'>('table')

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repository.getAll().then(clientes => {
            setClientes(clientes)
            setVisibility('table')
        })
    }
    
    function novoCliente(cliente: Cliente) {
        setCliente(new Cliente());
        setVisibility('form');
    }

    async function salvarCliente(cliente: Cliente) {
        await repository.save(cliente)
        obterTodos()
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        setVisibility('form');
    }
    
    async function clienteExcluido(cliente: Cliente) {
        await repository.remove(cliente)
        obterTodos()
    }

 
    return (
        <div className={`flex h-screen justify-center items-center  bg-gradient-to-r 
            from-purple-500 to-blue-600 text-white`}>
            <Layout titulo="Cadastro">

                {visible === 'table' ? (
                    <>
                        <div className="flex justify-end">
                            <Botao className='mb-4' cor="green" onClick={novoCliente}>
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
                    <Formulario cliente={cliente} cancel={() => setVisibility('table')} clientHasChanged={salvarCliente}/>
                )}
            </Layout>
        </div>
    )
}
