
import React, { useState, useReducer } from "react";
import { initialState, TodoReducer } from "../reducers/TodoReducer";

const TodoList = () => {
    
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const [items, setItems] = useState("");

    const handleChanges = e => {
        setItems(e.target.value);
    };

    return (
        <div>
            {state.todos.map(todo => {
                return <p className={`item${todo.completed ? " completed" : ""}`}
                onClick={() =>
                  dispatch({ type: "TOGGLE_COMPLETED", payload: todo.ID })
                }>{todo.item}</p>;
            })}
            
            <form>
                <input type="text" value={items} onChange={handleChanges} />
                <button onClick={e => { 
                    e.preventDefault();
                    dispatch({type: "ADD_TODO", payload:items});
                    setItems("")
                    }}>Add Todo</button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch({ type: "CLEAR_COMPLETED" })
                    }}>Clear Completed</button>
    
            </form>
        </div>
    )

};

export default TodoList;