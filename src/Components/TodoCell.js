// import ToggleButton from '@material-ui/lab/ToggleButton';


export default function TodoCell(props){

    const { date, name, completed } = props

    return(
        <div className="todo-cell">
            <h2>Todo: {name}</h2>
            <h3>{date}</h3>
            <button>Done?</button>
        </div>
    )
}