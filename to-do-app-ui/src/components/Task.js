import React from "react";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";
import "../styles/Tasks.css";
const Task = ({ task, onDelete, onComplete }) => {
  const classItem = `taskItem ${task.status==="done" ? 'taskDone':''}`;

  return (
    <div className={classItem}>
      <h3 className="taskName ">{task.name}</h3>
      <hr className="orangeHr"/>
      <p className="taskDescription">{task.description}</p>

      <div className="taskActions">
        <CompleteButton onComplete={() => onComplete(task.id)} />
        <DeleteButton onDelete={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

export default Task;
