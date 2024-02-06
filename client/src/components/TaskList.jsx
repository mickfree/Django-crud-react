import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api";
import {TaskCard} from './TaskCard'
export function TaskList() {

  const [task,setTask] = useState([]);
    
  useEffect(() => {
    async function loadTask() {
        const res = await getAllTask();
        setTask(res.data)
    }
    loadTask();
  }, []);

  return (<div className="grid grid-cols-3 gap-3">
    {task.map(task =>(
      <TaskCard key={task.id} task={task}/>
    ))}
  </div>);
}
