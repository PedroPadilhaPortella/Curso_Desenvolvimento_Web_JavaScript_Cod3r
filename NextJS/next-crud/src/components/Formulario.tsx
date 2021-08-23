import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps {
    cliente?: Cliente;
    clientHasChanged?: (client: Cliente) => void;
    cancel?: () => void;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada label="Id" type="text" value={id} placeholder="Código" />
            ) : false }
            <Entrada 
                label="Nome" 
                type="text" 
                value={nome} 
                placeholder="Nome" 
                hasChanged={setNome} 
            />
            <Entrada 
                label="Idade" 
                type="number" 
                value={idade} 
                placeholder="Idade" 
                hasChanged={setIdade} 
            />
            <div className="flex justify-end">
                <Botao onClick={() => props.clientHasChanged?.(new Cliente(nome, +idade, id))} 
                    cor="blue" className="mr-2">
                        {id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao onClick={props.cancel}>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}