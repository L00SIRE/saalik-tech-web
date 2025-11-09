# MongoDB Authentication Error Fix

## Error
```
MongoServerError: bad auth : authentication failed
```

## Cause
The password in `server/.env` is either:
- Still the placeholder `<db_password>`
- Incorrect/outdated
- The user doesn't have proper permissions

## Solution

### Step 1: Get Your MongoDB Password

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Navigate to: **Security** → **Database & Network Access**
3. Find your database user (e.g., `your_username`)
4. Click **Edit** (pencil icon)
5. Click **Edit Password**
6. **If you remember the password**: Use it
7. **If you forgot**: Set a new password and **SAVE IT IMMEDIATELY**

### Step 2: Update server/.env

Open `server/.env` and replace `<db_password>` with your actual password:

**Current (incorrect):**
```env
# Replace [USERNAME], [PASSWORD], and [CLUSTER] with your actual values
MONGODB_URI=mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/saalik_tech_db?retryWrites=true&w=majority
```

**Should be (with real password):**
```env
# Replace bracketed values with your actual MongoDB Atlas credentials
# Format: mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/[DATABASE]?retryWrites=true&w=majority
MONGODB_URI=mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/saalik_tech_db?retryWrites=true&w=majority
```

### Step 3: Verify Network Access

Make sure your IP is whitelisted in MongoDB Atlas:
1. Go to **Security** → **Network Access**
2. Click **Add IP Address**
3. Add your current IP or use `0.0.0.0/0` for development (less secure)

### Step 4: Restart Server

```bash
cd server
npm run dev
```

You should see: `✅ Connected to MongoDB`

## Troubleshooting

- **Wrong password**: Double-check the password in MongoDB Atlas
- **User doesn't exist**: Verify your database user exists in MongoDB Atlas
- **Network blocked**: Check IP whitelist in Network Access
- **Database name wrong**: Verify `saalik_tech_db` exists in your cluster

