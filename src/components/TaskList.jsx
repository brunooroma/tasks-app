import TaskCard from "./TaskCard";

const TaskList = ({tasks, deleteTask}) => {

  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No hay tareas cargadas</h1>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
