import { useState } from "react";
import "./App.css";
import Clock from "./componenents/clock/Clock";
import Header from "./componenents/header/Header";
import Tasks from "./componenents/tasks/Tasks";

const DummyData = [
  {
    id: 955207926363500,
    isDone: false,
    isSelected: false,
    text: "Make a bed",
    pomodoros: 1,
    donePomodoros: 0,
  },
  {
    id: 2387300582277016,
    isDone: false,
    isSelected: false,
    text: "Do some important stuff",
    pomodoros: 3,
    donePomodoros: 0,
  },
];

function App() {
  const [tasksList, setTaskList] = useState(DummyData);
  const [currentTasksId, setCurrentTasksId] = useState(-1);

  const pomodoroUpdateHandler = () => {
    const newData = [];
    tasksList.forEach((currentTask) => {
      if (currentTask.id !== currentTasksId) {
        newData.push(currentTask);
      } else {
        currentTask.donePomodoros++;
        newData.push(currentTask);
      }
    });
    setTaskList(newData);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Clock pomodoroUpdate={pomodoroUpdateHandler} />
        <Tasks
          tasksList={tasksList}
          setTaskList={setTaskList}
          setCurrentTasksId={setCurrentTasksId}
        />
      </div>
    </div>
  );
}

export default App;
