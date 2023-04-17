import React from "react";
import "./Header.css"
import Button from "../UI/Button";

function Header(props) {
  return (
    <div className="header">
      <p className="title">Pomodoro</p>
      <span className="header-buttons">
      <Button className="header-button">Report</Button>
      <Button className="header-button">Settings</Button>
      <Button className="header-button">Login</Button>
      </span>
    </div>
  );
}

export default Header;
