import { useState } from 'react';
export default function useTableOrForm() {

    const [visible, setVisibility] = useState<'table' | 'form'>('table')

    const showTable = () => setVisibility('table')
    const showForm = () => setVisibility('form')

    return { 
        formularioIsVisible: visible === 'form', 
        tableIsVisible: visible === 'table',
        showForm, showTable 
    }
}