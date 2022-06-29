import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import plusImg from "../../assets/plus.svg";
import { TaskDTO } from "../Tasks/TaskContainer";

import styles from "./Input.module.css";

interface Input {
  setTasks: Dispatch<SetStateAction<TaskDTO[] | []>>;
  tasks: TaskDTO[] | [];
}

export function Input({setTasks, tasks}: Input) {
  const [newTask, setNewTask] = useState('');
  console.log(tasks)

  

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, {task: newTask, isComplete: false}]);
    setNewTask('');
  }
  
  return (
    <form onSubmit={handleAddTask} className={styles.inputContainer}>
      <input required value={newTask} onChange={e => setNewTask(e.target.value)} type="text" placeholder="Add a new task" />

      <button type="submit">
        <div className={styles.buttonWrapper}>
          <span className={styles.buttonText}>Criar</span>
          <img src={plusImg} alt="" />
        </div>
      </button>
    </form>
  );
}
