import React from "react";
import Form from "../Form/Form";
import Task from "../Task/Task";
import styles from "./Tasks.module.css";

const Tasks = ({
  title,
  tasks,
  toggle,
  addTask,
  filterTasks,
  relocateTask,
  removeTask,
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.list_title}>{title}</div>
      <div className={styles.list_inner}>
        {tasks[0].tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            block={tasks[0].id}
            name={task.name}
            removeTask={removeTask}
          />
        ))}
        <Form
          title={title}
          isActive={tasks[0].formActive}
          toggle={toggle}
          id={tasks[0].id}
          addTask={addTask}
          filterTasks={filterTasks}
          relocateTask={relocateTask}
        />
      </div>
    </div>
  );
};

export default Tasks;