// Quick MongoDB connection test
require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

console.log('=== MongoDB Connection Test ===\n');
console.log('Connection String (password hidden):');
if (MONGODB_URI) {
  const hidden = MONGODB_URI.replace(/:[^@]+@/, ':****@');
  console.log(hidden);
} else {
  console.log('❌ MONGODB_URI not found in .env file!');
  process.exit(1);
}

console.log('\nAttempting connection...\n');

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ SUCCESS: Connected to MongoDB!');
    console.log('Your connection string is correct.');
    process.exit(0);
  })
  .catch((err) => {
    console.log('❌ FAILED: Connection error\n');
    console.log('Error details:');
    console.log('- Code:', err.code || 'N/A');
    console.log('- Code Name:', err.codeName || 'N/A');
    console.log('- Message:', err.message);
    
    if (err.message.includes('authentication failed')) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Verify the password in MongoDB Atlas matches your .env file');
      console.log('2. If password has special characters, they need URL encoding:');
      console.log('   - @ → %40');
      console.log('   - # → %23');
      console.log('   - $ → %24');
      console.log('   - % → %25');
      console.log('   - & → %26');
      console.log('3. Check username is correct in your MongoDB Atlas');
      console.log('4. Verify database name: saalik_tech_db');
    }
    
    process.exit(1);
  });

