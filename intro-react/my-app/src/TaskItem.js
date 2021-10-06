export const TaskItem = (props) =>{
const {isChecked, taskName} = props;
const styleOfheComponents ={
    textDecoration: isChecked? "line-through":"",
};

    return(
        <li>
         <input checked={isChecked} type="checkbox"/>
         <span style={styleOfheComponents}>{taskName}</span>
       </li>
    );
};