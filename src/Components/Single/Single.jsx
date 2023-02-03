import { useState, useEffect, useCallback } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Single.module.css";

const Single = () => {
  let content = null;
  const params = useParams();

  const [block, setBlock] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState(
    "This task has no description"
  );
  const [tasks, changeTasks] = useOutletContext();

  // Edit particular task and save changes
  const handleEdit = (e) => {
    e.preventDefault();

    const newTasks = block.tasks.map((task) => {
      if (task.id === params.taskId) {
        return {
          id: task.id,
          name: name,
          description: description,
        };
      }
      return task;
    });

    const editBlock = () => {
      return { ...block, tasks: newTasks };
    };

    const newBlock = editBlock();

    const editTasks = (block) => {
      return tasks.map((task) => {
        if (task.id === block.id) {
          return block;
        }
        return task;
      });
    };

    const editedTasks = editTasks(newBlock);

    changeTasks(editedTasks);

    setEditMode(false);
  };

  // Find task by id
  const findTask = useCallback(
    (id) => {
      const blockFind = (task) => {
        return task.tasks.find((item) => item.id === id);
      };
      let block = tasks.find(blockFind);
      let task = block.tasks.find((item) => item.id === id);
      setBlock(block);
      return task;
    },
    [tasks]
  );

  useEffect(() => {
    let task = findTask(params.taskId);
    setName(task.name);
    if (task.description.trim()) {
      setDescription(task.description);
    }
  }, [findTask, params.taskId]);

  // Toggle elements to render by edit mode state
  if (!editMode) {
    content = (
      <div className={styles.form_container}>
        <h2 className={styles.details_title}>{name}</h2>
        <p className={styles.details_text}>{description}</p>
        <div className={styles.button_container}>
          <button
            type="button"
            className={styles.form_button}
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <form onSubmit={handleEdit} className={styles.form_container}>
        <input
          className={styles.details_input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={styles.details_textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className={styles.button_container}>
          <button type="submit" className={styles.form_button_green}>
            Save
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className={styles.details_container}>
      <div className={styles.details}>
        <span className={styles.icon}>
          <Link to="/">
            <FaTimes />
          </Link>
        </span>
        {content}
      </div>
    </div>
  );
};

export default Single;