export const TaskItem = ({isChecked, taskName, onTaskChange}) =>{
    const styleOfheComponents ={
        textDecoration: isChecked? "line-through":"none",
    };

    return(
        <li>
            <input onChange={onTaskChange} checked={isChecked} type="checkbox"/>
            <span style={styleOfheComponents}>{taskName}</span>
       </li>
    );
};