import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), done: false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((todo) => todo.id != id));
    }


    const toggleDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => 
                todo.id === id ? {...todo, done: !todo.done } : todo
            )
        );
    };

    const deleteAllTodos = () => {
        if (window.confirm("Are you sure you want to delete all tasks ?")) {
            setTodos([]);
        }
    };






    return (
        <div>
            <input 
            placeholder="Add your todo here..." 
            value={newTodo} 
            onChange={updateTodoValue} 
            ></input>
            <br/><br/>

            <button onClick={addNewTask}>Add Task</button>
            <br/><br/><br/>


            <hr/>
            <h4>Task Todo</h4>
            <ol>
                {
                    todos.map((todo) => ( 
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.done ? "line-through" : "none"}}>
                                {todo.task}
                            </span>


                            &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;

                            <button onClick={() => toggleDone(todo.id)}>Task Done</button>
                        </li>
                    ))
                }
            </ol>

                <br/><br/><br/>
            <button onClick={deleteAllTodos} style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>Delete All</button>
        </div>
    )
}





