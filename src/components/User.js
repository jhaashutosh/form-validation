import React from "react";
import styles from "../css/user.module.css";

const user = (props) => {
  return (
    <div className={styles["user-container"]}>
      <div className={styles["user-username"]}>{props.username}</div>
      <div className={styles["user-age"]}>{props.age}</div>
    </div>
  );
};

export default user;
