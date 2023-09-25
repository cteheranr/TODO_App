import './btnCreateTodo.css'
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function BtnCreateTodo({setOpenModal}){
    const {
        openModal
    } = React.useContext(TodoContext);
    return(
        <button className="btn-create" onClick={
            ()=>{
                setOpenModal(state => !state);
            }
        }>
            { !openModal && <span className='text'>Agregar TODO</span> }
            { openModal && <span className='text'>Cancelar</span> }
        </button>
    );
}

export { BtnCreateTodo };