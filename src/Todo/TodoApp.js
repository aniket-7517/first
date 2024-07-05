import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoContext from "./TodoContext";

function TodoApp() {

    const [todos, setTodos] = useState([{id:1, name : "Ani"}]);

    const addTodo = (name) => {
        setTodos([...todos, {id : todos.length + 1, name}]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return ( 
        <div className="container">
            <div className="row">
                <h4 className="text-center">Todo App</h4>
                <TodoContext.Provider value={{todos, addTodo, deleteTodo}}>
                    <AddTodo/>
                    <TodoList/>
                </TodoContext.Provider> 
            </div>
        </div>
    )
}

export default TodoApp;