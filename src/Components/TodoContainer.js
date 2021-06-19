import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default function TodoContainer(){

    return(
        <div className="todo-container">
            <TodoForm />
            <TodoList />
        </div>
    )
}