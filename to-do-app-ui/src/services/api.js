import axios from "axios";
const API_URL = "http://localhost:5079/api";

export const getTasks = async () => {
  try {
    const response = await axios.post(`${API_URL}/task/getAll`, {
      filter: "priority",
      orderBy: null,
      skip: 0,
      take: 10,
      taskType: "task",
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error when getting Tasks:", error);
    throw error;
  }
};
export const getDailyTasks = async () => {
  try {
    const response = await axios.post(`${API_URL}/recurringTask/getAll`, {
      filter: null,
      orderBy: null,
      skip: 0,
      take: 10,
      taskType: "recurringtask",
    });

    return response.data;
  } catch (error) {
    console.error("Error when getting Tasks:", error);
    throw error;
  }
};
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/${taskData.taskType}`, {
      name: taskData.name || "Task Name",
      description: taskData.description || "Task Description",
      status: taskData.status || "active",
      priority: taskData.priority || 0,
      taskType: taskData.taskType || 'Task',
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

export const updateTask = async(task) =>{
  try {
    const response = await axios.put(`${API_URL}/task/`,task);
    return response.data;
  } catch (error) {
    console.error("Error when deleting task:", error);
    throw error;
  }
}