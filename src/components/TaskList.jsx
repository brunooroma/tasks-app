import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

const TaskList = () => {

  const {tasks} = useContext(TaskContext)
  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No hay tareas cargadas</h1>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
