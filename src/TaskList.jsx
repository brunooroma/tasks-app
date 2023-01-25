import useGetTasks from "./hooks/useGetTasks";

const TaskList = () => {
  const { tasks } = useGetTasks();

  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No hay tareas cargadas</h1>
      ) : (
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
