import {tasks as data} from './tasks.js'
import {useState, useEffect} from 'react'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

  return (
    <div>
        {tasks.length === 0 ? <h1>No hay tareas cargadas</h1> :
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))
        }
        
        </div>
}
    </div>
  )
}

export default TaskList