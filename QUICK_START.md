# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 3: Run the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

That's it! The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📋 What You Get

✅ **Modern Landing Page** with:
- Responsive design (works on all devices)
- Hero section with “Get a Free Consultation” form
- “Our Projects” section (fetched from backend)
- “Happy Clients” section (fetched from backend)
- Newsletter subscribe bar
- Footer with contact information

✅ **Admin Panel** at `http://localhost:3000/admin` with:
- Project Management (add projects)
- Client Management (add clients)
- Contact Form Details (view submissions)
- Subscribed Email Addresses (view subscribers)

✅ **Backend API** with:
- Contact submission endpoint
- Newsletter subscription endpoint
- Projects/Clients management endpoints
- Image upload support
- JSON file storage
- CORS enabled for frontend

✅ **All Assets Integrated**:
- Logos
- Icons
- Images
- Shapes and graphics

## 🎨 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Form Validation**: Client-side and server-side validation
- **Modern UI**: Beautiful gradients, animations, and transitions
- **Fast Performance**: Optimized React components
- **Easy to Customize**: Well-organized code structure

## 📝 Testing the Form

1. Navigate to http://localhost:3000
2. In the hero section, fill the “Get a Free Consultation” form
3. Fill out the form:
   - Full Name (required)
   - Email (required)
   - Mobile Number (required)
   - City (required)
4. Click "Get Quick Quote"
5. Open `http://localhost:3000/admin/contacts` to see the saved submission

## 🛠️ Troubleshooting

**Port already in use?**
- Backend: Change PORT in backend/server.js or use `PORT=5001 npm start`
- Frontend: Create `.env` file with `PORT=3001`

**Assets not loading?**
- Ensure images are in `frontend/public/images/`
- Ensure icons are in `frontend/public/icons/`

**CORS errors?**
- Backend is configured for localhost:3000
- Update CORS settings in `backend/server.js` if using different port

## 📚 Need More Help?

See `SETUP.md` for detailed setup instructions.
See `README.md` for project documentation.
