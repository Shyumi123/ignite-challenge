import { Trash } from "phosphor-react";
import checkImg from "../../assets/check.svg";
import checkedImg from "../../assets/checked.svg";
import { TaskDTO } from "../Tasks/TaskContainer";


import styles from "./ToDo.module.css";

interface ToDo {
  task: TaskDTO; 
  handleIsComplete: (position: number) => void;
  onDeleteTask: (index: number) => void;
  position: number;
}

export function ToDo({task, onDeleteTask, position, handleIsComplete}: ToDo) {

  return (
    <div className={styles.todoContainer}>

      <div className={styles.todoContent}>
        <button onClick={() => {handleIsComplete(position)}} type="button">
          {!task.isComplete ? <img src={checkImg} alt="Check" /> : <img src={checkedImg} alt="Check" />}
          
        </button>
        {!task.isComplete ? <span className={styles.isActive}>{task.task}</span> : <span style={{ opacity: 0.5 }}><s>{task.task}</s></span> }

      </div>

      <button onClick={() => {onDeleteTask(position)}} type="button">
        <Trash className={styles.trashBin} color='white'size={24} />
      </button>
     
    </div>
  );
}
