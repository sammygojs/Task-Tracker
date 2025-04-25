const request = require('supertest');
const app = require('../../app'); // <--- not server.js
const mongoose = require('mongoose');
const Task = require('../models/Task');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskdb-test');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Task API', () => {
  let taskId;

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', completed: false });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    taskId = res.body._id;
  });

  it('should get all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a single task', async () => {
    const res = await request(app).get(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title');
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({ title: 'Updated Task', completed: true });

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe('Updated Task');
    expect(res.body.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});
