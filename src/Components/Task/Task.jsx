import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Task.module.css";

const Task = ({ name, id, block, removeTask }) => {
  const handleDelete = () => {
    removeTask(block, id);
  };

  return (
    <div className={styles.list_container}>
      <Link className={styles.list_item} to={`/tasks/${id}`}>
        {name}
      </Link>
      <span className={styles.list_icon} onClick={handleDelete}>
        <FaTimes />
      </span>
    </div>
  );
};

export default Task;