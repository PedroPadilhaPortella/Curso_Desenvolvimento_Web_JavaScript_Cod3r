export default function Título(props) {
    
    return (
        <div className='flex flex-col justify-center'>
            <h1 className="px-5 py-2 text-3xl">{props.children}</h1>
            <hr className="border-2 border-purple-500" />
        </div>
    );
}