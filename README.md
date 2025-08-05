

# Growly Server

## 📖 Project Overview
This repository contains the **Node.js + Express backend** for the Growly project.  
It provides REST API endpoints to receive lead data from the frontend landing page and either save it to MongoDB or send it via email to the sales team.

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB (using Mongoose)   
- dotenv (for environment variable management)  

## 🚀 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/sindhupallavi14/growly-server.git
   cd growly-server

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder with your environment variables (example):

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The server will run on:

   ```
   http://localhost:5000
   ```

## 📋 API Example

### POST `/api/leads`

Example request body (JSON):

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "1234567890",
  "businessType": "Freelancer",
  "message": "Hi, I'm testing this form"
}
```

---

