import sheetImg from '../../assets/sheet.svg';

import styles from "./EmptyToDo.module.css";

export function EmptyToDo() {
  return (
    <>

      <div className={styles.container}>
        <img src={sheetImg} alt="" />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
          
      </div>
    </>
  );
}
