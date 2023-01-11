import React, { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";
import Header from "./components/Header";
import styles from "./css/app.module.css";
import Modal from "./components/Modal";

function App() {
  const [userData, setUserData] = useState([
    {
      id: "1",
      username: "Ashutosh",
      age: 19,
    },
    {
      id: "2",
      username: "Machhar",
      age: 20,
    },
  ]);
  const addUserData = (user) => {
    setUserData((prevState) => {
      return [...prevState, user];
    });
  };
  return (
    <div className={styles.app}>
      <Header />
      <Form userData={addUserData} />
      {userData.map((data) => {
        return <User username={data.username} age={data.age} key={data.id} />;
      })}
      <Modal />
    </div>
  );
}

export default App;
