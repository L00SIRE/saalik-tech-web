const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saalik_db';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Waitlist Schema
const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  specialRequests: {
    type: String,
    trim: true,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SAALIK API is running' });
});

// Create waitlist entry
app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, phone, specialRequests } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and phone are required' 
      });
    }

    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(409).json({ 
        error: 'Email already exists in waitlist' 
      });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name,
      email,
      phone,
      specialRequests: specialRequests || ''
    });

    const savedEntry = await waitlistEntry.save();

    res.status(201).json({
      success: true,
      message: 'Successfully joined waitlist',
      data: {
        id: savedEntry._id,
        name: savedEntry.name,
        email: savedEntry.email,
        phone: savedEntry.phone,
        specialRequests: savedEntry.specialRequests,
        timestamp: savedEntry.timestamp
      }
    });
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Get all waitlist entries (for admin/debug)
app.get('/api/waitlist', async (req, res) => {
  try {
    const entries = await Waitlist.find().sort({ timestamp: -1 });
    res.json({
      success: true,
      count: entries.length,
      data: entries
    });
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Get single waitlist entry by ID
app.get('/api/waitlist/:id', async (req, res) => {
  try {
    const entry = await Waitlist.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ error: 'Waitlist entry not found' });
    }
    res.json({
      success: true,
      data: entry
    });
  } catch (error) {
    console.error('Error fetching waitlist entry:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Delete waitlist entry (for admin)
app.delete('/api/waitlist/:id', async (req, res) => {
  try {
    const entry = await Waitlist.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ error: 'Waitlist entry not found' });
    }
    res.json({
      success: true,
      message: 'Waitlist entry deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting waitlist entry:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
});

