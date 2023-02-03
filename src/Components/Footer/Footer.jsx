import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ tasks, name }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.tasks}>
          <p>Active tasks: {tasks[0].tasks.length}</p>
          <p>Finished tasks: {tasks[3].tasks.length}</p>
        </div>
        <p className={styles.by}>
          Kanban board by: {name} &nbsp; &nbsp; Year: {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;