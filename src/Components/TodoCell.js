



export default function TodoCell(props){

    const { name, completed } = props

    return(
        <div className="todo-cell">
            <h1>{name}</h1>
            
        </div>
    )
}