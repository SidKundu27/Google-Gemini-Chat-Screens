# Home and Chat Screen Implementation  

This repository contains the implementation for the **/home** and **/chat** screens. The project is structured into two main components:  

1. **Backend** (Node.js with Express)  
2. **Frontend** (React with Next.js)  

---

## Project Overview  

The project includes:  
- **/home**: A home screen layout implemented on the frontend.  
- **/chat**: A chat functionality integrated with backend services using Google AI APIs.  

---

## Folder Structure  

```plaintext
.
├── backend/              # Backend server code
│   ├── .env              # Environment variables for backend
│   └── ...
├── sales-partner-layout/ # Frontend React (Next.js) code
│   └── ...
└── README.md             # Project documentation
```  

---

## Backend Setup  

The backend requires a Google API key for accessing AI functionalities. Follow these steps to set up the backend:  

1. **Create a `.env` file** inside the `backend/` folder.  
2. Add your Google API key in the following format:  

   ```plaintext
   GOOGLE_AI_API_KEY='yourapikey'
   PORT='3001'
   ```  

3. Install dependencies and run the backend server:  

   ```bash
   cd backend
   npm install
   npm start
   ```  

---

## Frontend Setup  

The frontend uses React with Next.js. Follow these steps to set up and run the frontend:  

1. Navigate to the `sales-partner-layout/` folder.  
2. Install dependencies and start the development server:  

   ```bash
   cd sales-partner-layout
   npm install
   npm run dev
   ```  

3. Open the application in your browser:  
   ```  
   http://localhost:3000  
   ```  

## Contact  

If you have any questions or require further clarification, please reach out to me.  
