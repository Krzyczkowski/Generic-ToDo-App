import React, { useState, useEffect } from "react";
import { getTasks } from "../services/api.js";
import SearchBar from "../components/SearchBar.js";
import Task from "../components/Task.js";

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

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log(`Task ${taskId} deleted`);
  };

  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "completed" } : task
      )
    );
    console.log(`Task ${taskId} marked as completed`);
  };

  return (
    <div className="homePage">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Pasek wyszukiwania */}
      <SearchBar />

      {/* Lista zadań */}
      <div className="tasksList">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
        
      </div>
    </div>
  );
};

export default HomePage;
