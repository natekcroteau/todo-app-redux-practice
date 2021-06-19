// import ToggleButton from '@material-ui/lab/ToggleButton';


export default function TodoCell(props){

    const { date, name, completed } = props

    return(
        <div className="todo-cell">
            <h1>{name}</h1>
            <h2>{date}</h2>
            <h3>Completed</h3>
            {/* <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
                >
                <CheckIcon />
            </ToggleButton> */}
        </div>
    )
}