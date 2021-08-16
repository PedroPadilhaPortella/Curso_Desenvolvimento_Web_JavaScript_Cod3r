import Navegador from '../components/Navegador';

export default function Index() {
    return (
        <>
            <h1>Fundamentos do NextJS e React</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh'
            }}>
                <Navegador route="/estiloso" title="Link para Estiloso" color="turquoise"></Navegador>
                <Navegador route="/app" title="Link para App" color="magenta"></Navegador>
                <Navegador route="/jsx" title="Link para JSX"></Navegador>
                <Navegador route="/navegacao" title="Link para Navegacao #01" color="crimson"></Navegador>
            </div>
        </>
    );
}