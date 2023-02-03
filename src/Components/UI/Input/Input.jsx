import { Fragment } from "react";
import styles from "./Input.module.css";

const Input = ({ name, description, changeName, changeDescription }) => {
  return (
    <Fragment>
      <input
        value={name}
        onChange={(event) => changeName(event.target.value)}
        className={styles.input_text}
        type="text"
        placeholder="Add new card..."
      />
      <textarea
        value={description}
        onChange={(event) => changeDescription(event.target.value)}
        className={styles.input_text}
        rows="3"
        placeholder="Add new card details..."
      ></textarea>
    </Fragment>
  );
};

export default Input;