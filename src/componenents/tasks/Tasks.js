import React, { useState } from "react";
import "./Tasks.css";
import TasksList from "./tasksList/TasksList";
import TasksSummary from "./TasksSummary";

function Tasks(props) {
  const [currentTasks, setCurrentTasks] = useState("Time to focus!");

  const saveTask = (newTask) => {
    props.setTaskList((prevTasks) => [newTask, ...prevTasks]);
  };

  const taskSelectionSwitch = (taskId) => {
    const newData = [];
    props.tasksList.forEach((currentTask) => {
      if (currentTask.id !== taskId) {
        currentTask.isSelected = false;
        newData.push(currentTask);
      } else {
        setCurrentTasks(currentTask.text);
        props.setCurrentTasksId(taskId);
        currentTask.isSelected = true;
        newData.push(currentTask);
      }
    });
    props.setTaskList(newData);
  };

  const taskCompletionSwitch = (taskId) => {
    const newData = [];
    props.tasksList.forEach((currentTask) => {
      if (currentTask.id !== taskId) {
        newData.push(currentTask);
      } else {
        currentTask.isDone = !currentTask.isDone;
        newData.push(currentTask);
      }
    });
    props.setTaskList(newData);
  };

  const removeTask = (taskId) => {
    const newData = [];
    props.tasksList.forEach((currentTask) => {
      if (currentTask.id !== taskId) {
        newData.push(currentTask);
      } else if (currentTask.id === taskId && currentTask.isSelected) {
        setCurrentTasks("Time to focus!");
      }
    });
    props.setTaskList(newData);
  };

  return (
    <div>
      <p>{currentTasks}</p>
      <TasksList
        onSaveTask={saveTask}
        onTaskCompletionSwitch={taskCompletionSwitch}
        onTaskSelectionSwitch={taskSelectionSwitch}
        onRemoveTask={removeTask}
        tasks={props.tasksList}
      />
      <TasksSummary tasks={props.tasksList} />
    </div>
  );
}

export default Tasks;
