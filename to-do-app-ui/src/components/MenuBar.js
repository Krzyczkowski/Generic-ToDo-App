import React from "react";
import MenuItem from "./MenuItem";
import "../styles/Menu-bar.css";
const MenuBar = ({ onSelectPage, activePage }) => {
  return (
    <div className="MenuBar">
      <MenuItem
        text="Daily Tasks"
        isActive ={activePage==="DailyTasks"}
        onClick={() => onSelectPage("DailyTasks")}
      ></MenuItem>
      <MenuItem
        className="active"
        text="Task List"
        isActive ={activePage==="Home"}
        onClick={() => onSelectPage("Home")}
      ></MenuItem>
      <MenuItem
        text="Create a Task"
        isActive ={activePage==="CreateTask"}
        onClick={() => onSelectPage("CreateTask")}
      ></MenuItem>
    </div>
  );
};

export default MenuBar;
