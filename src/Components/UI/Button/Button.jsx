import React from "react";
import styles from "./Button.module.css";

const Button = ({ isActive, toggle, id, disabled }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggle(id);
  };

  let btn;

  if (isActive) {
    btn = (
      <button className={styles.button_active} type="submit">
        Submit
      </button>
    );
  } else {
    if (disabled && id !== 1) {
      btn = (
        <button className={styles.button_disabled} type="button" disabled>
          +Add card
        </button>
      );
    } else {
      btn = (
        <button className={styles.button} type="button" onClick={handleClick}>
          +Add card
        </button>
      );
    }
  }

  return <>{btn}</>;
};

export default Button;