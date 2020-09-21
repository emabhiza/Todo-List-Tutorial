import React, {useState} from 'react';
import {addTodo, initialTodos, ToggleTodo,} from "./types";
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos)
    const toggleTodos: ToggleTodo = selectedTodos => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodos) {
                return {
                    ...todo,
                    complete: !todo.complete
                };
            }
            return todo;
        });
        setTodos(newTodos)
    };

    const addToDo: addTodo = (newTodo) => {
        setTodos([...todos, {text: newTodo, complete: false}])
    }
    return (<>
            <TodoList todos={todos} toggleTodo={toggleTodos}/>
            <AddTodoForm addNewTodo={addToDo}/>
        </>
    )
};

export default App