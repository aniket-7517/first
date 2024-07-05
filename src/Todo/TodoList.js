import { useContext } from "react";
import TodoContext from "./TodoContext";
import Todo from "./Todo";

function TodoList() {

    const {todos} = useContext(TodoContext);

    return (
        <div className="container">
            <h4>Todo List</h4>
            <div className="row my-2">
                <div className="col-sm">
                    {todos.map(todo => (
                        <div>
                            <Todo {...todo}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList;