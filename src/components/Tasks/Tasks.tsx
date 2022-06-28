import plusImg from "../../assets/plus.svg";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Add a new task" />

        <button type="button">
          <div className={styles.buttonWrapper}>
            <span className={styles.buttonText}>Criar</span>
            <img src={plusImg} alt="" />
          </div>
        </button>
      </div>

      <div className={styles.tasksContainer}>
        <div className={styles.tasksCreated}>
          <strong>
            Created tasks <p>0</p>
          </strong>
        </div>

        <div className={styles.tasksDone}>
          <strong>
            Done <p>0</p>
          </strong>
        </div>
      </div>
    </div>
  );
}
