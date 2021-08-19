import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integracao1() {

    let [cliente, setCliente] =  useState({})
    let [codigo, setCodigo] =  useState(1)

    async function getClient() {
        const response = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const json = await response.json()
        setCliente(json)
    }

    // function getClient() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //         .then(response => response.json())
    //         .then(dados => setCliente(dados))
    // }

    return (
        <Layout>
            <h1>Integração com API</h1>
            <div>
                <label>Obter Cliente por Id: </label>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
                <button onClick={getClient}>Search</button>
            </div>
            <ul>
                <li>Id: {cliente.id}</li>
                <li>Nome: {cliente.name}</li>
                <li>Email: {cliente.email}</li>
                <li>Idade: {cliente.idade}</li>
            </ul>
        </Layout>
    )
}