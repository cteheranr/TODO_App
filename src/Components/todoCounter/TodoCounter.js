import './todoCounter.css'
import { MdCelebration } from "react-icons/md";
import React from 'react';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const {
    completedTodo,
    counterTodo,
    loading
  } = React.useContext(TodoContext);
  if(completedTodo === counterTodo && !loading && counterTodo !== 0){
    return(
      <h1 className='title-counter number'>
        <span className='celebration'><MdCelebration/></span> Excelente has completado todos los TODOs! <span><MdCelebration/></span>
    </h1>
    )
  }
  return (
    <h1 className='title-counter'>
      Has completado <span className='number'>{completedTodo}</span> de{" "}
      <span className='number'>{counterTodo}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
