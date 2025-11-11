// API endpoint for idol detection and data management
// This can be used to store/retrieve idol information from database
const { connectDB } = require('./db');
const mongoose = require('mongoose');

// Idol Schema (optional - for storing in database)
const idolSchema = new mongoose.Schema({
  name: String,
  sanskritName: String,
  description: String,
  attributes: [String],
  significance: String,
  temples: [String],
  imageHash: String, // Hash of image for matching
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const Idol = mongoose.models.Idol || mongoose.model('Idol', idolSchema);

module.exports = async (req, res) => {
  // Set CORS headers
  const origin = req.headers.origin;
  if (origin && (origin.includes('saalik.tech') || origin.includes('localhost'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    // GET - Get all idols or search by name
    if (req.method === 'GET') {
      const { name, hash } = req.query;
      
      if (hash) {
        // Find by image hash
        const idol = await Idol.findOne({ imageHash: hash });
        if (idol) {
          return res.status(200).json({
            success: true,
            data: idol
          });
        }
      }
      
      if (name) {
        // Find by name
        const idol = await Idol.findOne({ 
          name: { $regex: name, $options: 'i' } 
        });
        if (idol) {
          return res.status(200).json({
            success: true,
            data: idol
          });
        }
      }

      // Get all idols
      const idols = await Idol.find().sort({ name: 1 });
      return res.status(200).json({
        success: true,
        count: idols.length,
        data: idols
      });
    }

    // POST - Add new idol or update existing
    if (req.method === 'POST') {
      const { name, sanskritName, description, attributes, significance, temples, imageHash, imageUrl } = req.body;

      if (!name) {
        return res.status(400).json({
          error: 'Name is required'
        });
      }

      // Check if idol exists
      let idol = await Idol.findOne({ name: { $regex: name, $options: 'i' } });

      if (idol) {
        // Update existing
        Object.assign(idol, {
          sanskritName,
          description,
          attributes,
          significance,
          temples,
          imageHash,
          imageUrl
        });
        await idol.save();
      } else {
        // Create new
        idol = new Idol({
          name,
          sanskritName,
          description,
          attributes: attributes || [],
          significance,
          temples: temples || [],
          imageHash,
          imageUrl
        });
        await idol.save();
      }

      return res.status(200).json({
        success: true,
        message: idol.isNew ? 'Idol added successfully' : 'Idol updated successfully',
        data: idol
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Error in idols API:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
};

