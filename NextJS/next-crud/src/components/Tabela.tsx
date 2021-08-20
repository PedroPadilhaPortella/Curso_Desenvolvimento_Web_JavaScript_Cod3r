import Cliente from '../core/Cliente';
import { IconeDelete, IconeEdit } from './Icones';

interface TabelaProps {
    clientes: Cliente[];
    clienteSelected?: (cliente: Cliente) => void;
    clienteDeleted?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {

    const showActions = props.clienteSelected || props.clienteDeleted;

    function renderHeaderTable() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {showActions ? ( <th className='p-4'>Ações</th> ): false }
            </tr>
        );
    }
    
    function renderActions(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelected ? (
                    <button onClick={() => props.clienteSelected(cliente)}
                    className={`flex justify-center items-center p-2 m-1 text-green-600 rounded-full hover:bg-purple-50`}>
                        {IconeEdit}
                    </button>
                ) : false}

                {props.clienteDeleted ? (
                    <button onClick={() => props.clienteDeleted(cliente)}
                    className={`flex justify-center items-center p-2 m-1 text-red-600 rounded-full hover:bg-purple-50`}>
                        {IconeDelete}
                    </button>
                ) : false}
            </td>
        );
    }
    
    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {showActions ? renderActions(cliente) : false }
                </tr>
            );
        });
    }


    return (
        <table className="w-full overflow-hidden rounded-xl">
            <thead className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}>
                {renderHeaderTable()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    );
}