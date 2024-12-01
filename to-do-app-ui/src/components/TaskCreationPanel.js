import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import "../styles/Icons.css";
import { createTask, create } from "../services/api";

const TaskCreationPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "",
    taskType: "Task", 
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTaskTypeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      taskType: e.target.value,
    }));
    console.log(e.target.value);
  };

  const clearInputs = () => {
    setFormData({
      ...formData,
      name: "",
      description: "",
      priority: "",
    });
  };

  const Create = async () => {
    console.log(formData);
    try {
      await createTask(formData);
      clearInputs();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="TaskCreationPanel">
      <div className="form-group">
        <label htmlFor="name">Task Type</label>
        <select className="form-select" onChange={handleTaskTypeChange} id="taskType">
          <option value="Task">Normal Task</option>
          <option value="RecurringTask">Daily Task</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <input
          id="priority"
          type="number"
          placeholder="Priority"
          value={formData.priority}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <button onClick={clearInputs}>
          Clear <FaDeleteLeft className="FaDeleteLeft" />
        </button>
        <button onClick={Create}>
          Add
          <IoMdAddCircle className="IoMdAddCircle" />
        </button>
      </div>
    </div>
  );
};

export default TaskCreationPanel;
