import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

const {tasks} = useContext(TaskContext)


  /* Usamos el if para ver si task esta vacio o no */
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> No hay tareas aun</h1>;
  }
  return (
    /* Aqui ponemos dentro del div un h1 y un parrafo pero estos van dentro de la funcion del metodo .map este recorre todas las tareas y pone el title en el h1 y la description en el parrafo.  */
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
