import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

const TaskList = () => {

  const {tasks} = useContext(TaskContext)
  return (
    <div >
      {tasks.length === 0 ? (
        <h1 className="text-white text-4xl font-bold text-center">No hay tareas cargadas</h1>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
