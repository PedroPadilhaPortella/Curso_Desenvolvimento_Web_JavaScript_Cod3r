/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Cliente from '../core/Cliente';
import ClienteRepository from '../core/ClienteRepository';
import ClienteCollection from '../backend/db/ClienteCollection';
import useTableOrForm from './useTableOrForm';

export default function useClientes() {

    const repository: ClienteRepository = new ClienteCollection()

    const [cliente, setCliente] = useState<Cliente>(new Cliente())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const { tableIsVisible, showForm, showTable } = useTableOrForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repository.getAll().then(clientes => {
            setClientes(clientes)
            showTable()
        })
    }

    function novoCliente(cliente: Cliente) {
        setCliente(new Cliente());
        showForm()
    }
    
    async function salvarCliente(cliente: Cliente) {
        await repository.save(cliente)
        obterTodos()
    }
    
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        showForm()
    }

    async function excluirCliente(cliente: Cliente) {
        await repository.remove(cliente)
        obterTodos()
    }

    return { 
        salvarCliente, selecionarCliente, excluirCliente, obterTodos, novoCliente,
        cliente, clientes, tableIsVisible, showTable
    }
}