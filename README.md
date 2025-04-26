# 📝 Task Tracker (Full Stack CRUD App)

A modern **Task Tracker** app built with **Node.js, Express, MongoDB** (backend) and **React** (frontend).  
Includes full CRUD (Create, Read, Update, Delete) features, CORS setup, and automated frontend testing.

---

## 📦 Features

- **Backend:**
  - REST API (Node.js + Express)
  - MongoDB via Mongoose
  - Full CRUD for tasks (Create, Read, Update, Delete)
  - CORS enabled for frontend-backend communication
  - Jest & Supertest API tests

- **Frontend:**
  - React (Create React App)
  - Axios for API calls
  - Task list, add, delete, and update/toggle completion from UI
  - Component-based structure
  - Jest & React Testing Library for frontend tests

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
2. Install Dependencies
Backend
bash
Copy
Edit
cd task-tracker-backend
npm install
Frontend
bash
Copy
Edit
cd ../task-tracker-frontend
npm install
3. Environment Setup
Backend
Create a .env file in task-tracker-backend:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/taskdb
PORT=5002
Start your local MongoDB (mongod) or use MongoDB Atlas.

4. Run the App (Two Terminals)
Backend
bash
Copy
Edit
cd task-tracker-backend
npm run dev
# Server: http://localhost:5002/
Frontend
bash
Copy
Edit
cd task-tracker-frontend
npm start
# App: http://localhost:3000/
5. Run Tests
Backend
bash
Copy
Edit
npm test
Frontend
bash
Copy
Edit
npm test
(Optional: To see coverage: npm test -- --coverage)

🧑‍💻 Project Structure
css
Copy
Edit
task-tracker/
  task-tracker-backend/
    src/
      controllers/
      models/
      routes/
      tests/
    server.js
    .env
  task-tracker-frontend/
    src/
      components/
      api/
    App.js
    ...
🛠️ Tech Stack
Backend: Node.js, Express, MongoDB, Mongoose, Jest, Supertest, CORS

Frontend: React, Axios, Jest, React Testing Library

💡 Next Steps / Ideas
User authentication (sign up, log in)

Styling/UI with Material UI, Chakra UI, or Tailwind CSS

Deployment (Vercel, Netlify, Render, Railway, etc)

CI/CD for frontend and backend (GitHub Actions)

Add documentation/screenshots

👤 Author
Sumit Akoliya
LinkedIn