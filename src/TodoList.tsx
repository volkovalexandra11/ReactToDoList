import { makeAutoObservable } from 'mobx'

type TodoType = {
    id: string,
    title: string,
    completed: boolean
}

class Todo {
    todos : Array<TodoType> = [
        { id: '01', title: 'Hello', completed: false },
        { id: '02', title: 'Hello2', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    createTodo(todo : TodoType) {
        console.log(`create`)
        this.todos.push(todo)
    }

    deleteTodo(id: string) {
        console.log(`delete`)
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id: string) {
        console.log(`complete`)
        this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

}

export default new Todo()