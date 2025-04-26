import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TaskList from '../components/TaskList';
import * as api from '../api/tasks';
import '@testing-library/jest-dom';

// Mock the fetchTasks API
jest.mock('../api/tasks');

describe('TaskList', () => {
  it('shows loading and then renders tasks', async () => {
    // Arrange: set up fake tasks
    const fakeTasks = [
      { _id: '1', title: 'Task 1', completed: false },
      { _id: '2', title: 'Task 2', completed: true },
    ];
    api.fetchTasks.mockResolvedValue(fakeTasks);

    // Act: render the component
    render(<TaskList />);

    // Assert: check loading
    expect(screen.getByText(/loading tasks/i)).toBeInTheDocument();

    // Wait for tasks to render
    await waitFor(() => {
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
  });
});
