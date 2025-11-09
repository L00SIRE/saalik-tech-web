# API Setup Guide

This guide will help you set up the backend API server and connect it to MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

## Step 2: Set Up MongoDB

### Option A: Local MongoDB

1. Install MongoDB on your machine
2. Start MongoDB service:
   ```bash
   # macOS (using Homebrew)
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   # Start MongoDB from Services or use MongoDB Compass
   ```

### Option B: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Get your connection string
6. Whitelist your IP address (or use 0.0.0.0/0 for development)

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cd server
   cp env.example .env
   ```

2. Edit `.env` and update the MongoDB connection string:
   ```env
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/saalik_db
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/saalik_db?retryWrites=true&w=majority
   NODE_ENV=development
   ```

## Step 4: Start the API Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## Step 5: Configure Frontend

The frontend is already configured to use the API. If your API is running on a different URL, create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Testing the API

### Test Health Endpoint
```bash
curl http://localhost:5000/api/health
```

### Test Waitlist Endpoint
```bash
curl -X POST http://localhost:5000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+977 9812345678",
    "specialRequests": "Looking for heritage tour guide"
  }'
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/waitlist` - Create waitlist entry
- `GET /api/waitlist` - Get all waitlist entries
- `GET /api/waitlist/:id` - Get single entry
- `DELETE /api/waitlist/:id` - Delete entry

## Troubleshooting

### MongoDB Connection Issues

1. **Check if MongoDB is running:**
   ```bash
   # macOS/Linux
   ps aux | grep mongod
   
   # Or check MongoDB service status
   brew services list  # macOS
   sudo systemctl status mongod  # Linux
   ```

2. **Check connection string format:**
   - Local: `mongodb://localhost:27017/saalik_db`
   - Atlas: `mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/saalik_db`

3. **Firewall/Network Issues:**
   - Ensure port 27017 (MongoDB) is accessible
   - For Atlas, whitelist your IP address

### Port Already in Use

If port 5000 is already in use, change it in `.env`:
```env
PORT=5001
```

### CORS Issues

The server is configured with CORS enabled. If you encounter CORS errors, ensure:
- The API URL in frontend matches the server URL
- Both are running on the same domain or CORS is properly configured

## Production Deployment

For production:

1. Set `NODE_ENV=production` in `.env`
2. Use a secure MongoDB connection string
3. Use environment variables for sensitive data
4. Consider using PM2 or similar for process management
5. Set up proper logging and monitoring

