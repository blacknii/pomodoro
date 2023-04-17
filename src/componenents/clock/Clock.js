import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import "./Clock.css";
import ClockButtons from "./ClockButtons";

function Clock(props) {
  const [timeInSec, setTimeInSec] = useState(25 * 60);
  const [isTimerTurnOn, setIsTimerTurnOn] = useState(false);
  const [timerStage, setTimerStage] = useState("pomodoro");
  const [pomodoroCounter, setPomodoroCounter] = useState(0);
  console.log(pomodoroCounter);

  // const pomodoroTime = 25;
  // const shortBreakTime = 5;
  // const longBreakTime = 15;
  // const longBreakfrequency = 4;

  const stageSwitch = () => {
    console.log("State is switching");
    if (timerStage === "short break" || timerStage === "long break") {
      setClockTime(25, "pomodoro");
    } else if (timerStage === "pomodoro" && (pomodoroCounter + 1) % 4 === 0) {
      props.pomodoroUpdate();
      setPomodoroCounter(pomodoroCounter + 1);
      setClockTime(15, "long break");
    } else {
      props.pomodoroUpdate();
      setPomodoroCounter(pomodoroCounter + 1);
      setClockTime(5, "short break");
    }
  };

  const setClockTime = (clockTime, stage) => {
    setTimerStage(stage);
    setIsTimerTurnOn(false);
    setTimeInSec(clockTime * 60);
  };

  const minutes = Math.floor(timeInSec / 60);
  let seconds = timeInSec % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const finalTime = `${minutes}:${seconds}`;

  useEffect(() => {
    let intervalId;
    if (isTimerTurnOn) {
      intervalId = setInterval(() => {
        updateRemainingTime();
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
      if (timeInSec === 1) {
        stageSwitch();
      }
    };
  }, [timeInSec, isTimerTurnOn]);

  const updateRemainingTime = () => {
    setTimeInSec((time) => {
      return time - 1;
    });
  };

  const timerStartButtonHandler = () => {
    setIsTimerTurnOn(!isTimerTurnOn);
  };

  const timerSkipButtonHandler = () => {
    stageSwitch();
  };

  return (
    <div className="clock-card">
      <ClockButtons onSetTime={setClockTime} timerStage={timerStage} />
      <p className="clock-timer">{finalTime}</p>
      <div className="clock-play-buttons">
        <Button
          className="clock-start-button"
          onClick={timerStartButtonHandler}
        >
          {isTimerTurnOn ? "STOP" : "START"}
        </Button>
        {isTimerTurnOn && (
          <Button
            className="clock-skip-button"
            onClick={timerSkipButtonHandler}
          >
            ▶
          </Button>
        )}
      </div>
    </div>
  );
}

export default Clock;
