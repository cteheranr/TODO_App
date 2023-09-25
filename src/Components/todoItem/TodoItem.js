import "./todoItem.css";
import { MdDone } from "react-icons/md";

function TodoItem(props) {
  return (
    <li>
      <div className="todo-container">
        <span 
          className={`btn succes ${props.completed && "btn-completed"}`}
          onClick={props.onComplete}
        >
          <MdDone />
        </span>
        <p className={`todo-description ${props.completed && "todo-completed"}`}>
          {props.text}
        </p>
        <span className="btn delete" onClick={props.onDelete}>X</span>
      </div>
    </li>
  );
}

export { TodoItem };
