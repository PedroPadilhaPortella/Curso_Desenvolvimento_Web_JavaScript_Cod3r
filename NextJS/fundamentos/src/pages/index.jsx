import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <h1>Fundamentos do NextJS e React</h1>
            <Link href="/estiloso">Link para Estiloso</Link>
            <br />
            <Link href="/app">Link para App</Link>
        </div>
    );
}