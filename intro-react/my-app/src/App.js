import './App.css';
import { TaskItem } from './TaskItem';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      taskName: "Estudiar los tiempos de las canciones"
    },
    {
      isCompleted: false,
      taskName: "Asignar los instrumentos a los participante"
    },
    {
      isCompleted: true,
      taskName: "Realizar un ensayo de ensamble"
    },
    {
      isCompleted: false,
      taskName: "Rehacer la grabacion del audio y su respectiva edición"
    },
    {
      isCompleted: true,
      taskName: "Realizar la grabacion del video y montarlo a la plataforma"
    }
  ]);

  const onTaskChangeHandler = (index) =>  () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };


  return (
    <main>
      <form>
        <input type="text" placeholder="Add Task"></input>
        <button>Create Task</button>
      </form>

     <ul>
       {tasks.map((task, index) => {
         return <TaskItem
                  isChecked={task.isCompleted}
                  taskName={task.taskName}
                  onTaskChange={onTaskChangeHandler(index)}
                />
       })}
     </ul> 
    </main>
  );
}

export default App;
