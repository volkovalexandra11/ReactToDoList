import React from 'react'
import TodoElement, { TodoProps } from './TodoElement'
//import TodoProps from './TodoElement'

export type TodoListProps = {
    todosList : [TodoProps]
}

function TodoList(props : TodoListProps) {
    function getTodos() {
        const arr = props.todosList;

        return arr.map(
            (el:TodoProps, index: number) => 
            <li key={index}>
                <TodoElement 
                    name={el.name} 
                    description={el.description}
                    expireDate={el.expireDate} 
                    status={el.status}
                />

            </li>
        )
    }

    const todos = getTodos();
    return <ul>{todos}</ul>
}

export default TodoList
