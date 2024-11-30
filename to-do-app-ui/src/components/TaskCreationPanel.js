import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import "../styles/Icons.css";
import { createTask } from "../services/api";
const TaskCreationPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const clearInputs = () => {
    setFormData({
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
