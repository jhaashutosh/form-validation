import React from "react";
import styles from "../css/modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.title}>{props.title}Hello</div>
      <div className={styles["modal-desc"]}>
        {props.description}
        Kya haal hain bhai ke!
        <div className={styles["modal-btn"]}>
          <button>okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
