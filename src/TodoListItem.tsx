import React from "react";
import {Todo, ToggleTodo} from "./types";
// @ts-ignore
import styled from "styled-components"

export interface TodoItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoItemProps> = ({todo, toggleTodo}) => {

    return (
        <li>
            <label style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                <input
                    type="checkbox"
                    onChange={ () => toggleTodo(todo)}
                    checked={todo.complete}
                />
                {todo.text}
            </label>
        </li>

    )
}

export default TodoListItem

const ToDoListDiv = styled.div`
color:empty
`