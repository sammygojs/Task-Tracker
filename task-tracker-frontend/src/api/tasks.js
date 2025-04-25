import axios from 'axios';

const API_URL = 'http://localhost:5002/tasks';

export async function fetchTasks() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function createTask(task) {
  const response = await axios.post(API_URL, task);
  return response.data;
}
