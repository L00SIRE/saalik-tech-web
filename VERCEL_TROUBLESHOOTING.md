# Vercel API Troubleshooting Guide

## Issue: `/api/waitlist` returns 405 or HTML instead of JSON

### Symptoms
- `/api/health` works (returns JSON)
- `/api/waitlist` returns 405 Method Not Allowed or HTML (React app)

### Possible Causes & Solutions

#### 1. Functions Not Deployed
**Check:** Go to Vercel Dashboard → Your Project → Functions tab
- If you don't see `/api/waitlist` listed, the function isn't deployed
- If you see it but it's failing, check the error logs

**Solution:**
```bash
git add .
git commit -m "Add API serverless functions"
git push
```

Wait for Vercel to deploy, then check the Functions tab again.

#### 2. MongoDB Connection Error
**Check:** Vercel Dashboard → Functions → `/api/waitlist` → View Logs

If you see MongoDB connection errors:
- Verify `MONGODB_URI` is set in Vercel Environment Variables
- Go to Settings → Environment Variables
- Make sure it's set for Production, Preview, and Development
- Check that your MongoDB Atlas IP whitelist includes `0.0.0.0/0`

#### 3. Function Runtime Error
**Check:** Vercel Dashboard → Functions → `/api/waitlist` → View Logs

Common errors:
- `MONGODB_URI is not defined` → Add environment variable
- `Cannot connect to MongoDB` → Check connection string and IP whitelist
- `Module not found: mongoose` → Run `npm install` and redeploy

#### 4. Route Not Matching
**Check:** The function file must be at `/api/waitlist.js` (not in a subdirectory)

**Solution:**
- Ensure file structure:
  ```
  api/
    ├── health.js
    ├── waitlist.js
    ├── waitlist/
    │   └── [id].js
    └── db.js
  ```

#### 5. Build Configuration Issue
**Check:** `vercel.json` configuration

Make sure `vercel.json` includes:
```json
{
  "functions": {
    "api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

## Quick Diagnostic Steps

1. **Test Health Endpoint:**
   ```bash
   curl https://www.saalik.tech/api/health
   ```
   Should return: `{"status":"OK","message":"SAALIK API is running"}`

2. **Test Waitlist Endpoint:**
   ```bash
   curl -X POST https://www.saalik.tech/api/waitlist \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","phone":"123"}'
   ```

3. **Check Vercel Logs:**
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on `/api/waitlist`
   - Check "Logs" tab for errors

4. **Verify Environment Variables:**
   - Go to Settings → Environment Variables
   - Verify `MONGODB_URI` is set
   - Make sure it's enabled for all environments

5. **Redeploy:**
   ```bash
   # Make a small change and push
   git commit --allow-empty -m "Trigger redeploy"
   git push
   ```

## Expected Behavior

✅ **Working:**
- `/api/health` → Returns JSON with status OK
- `/api/waitlist` (POST) → Returns JSON with success message
- `/api/waitlist` (GET) → Returns JSON with waitlist entries

❌ **Not Working:**
- Returns HTML (React app)
- Returns 404 Not Found
- Returns 405 Method Not Allowed
- Returns 500 Internal Server Error

## Still Not Working?

1. Check Vercel function logs for specific error messages
2. Verify MongoDB connection string format
3. Test MongoDB connection locally first
4. Ensure `mongoose` is in `package.json` dependencies
5. Try redeploying from Vercel dashboard (Redeploy button)

