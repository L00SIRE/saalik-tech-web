# SAALIK API Server

Backend API server for SAALIK platform.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Update MongoDB connection string
   ```bash
   cp .env.example .env
   ```

3. **Start MongoDB**
   - Make sure MongoDB is running locally, OR
   - Use MongoDB Atlas (cloud) and update `MONGODB_URI` in `.env`

4. **Run the Server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- `GET /api/health` - Check if API is running

### Waitlist
- `POST /api/waitlist` - Create new waitlist entry
- `GET /api/waitlist` - Get all waitlist entries
- `GET /api/waitlist/:id` - Get single waitlist entry
- `DELETE /api/waitlist/:id` - Delete waitlist entry

## Example Requests

### Create Waitlist Entry
```bash
curl -X POST http://localhost:5001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+977 9812345678",
    "specialRequests": "Looking for heritage tour guide"
  }'
```

### Get All Entries
```bash
curl http://localhost:5001/api/waitlist
```

