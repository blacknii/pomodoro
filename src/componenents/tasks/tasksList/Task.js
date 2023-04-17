import Button from "../../UI/Button";
import "./Task.css";

function Task(props) {
  const taskSelect = () => {
    props.onTaskSelectionSwitch(props.id);
  };

  const taskCompletionSwitch = (event) => {
    event.stopPropagation();
    props.onTaskCompletionSwitch(props.id);
  };

  const taskDelete = (event) => {
    event.stopPropagation();
    props.onRemoveTask(props.id);
  };

  const isDoneStyle = props.isDone ? "task-done" : "";
  const isSelectedStyle = props.isSelected ? "task-is-selected" : "";

  return (
    <div onClick={taskSelect} className={`task-card ${isDoneStyle}`}>
      <Button
        onClick={taskCompletionSwitch}
        className={`rest task-done-button ${isDoneStyle}`}
      >
        {" "}
        {`${props.isDone ? "[X]" : "[ ]"}`}
      </Button>
      <p className={`text ${isSelectedStyle}`}>{`${props.text}`}</p>
      <p className="rest">{`${props.donePomodoros}/${props.pomodoros}`}</p>
      <Button
        onClick={taskDelete}
        className={`rest task-del-button ${isDoneStyle}`}
      >
        {" "}
        Del
      </Button>
    </div>
  );
}

export default Task;
