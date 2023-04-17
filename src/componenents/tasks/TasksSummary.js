import React from "react";
import "./TasksSummary.css";

function TasksSummary(props) {
  const doneTasks = props.tasks
    .map((task) => (task.isDone ? 1 : 0))
    .reduce((previousTask, currentTask) => previousTask + currentTask, 0);

  const allTasks = props.tasks.length;

  const tasksProgress =
    allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;

  return (
    <div className="tasks-summary-card">
      <p className="tasks-summary-card-p">{`Done:${doneTasks}`}</p>
      <p className="tasks-summary-card-p">{`All:${allTasks}`}</p>
      <p className="tasks-summary-card-p">{`Progress:${tasksProgress}%`}</p>
    </div>
  );
}

export default TasksSummary;
