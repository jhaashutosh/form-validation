import React, { useState } from "react";
import styles from "../css/form.module.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const userHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      age: age,
    };
    console.log(user);
    props.userData(user);
    setUsername("");
    setAge("");
  };
  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>
        <div className={styles["form-input"]}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={userHandler}
          ></input>
        </div>
        <div className={styles["form-input"]}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageHandler}
          ></input>
        </div>

        <div className={styles["form-input"]}>
          <button id="submit" type="submit" onClick={submitHandler}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
