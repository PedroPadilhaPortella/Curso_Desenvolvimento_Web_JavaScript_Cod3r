import Navegador from '../components/Navegador';

export default function Index() {
    return (
        <>
            <h1>Fundamentos do NextJS e React</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <Navegador route="/estiloso" title="Link para Estiloso" color="turquoise"></Navegador>
                <Navegador route="/app" title="Link para App" color="magenta"></Navegador>
                <Navegador route="/jsx" title="Link para JSX"></Navegador>
                <Navegador route="/navegacao" title="Link para Navegacao #01" color="crimson"></Navegador>
                <Navegador route="/cliente/5" title="Link para Cliente" color="navy"></Navegador>
                <Navegador route="/estado" title="Link para Estado" color="fuchsia"></Navegador>
                <Navegador route="/integracao1" title="Integração API 1" color="chocolate"></Navegador>
                <Navegador route="/estatico" title="Conteúdo Estático" color="plum"></Navegador>
            </div>
        </>
    );
}