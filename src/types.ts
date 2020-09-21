export type Todo = {
    text: string,
    complete: boolean
}

export type ToggleTodo = (selectedTodo: Todo) => void
export type addTodo = (newTodo: string) => void

export const initialTodos: Array<Todo> = [
    {text: "Walk The Dog", complete: false},
    {text: "Do The Bed", complete: false},
    {text: "Cook Food", complete: false}
]
