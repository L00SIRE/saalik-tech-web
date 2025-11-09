# Quick Fix for MongoDB Authentication Error

## Current Status
❌ Authentication failing: "bad auth : authentication failed"

## Recommended Solution: Reset Password to Simple One

### Step 1: Reset Password in MongoDB Atlas
1. Go to: https://cloud.mongodb.com/v2#/security/database/users
2. Find your database user (e.g., `your_username`)
3. Click **Edit** (pencil icon)
4. Click **Edit Password**
5. **Set a simple password** (letters and numbers only, no special characters)
   - Example: `MyPassword123` or `Saalik2024`
6. **Copy the password immediately**
7. Click **Update User**

### Step 2: Update .env File
1. Open `server/.env`
2. Find the line with `MONGODB_URI`
3. Replace the password part (between `:` and `@`) with your new simple password
4. Save the file

**Example:**
```env
# Replace [USERNAME], [PASSWORD], and [CLUSTER] with your actual values
# Example format (do not use actual credentials in documentation):
MONGODB_URI=mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/saalik_tech_db?retryWrites=true&w=majority
```

### Step 3: Test Connection
```bash
cd server
node test-connection.js
```

You should see: `✅ SUCCESS: Connected to MongoDB!`

### Step 4: Start Server
```bash
npm run dev
```

You should see: `✅ Connected to MongoDB`

## Alternative: If You Must Use Special Characters

If your password has special characters, you need to URL-encode them:

1. Run the encoder:
   ```bash
   node encode-password.js
   ```

2. Enter your password when prompted

3. Copy the URL-encoded version

4. Use it in your `.env` file

## Common Special Character Encodings
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `/` → `%2F`
- `=` → `%3D`
- `?` → `%3F`
- Space → `%20`

## Verify Everything
- ✅ Username: Your MongoDB Atlas username
- ✅ Database: `saalik_tech_db` (or your database name)
- ✅ Cluster: Your MongoDB Atlas cluster address
- ✅ Password: Simple (no special chars) OR URL-encoded

