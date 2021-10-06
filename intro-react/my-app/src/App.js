import logo from './logo.svg';
import './App.css';
import { TaskItem } from './TaskItem';

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Add Task"></input>
        <button>Create Task</button>
      </form>

     <ul>
       <TaskItem isChecked={true} taskName="Estudiar los tiempos de las canciones"></TaskItem>
       <TaskItem isChecked={false} taskName="Asignar los instrumentos a los participante"></TaskItem>
       <TaskItem isChecked={true} taskName="Realizar un ensayo de ensamble"></TaskItem>
       <TaskItem isChecked={false} taskName="EHacer la grabacion del audio y su respectiva edición"></TaskItem>
       <TaskItem isChecked={true} taskName="Realizar la grabacion del video y montarlo a la plataforma"></TaskItem>      
     </ul> 
    </main>
  );
}

export default App;
