import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (titleTask) => {
    setTasks([...tasks, {
      title: titleTask,
      id: tasks.length,
      description: titleTask
    }]);
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
