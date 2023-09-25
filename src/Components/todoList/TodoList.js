import './todoList.css'
function TodoList(props) {
    return(
      <div className='content-ul'>
        <ul>
          {props.children}
        </ul>
      </div>
    );
  }


export {TodoList};