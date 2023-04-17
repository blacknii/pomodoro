import React from "react";
import NewTask from "./NewTask";
import "./TasksList.css";
import Task from "./Task";

function TasksList(props) {
  return (
    <div className="tasks-card">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          isDone={task.isDone}
          isSelected={task.isSelected}
          text={task.text}
          pomodoros={task.pomodoros}
          donePomodoros={task.donePomodoros}
          onTaskCompletionSwitch={props.onTaskCompletionSwitch}
          onTaskSelectionSwitch={props.onTaskSelectionSwitch}
          onRemoveTask={props.onRemoveTask}
        />
      ))}
      <NewTask onSaveTask={props.onSaveTask} />
    </div>
  );
}

export default TasksList;
