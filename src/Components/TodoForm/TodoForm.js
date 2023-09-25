import React from "react";
import './todoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(){
    const {
        openModal,
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return(
        <div className="form">
            <form className="form-content" onSubmit={onSubmit}>
                <label className="title-text">Agrega tu nuevo TODO</label>
                <textarea className="text-area-TODO" 
                    placeholder="Describe el TODO"
                    value={newTodoValue}
                    onChange={onChange}
                    required
                    ></textarea>
                <button className="btn-submit">Agregar</button>
            </form>
        </div>
    );
}

export { TodoForm };