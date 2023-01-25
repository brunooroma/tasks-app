import {tasks as data} from '../tasks.js'
import { useEffect, useState } from "react";

const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return {tasks}
};

export default useGetTasks;
