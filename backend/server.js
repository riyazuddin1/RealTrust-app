const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded images
const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));

// Persisted JSON storage (simple file-based DB)
const dataDir = path.join(__dirname, 'data');
fs.mkdirSync(dataDir, { recursive: true });

const dataFile = (name) => path.join(dataDir, `${name}.json`);

function ensureJsonFile(name, defaultValue) {
  const fp = dataFile(name);
  if (!fs.existsSync(fp)) fs.writeFileSync(fp, JSON.stringify(defaultValue, null, 2));
  return fp;
}

function readJson(name, defaultValue) {
  const fp = ensureJsonFile(name, defaultValue);
  try {
    const data = fs.readFileSync(fp, 'utf8');
    return JSON.parse(data);
  } catch {
    return defaultValue;
  }
}

function writeJson(name, value) {
  const fp = ensureJsonFile(name, value);
  fs.writeFileSync(fp, JSON.stringify(value, null, 2));
}

// Initialize datasets
ensureJsonFile('projects', []);
ensureJsonFile('clients', []);
ensureJsonFile('contacts', []);
ensureJsonFile('subscribers', []);

// Seed demo data (only if empty). Safe no-op if assets aren't present.
(() => {
  const projects = readJson('projects', []);
  const clients = readJson('clients', []);
  if (projects.length || clients.length) return;

  const assetsRoot = path.resolve(__dirname, '..', '..', '4th year full stack Assets');
  const imagesDir = path.join(assetsRoot, 'Lead Generation Landing page (Images)');
  if (!fs.existsSync(imagesDir)) return;

  const seedImages = [
    'pexels-brett-sayles-2881232.svg',
    'pexels-brett-sayles-2881232-1.svg',
    'pexels-brett-sayles-2881232-2.svg',
    'pexels-brett-sayles-2881232-3.svg',
    'pexels-fauxels-3182834.svg'
  ];

  const copied = [];
  for (const f of seedImages) {
    const src = path.join(imagesDir, f);
    if (!fs.existsSync(src)) continue;
    const destName = `seed-${f.replace(/\s+/g, '_')}`;
    const dest = path.join(uploadsDir, destName);
    if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
    copied.push(destName);
  }
  if (!copied.length) return;

  const seededProjects = [
    { name: 'Consultation', description: 'Project Name, Location', image: copied[0] },
    { name: 'Design', description: 'Project Name, Location', image: copied[1] || copied[0] },
    { name: 'Marketing & Design', description: 'Project Name, Location', image: copied[2] || copied[0] },
    { name: 'Consultation & Marketing', description: 'Project Name, Location', image: copied[3] || copied[0] },
    { name: 'Consultation', description: 'Project Name, Location', image: copied[4] || copied[0] }
  ].map((p) => ({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: p.name,
    description: p.description,
    imageUrl: `/uploads/${p.image}`,
    createdAt: new Date().toISOString()
  }));

  const seededClients = [
    { name: 'Rowhan Smith', designation: 'CEO, Foreclosure', image: copied[0] },
    { name: 'Shipra Kayak', designation: 'Brand Designer', image: copied[1] || copied[0] },
    { name: 'John Lepore', designation: 'CEO, Foreclosure', image: copied[2] || copied[0] },
    { name: 'Marry Freeman', designation: 'Marketing Manager', image: copied[3] || copied[0] },
    { name: 'Lucy', designation: 'Sales Rep', image: copied[4] || copied[0] }
  ].map((c) => ({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: c.name,
    designation: c.designation,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: `/uploads/${c.image}`,
    createdAt: new Date().toISOString()
  }));

  writeJson('projects', seededProjects);
  writeJson('clients', seededClients);
})();

// Multer upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname || '').toLowerCase();
    const safeExt = ext && ext.length <= 10 ? ext : '';
    cb(null, `${Date.now()}-${Math.random().toString(16).slice(2)}${safeExt}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// Routes
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Server is running' }));

// -----------------------
// Landing Page: Projects
// -----------------------
app.get('/api/projects', (req, res) => {
  const projects = readJson('projects', []);
  res.json({ success: true, projects });
});

app.post('/api/projects', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ success: false, message: 'Project name and description are required' });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Project image is required' });
  }

  const projects = readJson('projects', []);
  const project = {
    id: Date.now().toString(),
    name,
    description,
    imageUrl: `/uploads/${req.file.filename}`,
    createdAt: new Date().toISOString()
  };
  projects.unshift(project);
  writeJson('projects', projects);
  res.status(201).json({ success: true, project });
});

// -----------------------
// Landing Page: Clients
// -----------------------
app.get('/api/clients', (req, res) => {
  const clients = readJson('clients', []);
  res.json({ success: true, clients });
});

app.post('/api/clients', upload.single('image'), (req, res) => {
  const { name, description, designation } = req.body;
  if (!name || !description || !designation) {
    return res.status(400).json({ success: false, message: 'Client name, description, and designation are required' });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Client image is required' });
  }

  const clients = readJson('clients', []);
  const client = {
    id: Date.now().toString(),
    name,
    description,
    designation,
    imageUrl: `/uploads/${req.file.filename}`,
    createdAt: new Date().toISOString()
  };
  clients.unshift(client);
  writeJson('clients', clients);
  res.status(201).json({ success: true, client });
});

// -----------------------
// Landing Page: Contact form
// -----------------------
app.post('/api/contacts', (req, res) => {
  const { fullName, email, mobileNumber, city } = req.body;
  if (!fullName || !email || !mobileNumber || !city) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const contacts = readJson('contacts', []);
  const contact = {
    id: Date.now().toString(),
    fullName,
    email,
    mobileNumber,
    city,
    submittedAt: new Date().toISOString()
  };
  contacts.unshift(contact);
  writeJson('contacts', contacts);
  res.status(201).json({ success: true, contact });
});

// -----------------------
// Landing Page: Newsletter
// -----------------------
app.post('/api/subscribers', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required' });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ success: false, message: 'Invalid email format' });

  const subscribers = readJson('subscribers', []);
  const exists = subscribers.some((s) => (s.email || '').toLowerCase() === email.toLowerCase());
  if (exists) return res.status(200).json({ success: true, message: 'Already subscribed' });

  const subscriber = { id: Date.now().toString(), email, subscribedAt: new Date().toISOString() };
  subscribers.unshift(subscriber);
  writeJson('subscribers', subscribers);
  res.status(201).json({ success: true, subscriber });
});

// -----------------------
// Admin Panel views
// -----------------------
app.get('/api/contacts', (req, res) => {
  const contacts = readJson('contacts', []);
  res.json({ success: true, contacts });
});

app.get('/api/subscribers', (req, res) => {
  const subscribers = readJson('subscribers', []);
  res.json({ success: true, subscribers });
});

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
