import React from 'react'
import Todo from './Todo'

function TodoLIst({todos,setTodos}) {
    return (
        <ul>
            {todos.map((todo)=>(
                <Todo text={todo.text} key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>
            ))}
        </ul>
    )
}

export default TodoLIst
