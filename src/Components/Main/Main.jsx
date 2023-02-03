import React from "react";
import { Outlet } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import styles from "./Main.module.css";
import { blocks } from "../../Data/structure";

const Main = (props) => {
  const { tasks, changeTasks } = props;

  // Filter tasks blocks by id
  const filterTasks = (id) => {
    return tasks.filter((task) => task.id === id);
  };

  const activateForm = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, formActive: !task.formActive };
      }
      return task;
    });

    changeTasks(newTasks);
  };

  // Add new task to the tasks array of specific block
  const addTask = (id, myTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        let newTasks = [...task.tasks, myTask];
        return { ...task, formActive: false, tasks: newTasks };
      }
      return task;
    });

    changeTasks(newTasks);
  };

  // Remove task by id
  const removeTask = (tasksId, taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) {
        let newTasks = task.tasks.filter((task) => task.id !== taskId);
        return { ...task, formActive: false, tasks: newTasks };
      }
      return task;
    });

    changeTasks(newTasks);
  };

  // Move task to another block
  const relocateTask = (id, from, to) => {
    const currentTask = filterTasks(from)[0].tasks.filter((task) => {
      return task.id === id;
    })[0];

    const newTasks = tasks.map((task) => {
      if (task.id === to) {
        let newTasks = [...task.tasks, currentTask];
        return { ...task, formActive: false, tasks: newTasks };
      }
      return task;
    });

    const mostNewTasks = newTasks.map((task) => {
      if (task.id === from) {
        let newTasks = task.tasks.filter((task) => task.id !== id);
        return { ...task, formActive: false, tasks: newTasks };
      }
      return task;
    });

    changeTasks(mostNewTasks);
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Outlet context={[tasks, changeTasks]} />
        {blocks.map((block) => (
          <Tasks
            key={block.id}
            title={block.title}
            tasks={filterTasks(block.id)}
            toggle={activateForm}
            addTask={addTask}
            filterTasks={filterTasks}
            relocateTask={relocateTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;