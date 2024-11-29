import React from "react";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className="taskItem">
      <h3 className="taskName">{task.name}</h3>
      <p className="taskDescription">{task.description}</p>
      <div className="taskActions">
        <CompleteButton onComplete={() => onComplete(task.id)} />
        <DeleteButton onDelete={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

export default Task;
