import { useContext } from "react";
import TodoContext from "./TodoContext";

function Todo(props) {

    const {deleteTodo} = useContext(TodoContext);

    return (
        <div className="container">
            <div className="col-sm-6 shadow row shadow my-2">
                <p className="my-2">{props.name}  <button className="btn btn-sm btn-danger ms-4" onClick={() => deleteTodo(props.id)}>Delete</button>  </p>
            </div>
        </div>
    )
}

export default Todo;