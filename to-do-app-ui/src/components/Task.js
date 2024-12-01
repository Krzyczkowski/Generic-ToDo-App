import React from "react";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";
import { IoReloadCircleOutline } from "react-icons/io5";
import "../styles/Tasks.css";
const Task = ({ task, onDelete, onComplete }) => {
  const classItem = `taskItem ${task.status==="done" ? 'taskDone':''}`;

  const formatDate = (dateString) => {
    const date = new Date(dateString); 
    return date.toLocaleString("pl-PL", { 
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={classItem}>
      <h3 className="taskName ">{task.name}</h3>
      <hr className="orangeHr"/>
      <p className="taskDescription">{task.description}</p>
      {task.status === "done" && (
        <p className="taskDate">Done at: {formatDate(task.statusUpdatedDate)}</p>
      )}
      <div className="taskActions">
        <CompleteButton onComplete={() => onComplete(task.id)} />
        <DeleteButton onDelete={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

export default Task;
