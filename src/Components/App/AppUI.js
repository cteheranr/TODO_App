import { TodoCounter } from "../todoCounter/TodoCounter";
import { TodoSearch } from "../todoSearch/TodoSearch";
import { TodoList } from "../todoList/TodoList";
import { BtnCreateTodo } from "../btnTodo/BtnCreateTodo";
import { TodoItem } from "../todoItem/TodoItem";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import './App.css'
import { TodoContext } from "../TodoContext/TodoContext";
import React from "react";
import { ModalCreate } from "../ModalCreate/ModalCreate";
import { TodoForm } from "../TodoForm/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    counterTodo,
    allTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {loading && <TodoLoading />}
          {error && <p>Error al obtener los TODOs</p>}
          {(!loading && counterTodo === 0) && 
            <p className="create-todo">¡Crea tu primer TODO!</p>
          }
          {allTodo?.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      <BtnCreateTodo 
        setOpenModal={setOpenModal} 
      />
      { openModal && <ModalCreate><TodoForm/></ModalCreate>
      }
    </div>
  );
}


export { AppUI };