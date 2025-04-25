import React, { useState } from 'react';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onTaskAdded({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1em' }}>
      <input
        type="text"
        value={title}
        placeholder="New task..."
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '0.5em', marginRight: '0.5em' }}
      />
      <button type="submit" style={{ padding: '0.5em 1em' }}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
