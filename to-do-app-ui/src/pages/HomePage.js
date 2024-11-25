import React, { useState, useEffect } from "react";
import { getTasks } from '../services/api.js';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTasks(response); 
      })
      .catch((err) => {
        setError("Failed to fetch tasks");
      });
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
