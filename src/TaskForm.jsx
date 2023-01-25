import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
