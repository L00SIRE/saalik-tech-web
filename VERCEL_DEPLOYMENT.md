# Vercel Deployment Guide for SAALIK API

## ✅ What's Been Set Up

Your Express.js API has been converted to Vercel serverless functions:

- `/api/health.js` - Health check endpoint
- `/api/waitlist.js` - Create and get waitlist entries
- `/api/waitlist/[id].js` - Get and delete specific waitlist entry
- `/api/db.js` - MongoDB connection utility

## 📋 Deployment Steps

### 1. Install Dependencies

```bash
npm install
```

This will install `mongoose` which is needed for the serverless functions.

### 2. Add Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project (saalik.tech)
3. Go to **Settings** → **Environment Variables**
4. Add the following variable:

   **Name:** `MONGODB_URI`  
   **Value:** Your MongoDB connection string  
   **Environment:** Production, Preview, Development (select all)

   Example:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/saalik_db?retryWrites=true&w=majority
   ```

### 3. Deploy to Vercel

If you're using Git:
```bash
git add .
git commit -m "Add Vercel serverless functions for API"
git push
```

Vercel will automatically deploy when you push.

Or deploy manually:
```bash
vercel --prod
```

### 4. Test the API

After deployment, test your endpoints:

**Health Check:**
```bash
curl https://www.saalik.tech/api/health
```

**Create Waitlist Entry:**
```bash
curl -X POST https://www.saalik.tech/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+977 9812345678",
    "specialRequests": "Test request"
  }'
```

**Get All Entries:**
```bash
curl https://www.saalik.tech/api/waitlist
```

## 🔍 Troubleshooting

### Issue: "Cannot connect to MongoDB"

**Solution:**
- Verify `MONGODB_URI` is set correctly in Vercel environment variables
- Check that your MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs)
- Ensure your MongoDB password doesn't have special characters that need URL encoding

### Issue: "Function not found" or 404 errors

**Solution:**
- Make sure the `/api` directory is in the root of your project
- Verify the file names match exactly: `health.js`, `waitlist.js`, etc.
- Check Vercel deployment logs for build errors

### Issue: CORS errors

**Solution:**
- The serverless functions already include CORS headers
- If you still see CORS errors, check the browser console for the exact error
- Verify the origin is being detected correctly

## 📝 Notes

- The serverless functions use connection pooling to reuse MongoDB connections
- Each function invocation is independent, but connections are cached globally
- The API endpoints are now at the same domain as your frontend: `https://www.saalik.tech/api/*`
- Your frontend is already configured to use these endpoints automatically

## 🎯 Next Steps

1. Deploy and test the health endpoint first
2. Test creating a waitlist entry
3. Verify the data is saved in MongoDB
4. Test from your frontend form

If you encounter any issues, check the Vercel function logs in your dashboard under the "Functions" tab.

