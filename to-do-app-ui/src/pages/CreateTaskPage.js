import React from "react";
import "../styles/TaskCreation.css";
import TaskCreationPanel from "../components/TaskCreationPanel.js";

const CreateTaskPage = () => {
  return (
    <div className="CreateTaskPage">
      <div>
        <h2>Add a <strong>New Task</strong></h2>
      </div>
      <TaskCreationPanel/>
    </div>
  );
};

export default CreateTaskPage;
