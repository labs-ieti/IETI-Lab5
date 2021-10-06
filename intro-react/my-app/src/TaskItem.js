export const TaskItem = (props) =>{
const {isChecked, taskName} = props;

    return(
        <li>
         <input checked={isChecked} type="checkbox"/>
         <span style={}>{taskName}</span>
       </li>
    );
};