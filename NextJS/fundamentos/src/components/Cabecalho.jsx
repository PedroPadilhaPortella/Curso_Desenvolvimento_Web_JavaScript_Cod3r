export default function Cabecalho(props) {
    return (
        <header>
            <h1>Fundamentos do React com NextJS</h1>
            <p>{props.subtitle ?? "Título Genérico"}</p>
            <p>R$ {props.preco}</p>
        </header>
    )
}