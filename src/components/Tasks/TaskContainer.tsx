import { useState } from "react";
import { Input } from "../Input/Input";
import { EmptyToDo } from "../Todo/EmptyToDo";
import { ToDo } from "../Todo/ToDo";

import styles from "./Tasks.module.css";

export interface TaskDTO {
  task: string;
  isComplete: boolean;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<TaskDTO[] | []>([]);
  
  function handleRemoveTask(index: number) {
    const newTask = [...tasks];

    newTask.splice(index, 1);
    setTasks(newTask);
    
  }

  function handleIsComplete(position: number) {
    const newTask = [...tasks];

    newTask[position].isComplete = !newTask[position].isComplete;
    setTasks(newTask);
  }

  const completedTask = tasks.filter(task => task.isComplete === true);


  return (
    <div className={styles.container}>
      
        <Input tasks={tasks} setTasks={setTasks}/>

        <div className={styles.tasksContainer}>
          
            <strong>
              Created tasks <span>{tasks.length}</span>
            </strong>

          
            <strong className={styles.doneCounter}>
              Done <span>{completedTask.length}</span>
            </strong>
          
        </div>
        {tasks.length === 0 ? <EmptyToDo /> :
        <div>
          {tasks.map((content, index) => (
          <ToDo
            handleIsComplete={handleIsComplete}
            onDeleteTask={handleRemoveTask}
            key={index}
            position={index}
            task={content}
          />
        ))}
        </div>
        }
        
        
        
        
    </div>
  );
}
