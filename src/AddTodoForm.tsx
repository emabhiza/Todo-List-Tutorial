import React, {ChangeEvent, FormEvent, useState} from "react";
import {addTodo} from "./types";

interface AddTodoProps {
    addNewTodo: addTodo
}

export const AddTodoForm: React.FC<AddTodoProps> = ({addNewTodo}) => {
    const [newTodo, setNewTodo] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        newTodo.trim() !== "" && setNewTodo(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addNewTodo(newTodo)

    }
    return (<form>
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>

    </form>)
}