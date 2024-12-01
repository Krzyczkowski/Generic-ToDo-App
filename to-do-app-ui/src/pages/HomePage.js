import React, { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../services/api.js";
import SearchBar from "../components/SearchBar.js";
import Task from "../components/Task.js";
import "../styles/SearchBar.css";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTasks(response);
        setTasksFiltered(response);
      })
      .catch((err) => {
        setError("Failed to fetch tasks");
      });
  }, []);

  const handleDelete = async (taskId) => {
    const previousTasks = tasks;
  
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setTasksFiltered((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  
    try {
      await deleteTask(taskId);
      console.log(`Task ${taskId} deleted`);
    } catch (error) {
      console.error("Failed to delete task:", error);
      setTasks(previousTasks); 
      setTasksFiltered(previousTasks);
    }
  };
  
  const handleComplete = async (taskId) => {
    const previousTasks = tasks;
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === "done" ? "active" : "done" }
        : task
    );
  
    try {
      const updatedTask = updatedTasks.find((task) => task.id === taskId);
      const data = await updateTask(updatedTask);
  
      const finalTasks = tasks.map((task) =>
        task.id === taskId ? data : task
      );
  
      setTasks(finalTasks);
      setTasksFiltered(finalTasks);
    } catch (error) {
      console.error("Failed to complete task:", error);
      setTasks(previousTasks);
      setTasksFiltered(previousTasks);
    }
  };
  


  const handleSearch = (searchPhrase) => {
    console.log(searchPhrase);
    if (searchPhrase==="" || searchPhrase===" ") {
      setTasksFiltered(tasks);
    } else {
      const lowerCaseSearchPhrase = searchPhrase.toLowerCase();
      setTasksFiltered(
        tasks.filter((task) =>
          task.name.toLowerCase().indexOf(lowerCaseSearchPhrase) !== -1
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

export default HomePage;
