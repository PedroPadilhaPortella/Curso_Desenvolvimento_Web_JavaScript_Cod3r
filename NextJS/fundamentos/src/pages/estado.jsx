import { useState } from 'react';
import Layout from '../components/Layout';

export default function Estado() {

    // Nos estados do React, o valor nunca é alterado diretamente, 
    // ele só pode ser alterado quando se usa a funcao de alteração de estado

    const state = useState(10)
    let [numero, setNumero] = state // React Hooks

    const incrementar= () => setNumero(numero + 1)
    const decrementar= () => setNumero(numero - 1)

    return (
        <Layout>
            <h1>Componente com Estado</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <div>{numero}</div>
        </Layout>
    )
}