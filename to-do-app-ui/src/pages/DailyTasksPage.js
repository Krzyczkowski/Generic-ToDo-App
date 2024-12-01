import React, { useState, useEffect } from "react";
import { getDailyTasks, deleteTask, updateTask } from "../services/api.js";
import SearchBar from "../components/SearchBar.js";
import Task from "../components/Task.js";
import "../styles/SearchBar.css";

const DailyTaskPage = () => {
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
    let updatedTask = null;
    const previousTasks = tasks;
    const updatedTasks = tasks.map((task) =>{
      if(task.id===taskId){
        updatedTask = task.status ==="done"?
        {...task, status:"active"}:
        {...task, status:"done"}
        return updatedTask;
      }
      return task;
    });
    try {
      if (updatedTask) {
        await updateTask(updatedTask);
      }
      setTasks(updatedTasks);
      setTasksFiltered(updatedTasks);

    } catch (error) {
      console.error("Failed to complete task:", error);

      setTasks(previousTasks);
      setTasksFiltered(previousTasks);
    }
  };


  const handleSearch = (searchPhrase) => {
    if (searchPhrase==="") {
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

export default DailyTaskPage;
