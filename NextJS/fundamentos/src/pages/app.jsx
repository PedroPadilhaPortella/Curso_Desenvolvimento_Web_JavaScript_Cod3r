import { Fragment } from "react"
import Link from 'next/link';
import Cabecalho from "../components/Cabecalho"

export default function App() {
    return (
        <>
            <Cabecalho subtitle="Aprenda React usando o framework NextJS" preco={19.99} />
            <Link href="/">Voltar</Link>
        </>
    )
}