// Waitlist API endpoint for Vercel
const { connectDB, Waitlist } = require('./db');

module.exports = async (req, res) => {
  // Set CORS headers
  const origin = req.headers.origin;
  if (origin && (origin.includes('saalik.tech') || origin.includes('localhost'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected successfully');

    // GET - Get all waitlist entries
    if (req.method === 'GET') {
      const entries = await Waitlist.find().sort({ timestamp: -1 });
      return res.status(200).json({
        success: true,
        count: entries.length,
        data: entries
      });
    }

    // POST - Create new waitlist entry
    if (req.method === 'POST') {
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

      return res.status(201).json({
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
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Error in waitlist API:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

