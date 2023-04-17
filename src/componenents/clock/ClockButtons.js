import React from "react";
import "./ClockButtons.css";
import Button from "../UI/Button";

function ClockButtons(props) {
  const stage = props.timerStage;

  const setTimePomodoroHandler = () => {
    props.onSetTime(25, "pomodoro");
  };
  const setTimeShortBrakeHandler = () => {
    props.onSetTime(5, "short break");
  };
  const setTimeLongBrakeHandler = () => {
    props.onSetTime(15, "long break");
  };
  return (
    <div className="clock-buttons">
      <Button
        className={`clock-button ${
          stage === "pomodoro" ? "clock-selected-button" : ""
        }`}
        onClick={setTimePomodoroHandler}
      >
        Pomodoro
      </Button>
      <Button
        className={`clock-button ${
          stage === "short break" ? "clock-selected-button" : ""
        }`}
        onClick={setTimeShortBrakeHandler}
      >
        Short Break
      </Button>
      <Button
        className={`clock-button ${
          stage === "long break" ? "clock-selected-button" : ""
        }`}
        onClick={setTimeLongBrakeHandler}
      >
        Long Break
      </Button>
    </div>
  );
}

export default ClockButtons;
