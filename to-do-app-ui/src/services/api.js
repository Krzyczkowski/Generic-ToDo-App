import axios from 'axios';
const API_URL = 'http://localhost:5079/api'; 

// funkcja pobierająca listę zadań
export const getTasks = async () => {
  try {
    const response = await axios.post(`${API_URL}/task/getAll`, {
      filter: null, 
      orderBy: null, 
      skip: 0, 
      take: 10, 
      taskType: 'task' 
    });

    return response.data; 
  } catch (error) {
    console.error('Błąd podczas pobierania zadań:', error);
    throw error; 
  }
};
