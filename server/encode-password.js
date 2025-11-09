// Helper script to URL encode a password for MongoDB connection string
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== MongoDB Password URL Encoder ===\n');
console.log('Enter your MongoDB password (it will be hidden):\n');

rl.question('Password: ', (password) => {
  // URL encode the password
  const encoded = encodeURIComponent(password);
  
  console.log('\n✅ URL Encoded Password:');
  console.log(encoded);
  console.log('\n📋 Use this in your .env file (replace [USERNAME] and [CLUSTER] with your actual values):');
  console.log(`MONGODB_URI=mongodb+srv://[USERNAME]:${encoded}@[CLUSTER].mongodb.net/saalik_tech_db?retryWrites=true&w=majority`);
  console.log('\n⚠️  Copy the encoded password above and update your server/.env file');
  
  rl.close();
});

// Hide password input (basic attempt)
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

