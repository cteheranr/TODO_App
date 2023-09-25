import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item : todo, 
        saveItem : saveTodo,
        loading,
        error,
       } = useLocalStorage('TODO_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodo = todo.filter(todo => !!todo.completed).length;
      const allTodo = todo.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
      const counterTodo = todo.length;
    
      const addTodo = (text) =>{
        const newTodos = [...todo];
        newTodos.push({
          text,
          completed: false, 
        })
        saveTodo(newTodos);
      }

      const completeTodo= (text)=>{
        const newTodos = [...todo];
        const indexTodo = todo.findIndex((todo)=>
          todo.text === text
        );
        newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
        saveTodo(newTodos);
      }
    
      const deleteTodo= (text)=>{
        const newTodos = todo.filter((todo)=>
          todo.text !== text
        );
        saveTodo(newTodos);
      }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            allTodo,
            counterTodo,
            searchValue,
            openModal,
            setSearchValue,
            completeTodo,
            deleteTodo,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };