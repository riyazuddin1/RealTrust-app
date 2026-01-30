# Setup Instructions

Follow these steps to set up and run the Lead Generation Landing Page application.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Step-by-Step Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 3. Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm start
```

The backend server will start on `http://localhost:5000`

### 4. Start the Frontend Development Server

Open another terminal and run:

```bash
cd frontend
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

## Usage

1. Navigate to `http://localhost:3000` in your browser
2. Submit the “Get a Free Consultation” form in the hero section
3. Open `http://localhost:3000/admin` to manage projects/clients and view contacts/subscribers

## Project Structure

```
LeadGenApp/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   ├── data/              # JSON data store (projects/clients/contacts/subscribers)
│   └── uploads/           # Uploaded images
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Lead capture form with validation
- ✅ Backend API for projects/clients/contacts/subscribers
- ✅ Modern UI with animations
- ✅ All assets integrated

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

**Backend:**
```bash
PORT=5001 npm start
```

**Frontend:**
Create a `.env` file in the frontend folder:
```
PORT=3001
```

### CORS Issues

The backend is configured to accept requests from `http://localhost:3000`. If you change the frontend port, update the CORS settings in `backend/server.js`.

### Assets Not Loading

Make sure all assets are copied to:
- `frontend/public/images/`
- `frontend/public/icons/`

If assets are missing, copy them from the original assets folder.
