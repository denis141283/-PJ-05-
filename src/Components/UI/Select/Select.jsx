import React from "react";
import styles from "./Select.module.css";

const Select = ({ id, tasks, defaultValue, moveTask }) => {
  return (
    <select
      defaultValue={"default"}
      className={styles.list_select}
      onChange={(event) => moveTask(event.target.value)}
    >
      <option disabled={true} hidden value="default">
        {defaultValue}
      </option>
      {tasks[0].tasks.map((task) => (
        <option key={task.id} value={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );
};

export default Select;