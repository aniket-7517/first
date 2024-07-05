import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

function AddTodo(props) {

    const [todoName, setTodoName] = useState('');
    const { addTodo } = useContext(TodoContext);

    return (
        <div className="container">
            <div className="row">
            <label for="Add-Todo" class="form-label">Add Todo</label>
                <div class="mb-3 col-sm">
                    <input type="text" class="form-control" id="Add-Todo" placeholder="Todo Name..." onChange={(event) => setTodoName(event.target.value)} />
                </div>
                <div className="col-sm">
                    <button className="btn btn-primary" onClick={() => addTodo(todoName)}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;