export default function Jsx() {
    const language = 'Javascript';
    const data = { nome: "Pedro Portella", idade: 20, nacionalidade: 'Brasileiro' }
    const jsx = <h1>JSX no Javascript</h1>

    function next(language) {
        return <p>O NextJS e o React usam a linguagem {language}</p>
    }

    return (
        <div>
            <h1>JSX é um conceito central</h1>
            {next(language)}
            <p>Número Aleatório: { Math.floor(Math.random() * 100)}</p>
            <p>{JSON.stringify(data)}</p>
            {jsx}
        </div>
    )
}