import React, { Fragment } from 'react';

export default (props) =>
    <Fragment>
        <h1>Bom dia {props.nome}, hoje é dia {props.dia} de Novembro</h1>
        <h2>Até Breve</h2>
    </Fragment>

// export default (props) =>
//     <div>
//         <h1>Bom dia {props.nome}, hoje é dia {props.dia} de Novembro</h1>
//         <h2>Até Breve</h2>
//     </div>

// export default (props) => 
//     [
//         <h1 key="elementh1">Bom dia {props.nome}, hoje é dia {props.dia} de Novembro</h1>,
//         <h2 key="elementh2">Até Breve</h2>
//     ]