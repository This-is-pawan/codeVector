# Code Vector

A full-stack product browsing application built with **React (Vite)**, **Node.js**, **Express.js**, and **MongoDB**.

## Project Structure

```bash
codeVector/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductList.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── ContextApi.jsx
│   │   ├── data.js
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── vercel.json
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── Router/
│   │   └── ProductRoute.js
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── db/
│   │   └── Database.js
│   │
│   ├── models/
│   │   └── ProductSchema.js
│   │
│   ├── .gitignore
│   ├── .env
│   ├── server.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

# Frontend Setup

## 1. Create Vite React App

```bash
mkdir codeVector
cd codeVector

mkdir frontend
cd frontend

npm create vite@latest .
npm install
```

## 2. Install Required Packages

```bash
npm install axios react-router-dom
```

## 3. Create Environment Variables

Create `.env` file inside frontend folder.

```env
VITE_API_URL=http://localhost:4000
```

## 4. Frontend Folder Structure

```bash
src/
│
├── components/
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── ContextApi.jsx
├── data.js
└── main.jsx
```

## 5. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

## 1. Create Backend Folder

```bash
cd ..

mkdir backend
cd backend

npm init -y
```

## 2. Install Required Packages

```bash
npm install express mongoose cors dotenv @faker-js/faker
npm install -D nodemon
```

## 3. Backend Folder Structure

```bash
backend/
│
├── Router/
│   └── ProductRoute.js
│
├── data/
│   └── data.js
│
├── db/
│   └── Database.js
│
├── models/
│   └── ProductSchema.js
│
├── .gitignore
├── .env
├── server.js
├── vercel.json
└── package.json
```

## 4. Configure package.json

```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "@faker-js/faker": "^10.5.0",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "mongoose": "^9.7.1",
    "nodemon": "^3.1.14"
  }
}
```

## 5. Create .gitignore

```gitignore
node_modules
.env
```

## 6. Create Environment Variables

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

## 7. Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:4000
```

---

# Features

* Browse 50,000+ products
* Own pagination
* Category filtering
* MongoDB indexing
* REST API
* React frontend
* Responsive UI
* Product cards with images
* Real-time consistent pagination
* Vercel deployment support

---

# API Endpoints

## Get Products

```http
GET /codevector/products
```

### Query Parameters

```http
?page=1
&limit=50
&category=fashion
```

### Example

```http
GET /codevector/products?page=1&limit=50&category=fashion
```

---

# Tech Stack

### Frontend

* React
* Vite
* Axios
* React Router DOM
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Faker.js

---

# Run Complete Project

### Start Backend

```bash
cd backend
npm run dev or nodemon server.js
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Open:

```bash
http://localhost:5173
```
