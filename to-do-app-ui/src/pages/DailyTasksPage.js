import React, { useState, useEffect } from "react";
import { getDailyTasks, deleteTask } from "../services/api.js";
import SearchBar from "../components/SearchBar.js";
import Task from "../components/Task.js";
import "../styles/SearchBar.css";
const DailyTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDailyTasks()
      .then((response) => {
        setTasks(response);
        setTasksFiltered(response);
      })
      .catch((err) => {
        setError("Failed to fetch tasks");
      });
  }, []);

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log(`Task ${taskId} deleted`);
    deleteTask(taskId);
  };

  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "completed" } : task
      )
    );
    console.log(`Task ${taskId} is completed`);
  };

  const handleSearch = (searchPhrase) => {
    if (searchPhrase==="") {
      setTasksFiltered(tasks);
    } else {
      const lowerCaseSearchPhrase = searchPhrase.toLowerCase();
      setTasksFiltered(
        tasks.filter((task) =>
          task.name.toLowerCase().includes(lowerCaseSearchPhrase)
        )
      );
    }
  };

  return (
    <div className="homePage">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <SearchBar onSearch={handleSearch} />

      <div className="tasksList">
        {tasksFiltered.map((task) => (
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

export default DailyTasksPage;
