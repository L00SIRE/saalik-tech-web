// Waitlist entry by ID endpoint for Vercel
const { connectDB, Waitlist } = require('../db');

module.exports = async (req, res) => {
  // Set CORS headers
  const origin = req.headers.origin;
  if (origin && (origin.includes('saalik.tech') || origin.includes('localhost'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Connect to MongoDB
    await connectDB();

    const { id } = req.query;

    // GET - Get single waitlist entry
    if (req.method === 'GET') {
      const entry = await Waitlist.findById(id);
      if (!entry) {
        return res.status(404).json({ error: 'Waitlist entry not found' });
      }
      return res.status(200).json({
        success: true,
        data: entry
      });
    }

    // DELETE - Delete waitlist entry
    if (req.method === 'DELETE') {
      const entry = await Waitlist.findByIdAndDelete(id);
      if (!entry) {
        return res.status(404).json({ error: 'Waitlist entry not found' });
      }
      return res.status(200).json({
        success: true,
        message: 'Waitlist entry deleted successfully'
      });
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Error in waitlist ID API:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

