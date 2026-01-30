# Lead Generation Landing Page - Full Stack Application

A full-stack application with a **Landing Page** and an **Admin Panel**, built with React (Frontend) and Node.js/Express (Backend).

## Features

- Modern, responsive UI design
- Contact form (stores submissions in backend)
- Newsletter subscription (stores emails in backend)
- Admin panel to manage Projects/Clients and view Contact/Subscribers
- Integration with all provided assets (icons, images, logos)
- UI styled to match the provided reference

## Tech Stack

### Frontend
- React
- CSS3 (Modern styling)
- Responsive Design

### Backend
- Node.js
- Express.js
- JSON file storage + image uploads (for simplicity)

## Project Structure

```
LeadGenApp/
├── frontend/          # React frontend application
├── backend/           # Express backend API
├── public/            # Static assets
└── README.md          # This file
```

## Installation & Setup

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Usage

1. Start the backend server (runs on port 5000)
2. Start the frontend development server (runs on port 3000)
3. Open http://localhost:3000 in your browser
4. Open http://localhost:3000/admin for the admin panel

## API Endpoints

- `GET /api/projects` - List projects
- `POST /api/projects` - Add project (multipart form-data)
- `GET /api/clients` - List clients
- `POST /api/clients` - Add client (multipart form-data)
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - View contact submissions
- `POST /api/subscribers` - Subscribe email
- `GET /api/subscribers` - View subscribed emails
- `GET /uploads/*` - Uploaded images
