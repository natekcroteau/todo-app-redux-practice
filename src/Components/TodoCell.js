// import ToggleButton from '@material-ui/lab/ToggleButton';


export default function TodoCell(props){

    const { date, name, completed } = props

    return(
        <div className="todo-cell">
            <h1>Todo: {name}</h1>
            <h2>{date}</h2>
            <button>Done?</button>
        </div>
    )
}