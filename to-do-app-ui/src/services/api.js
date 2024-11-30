import axios from "axios";
const API_URL = "http://localhost:5079/api";

// funkcja pobierająca listę zadań
export const getTasks = async () => {
  try {
    const response = await axios.post(`${API_URL}/task/getAll`, {
      filter: null,
      orderBy: null,
      skip: 0,
      take: 10,
      taskType: "task",
    });

    return response.data;
  } catch (error) {
    console.error("Error when getting Tasks:", error);
    throw error;
  }
};
export const getDailyTasks = async () => {
  try {
    const response = await axios.post(`${API_URL}/task/getAll`, {
      filter: null,
      orderBy: null,
      skip: 0,
      take: 10,
      taskType: "daily",
    });

    return response.data;
  } catch (error) {
    console.error("Error when getting Tasks:", error);
    throw error;
  }
};
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/task`, {
      name: taskData.name || "Task Name",
      description: taskData.description || "Task Description",
      status: taskData.status || "active",
      priority: taskData.priority || 0,
    });

    return response.data;
  } catch (error) {
    console.error("Error when creating task:", error);
    throw error;
  }
};
export const deleteTask = async (taskData) => {
  try {
    const response = await axios.delete(`${API_URL}/task/${taskData}`);
    return response.data;
  } catch (error) {
    console.error("Error when deleting task:", error);
    throw error;
  }
};
