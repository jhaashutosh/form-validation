import React from "react";
import styles from "../css/form.module.css";

const form = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>
        <div className={styles["form-input"]}>
          <label htmlFor="username">username</label>
          <input id="username" type="text"></input>
        </div>
        <div className={styles["form-input"]}>
          <label htmlFor="password">password</label>
          <input id="password" type="password"></input>
        </div>

        <div className={styles["form-input"]}>
          <label htmlFor="submit">submit</label>
          <input id="submit" type="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default form;
