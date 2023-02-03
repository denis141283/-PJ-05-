import { Fragment, useState } from "react";
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";

const Form = ({
  title,
  isActive,
  toggle,
  id,
  addTask,
  filterTasks,
  relocateTask,
}) => {
  let activator;
  if (filterTasks(id - 1)[0]) {
    activator = filterTasks(id - 1)[0].tasks.length;
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const changeName = (name) => setName(name);
  const changeDescription = (description) => setDescription(description);

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toggle(id);
      setDescription("");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name,
      description,
    };

    addTask(id, newTask);
    setName("");
    setDescription("");
  };

  const moveTask = (taskId) => {
    const from = id - 1;
    const to = id;

    relocateTask(taskId, from, to);
  };

  let content = null;

  if (title === "Backlog") {
    content = (
      <Fragment>
        {isActive && (
          <Input
            name={name}
            description={description}
            changeName={changeName}
            changeDescription={changeDescription}
          />
        )}
        <Button isActive={isActive} toggle={toggle} id={id} />
      </Fragment>
    );
  } else {
    content = (
      <Fragment>
        {isActive && (
          <Select
            tasks={filterTasks(id - 1)}
            id={id}
            defaultValue={"Choose task..."}
            moveTask={moveTask}
          />
        )}
        {!isActive && activator !== 0 && (
          <Button
            isActive={isActive}
            toggle={toggle}
            id={id}
            disabled={false}
          />
        )}
        {!isActive && activator === 0 && (
          <Button isActive={isActive} id={id} disabled={true} />
        )}
      </Fragment>
    );
  }

  return (
    <form onSubmit={handleAddTask} className={styles.list_form}>
      {content}
    </form>
  );
};

export default Form;