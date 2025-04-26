import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from '../api/tasks';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      alert('Failed to fetch tasks');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      await createTask(task);
      loadTasks();
    } catch (error) {
      alert('Failed to add task');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      alert('Failed to delete task');
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <TaskForm onTaskAdded={handleAddTask} />
      <h2>Task List</h2>
      {tasks.length === 0 && <p>No tasks found.</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button
              onClick={() => handleDeleteTask(task._id)}
              style={{ marginLeft: '1em', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
