# How to Get MongoDB Atlas Connection String

## Step 1: Get Your Connection String from MongoDB Atlas

1. **Log into MongoDB Atlas**: https://cloud.mongodb.com

2. **Navigate to your cluster** (the one you're using)

3. **Click "Connect"** button on your cluster

4. **Select "Connect your application"**

5. **Choose your driver version**: Select "Node.js" and the latest version

6. **Copy the connection string** - It will look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 2: Replace Placeholders

Replace the placeholders in the connection string:
- `<username>` → Your database username (e.g., `your_username`)
- `<password>` → Your database user's password
- Add your database name: Replace `?` with `/saalik_tech_db?`

**Final format should be:**
```
mongodb+srv://your_username:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/saalik_tech_db?retryWrites=true&w=majority
```

## Step 3: Update Your .env File

Update `server/.env` with your new connection string:

```env
PORT=5001
MONGODB_URI=mongodb+srv://your_username:YOUR_ACTUAL_PASSWORD@YOUR_CLUSTER.mongodb.net/saalik_tech_db?retryWrites=true&w=majority
NODE_ENV=development
```

## Important Notes

- **Database Name**: `saalik_tech_db` (as shown in your MongoDB Atlas)
- **Username**: Your MongoDB Atlas username
- **Password**: The password you set when creating the user
- **Network Access**: Make sure your IP is whitelisted in MongoDB Atlas (or use `0.0.0.0/0` for development)

## Testing the Connection

After updating `.env`, restart your server:
```bash
cd server
npm run dev
```

You should see: `✅ Connected to MongoDB`

