import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';
import Saudacao from './components/Saudacao';
import Multi, { BoaNoite } from './components/MultiplosComponentes';
import Pai from './components/Pai';
import Filho from './components/Filho';

ReactDOM.render(
    <div>
        <Welcome nome="Pedro Portella" dia={30} />
        <Multi.BoaTarde nome="Daniel" />
        <BoaNoite nome="Casalli" />
        <hr/>
        <Saudacao tipo="Bom dia" nome="Pedro Portella" />
        <hr/>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Carla" sobrenome="Silva" />
            <Filho nome="Natan" sobrenome="Silva" />
        </Pai>
    </div>,
    document.getElementById('root')
)