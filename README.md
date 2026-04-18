# 🚀 Docker Full Stack App

A full-stack web application built using **React, Node.js, MongoDB, and Docker**, deployed using **Vercel (Frontend)** and **Render (Backend)**.

---

## 🌐 Live Demo

- 🔗 Frontend: https://docker-sooty-seven.vercel.app  
- 🔗 Backend API: https://docker-backend-ywes.onrender.com/users  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Fetch API

### Backend
- Node.js (HTTP module)
- MongoDB (Atlas)
- Docker

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## ⚙️ Features

- ✅ Fetch users from database
- ✅ Add new user to MongoDB
- ✅ Simple REST API (`/users`, `/add`)
- ✅ Full stack deployment
- ✅ Dockerized backend
- ✅ CORS enabled for frontend-backend communication

---

## 📁 Project Structure
myapp/
└── node-app/
├── frontend/ # React App
├── app.js # Backend server
├── Dockerfile
├── docker-compose.yml
├── package.json
---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/Docker.git
cd Docker/myapp/node-app
2. Run with Docker
docker-compose up --build
3. Access
Backend → http://localhost:3001
MongoDB → localhost:27017
🔐 Environment Variables

Create a .env file:

MONGO_URL=your_mongodb_connection_string
📡 API Endpoints
Get Users
GET /users
Add User
GET /add
🧠 Learning Outcomes
Docker containerization
Backend deployment (Render)
Frontend deployment (Vercel)
MongoDB Atlas integration
API communication & CORS handling
📌 Future Improvements
Add authentication (JWT)
Convert to Express.js
Add update & delete APIs (CRUD)
Improve UI with Tailwind CSS
Use environment variables for API URLs
👨‍💻 Author

Harsh Yadav

GitHub: https://github.com/harsh-0905
