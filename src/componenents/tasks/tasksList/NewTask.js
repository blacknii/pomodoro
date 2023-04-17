import React, { useState } from "react";
import "./NewTask.css";
import Button from "../../UI/Button";

function NewTask(props) {
  const [text, setText] = useState("");
  const [pomodoros, setPomodoros] = useState("");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const pomodorosChangeHandler = (event) => {
    setPomodoros(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== "" && pomodoros !== "") {
      const taskData = {
        id: Math.random() * Math.pow(10, 17),
        isDone: false,
        isSelected: false,
        text: text,
        pomodoros: Number(pomodoros),
        donePomodoros: 0,
      };
      setText("");
      setPomodoros("");
      props.onSaveTask(taskData);
    }
  };

  return (
    <form className="new-task-card" onSubmit={submitHandler}>
      <label className="new-rest small-margin">New Task</label>
      <input
        className="new-text new-input"
        type="text"
        onChange={textChangeHandler}
        value={text}
      />
      <label className="new-rest small-margin">Pomodoros</label>
      <input
        className="new-number new-input"
        type="number"
        min="1"
        onChange={pomodorosChangeHandler}
        value={pomodoros}
      />
      <Button type="submit" className="new-rest">
        CREATE
      </Button>
    </form>
  );
}

export default NewTask;
