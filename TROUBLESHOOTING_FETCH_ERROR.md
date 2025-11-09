# Troubleshooting "Failed to fetch" Error

## Issue
Frontend is getting "Failed to fetch" when trying to connect to the API.

## Quick Checks

### 1. Verify Both Servers Are Running

**Frontend (React):**
```bash
# Should be running on http://localhost:3000
npm start
```

**Backend (API):**
```bash
# Should be running on http://localhost:5001
cd server
npm run dev
```

### 2. Test API Directly

Open in browser or use curl:
```bash
# Health check
curl http://localhost:5001/api/health

# Should return: {"status":"OK","message":"SAALIK API is running"}
```

### 3. Check Browser Console

Open browser DevTools (F12) → Console tab
- Look for CORS errors
- Look for network errors
- Check if the request is being made

### 4. Verify API URL

The frontend is configured to use:
- Default: `http://localhost:5001/api`
- Can be overridden with `REACT_APP_API_URL` environment variable

### 5. CORS Configuration

The API server now has specific CORS origins configured:
- `http://localhost:3000` (React default)
- `http://localhost:3001` (alternative React port)
- `http://127.0.0.1:3000` (alternative localhost)

If your React app runs on a different port, update `server/server.js` CORS configuration.

## Common Solutions

### Solution 1: Restart Both Servers
```bash
# Stop both servers (Ctrl+C)
# Then restart:

# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
npm start
```

### Solution 2: Check Port Conflicts
```bash
# Check if port 5001 is available
lsof -i :5001

# Check if port 3000 is available
lsof -i :3000
```

### Solution 3: Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache

### Solution 4: Check Network Tab
1. Open DevTools → Network tab
2. Try submitting the form
3. Look for the request to `/api/waitlist`
4. Check the status code and error message

## Updated Error Messages

The frontend now shows more specific error messages:
- "Cannot connect to server. Please make sure the API server is running on http://localhost:5001"
- This helps identify if it's a connection issue vs. an API error

## Test the Connection

You can test if the API is accessible from your browser:
1. Open: `http://localhost:5001/api/health`
2. Should see: `{"status":"OK","message":"SAALIK API is running"}`

If this works but the form doesn't, it's likely a CORS or React app issue.

