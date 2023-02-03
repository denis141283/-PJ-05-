import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const renderMenuStyles = [styles.login_menu];
  const renderArrowStyles = [styles.arrow];

  if (!isOpen) {
    renderMenuStyles.push(styles.closed_menu);
    renderArrowStyles.push(styles.closed_arrow);
  }

  const handleMenuVisibility = () => {
    setIsOpen((isOpen = !isOpen));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>Awesome Kanban Board</div>
        <div className={styles.login_block} onClick={handleMenuVisibility}>
          <div className={styles.user}>
            <img src="./img/user.svg" alt="user" />
          </div>
          <div className={renderArrowStyles.join(" ")}>
            <FaAngleDown />
          </div>
          <div className={renderMenuStyles.join(" ")}>
            <p className={styles.login_text}>Profile</p>
            <p className={styles.login_text}>Log Out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;