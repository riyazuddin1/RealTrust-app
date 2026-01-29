# 🏡 Lead Generation Landing Page – Full Stack Application

A full-stack **Lead Generation Web Application** consisting of a **public landing page** and an **admin panel**, developed using **React (Create React App)** for the frontend and **Node.js + Express** for the backend.

The application allows users to submit contact details and subscribe to newsletters, while admins can manage projects, clients, and view user submissions through an admin interface.

---

## 🔗 Live Deployment Links

- **Frontend (Netlify)**  
  https://real-trust-app.netlify.app

- **Backend (Render)**  
  https://realtrust-app-8gbc.onrender.com

> ⚠️ Note: The backend is deployed on a free-tier service (Render). If idle, the first request may take a few seconds to respond.

---

## 📌 Project Approach

This project follows a **decoupled full-stack architecture**:

- The **frontend** handles UI, user interactions, and form validations.
- The **backend** exposes REST APIs for handling business logic, data storage, and image uploads.
- Both frontend and backend are deployed **independently**, similar to real-world production systems.

The main goals were:
- Match the provided UI reference accurately
- Implement practical full-stack communication
- Keep backend logic simple and understandable
- Demonstrate real deployment workflow

---

## ✨ Features

### User Features
- Responsive landing page UI
- Contact form submission
- Newsletter subscription
- Dynamic display of projects and happy clients
- Image-based cards for projects and clients

### Admin Features
- Add and view projects
- Add and view clients
- View contact form submissions
- View newsletter subscribers
- Upload images for projects and clients

---

## 🛠️ Technologies Used

### Frontend
- React (Create React App)
- Axios (API communication)
- HTML5 & CSS3
- Responsive design

### Backend
- Node.js
- Express.js
- Multer (image uploads)
- File-based JSON storage (for simplicity)

### Deployment
- Frontend: Netlify
- Backend: Render

---

## 🧩 Frontend & Backend Deployment Explanation

### Frontend
- Deployed on **Netlify**
- Serves static React build files (HTML, CSS, JS)
- Runs in the user's browser
- Responsible only for UI and sending API requests

Frontend URL:
https://real-trust-app.netlify.app/

---

### Backend
- Deployed on **Render**
- Runs a Node.js + Express server
- Handles APIs, data storage, and file uploads
- Not accessed directly by users (only via APIs)

Backend URL:
https://realtrust-app-8gbc.onrender.com/

---

### Communication Flow
User Browser
↓
Frontend (Netlify)
↓ API Requests
Backend (Render)
↓
Response sent back to Frontend


This separation follows **industry-standard full-stack architecture**.


```
## 📂 Project Structure

RealTrust-app/
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api.js # Axios configuration
│ │ └── App.js
│ └── build/ # Production build
│
├── backend/ # Express backend
│ ├── data/ # JSON storage files
│ ├── uploads/ # Uploaded images
│ ├── server.js
│ └── package.json
│
└── README.md

```



## 🚀 How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/riyazuddin1/RealTrust-app.git
cd RealTrust-app

2️⃣ Backend Setup
cd backend
npm install
npm start
Backend will run on:
http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start
Frontend will run on:
http://localhost:3000

4️⃣ Environment Variable (Frontend)

Create a .env file inside the frontend folder:

REACT_APP_BACKEND_URL=http://localhost:5000

🧪 Usage

Landing Page:
http://localhost:3000

Admin Pages:

/admin/projects

/admin/clients

/admin/contacts

/admin/subscribers

🔌 API Endpoints
Public APIs

POST /api/contacts – Submit contact form

POST /api/subscribers – Subscribe to newsletter

Admin APIs

GET /api/projects – List projects

POST /api/projects – Add project (multipart/form-data)

GET /api/clients – List clients

POST /api/clients – Add client (multipart/form-data)

GET /api/contacts – View contact submissions

GET /api/subscribers – View subscribers

Static Files

GET /uploads/* – Access uploaded images

⚠️ Notes & Limitations

Backend uses file-based storage, suitable for academic and demo purposes.

On free-tier hosting, data may reset if the backend restarts.

For production use, a database like MongoDB or PostgreSQL can be integrated.

📈 Future Enhancements

Database integration

Authentication for admin panel

Dashboard analytics

Email notifications

Role-based access control

👨‍💻 Author

Mohammad Riyaz
B.Tech CSE (AI & ML)
Full Stack Web Development Project




