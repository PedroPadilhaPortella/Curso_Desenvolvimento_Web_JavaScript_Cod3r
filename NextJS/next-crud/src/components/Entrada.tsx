interface InputProps {
    label: string;
    value: any;
    type?: 'text' | 'number';
    placeholder: string;
    readonly?: boolean;
    hasChanged?: (value: any) => void;
}

export default function Entrada(props: InputProps) {

    return (
        <div className={`flex flex-col mb-2`}>
            <label className="mb-4">{props.label}</label>
            
            <input 
                type={props.type ?? 'text'} 
                value={props.value} 
                placeholder={props.placeholder}
                readOnly={props.readonly ?? false} 
                onChange={e => props.hasChanged?.(e.target.value)}
                className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50
                    px-4 py-2 ${props.readonly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    );
}