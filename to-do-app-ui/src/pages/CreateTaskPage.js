import React, { useState, useEffect } from "react";
import { getTasks } from '../services/api.js';

const CreateTaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTasks(response)
      })
      .catch((err) => {
        setError("Failed to fetch tasks");
      });
  }, []);

  console.log(tasks) 

  return (
    <div className="homePage">
      {error && <p style={{ color: "red" }}>{error}</p>}
      CREATE A NEW TASK



    </div>
  );
};

export default CreateTaskPage;
