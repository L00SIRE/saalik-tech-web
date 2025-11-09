# MongoDB Password Troubleshooting

## If Authentication Still Fails After Updating Password

### 1. Check Password Format

MongoDB connection strings require **URL encoding** for special characters in passwords.

**Common special characters that need encoding:**
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `/` → `%2F`
- `=` → `%3D`
- `?` → `%3F`
- ` ` (space) → `%20`

**Example:**
If your password is: `MyP@ss#123`
Use in connection string: `MyP%40ss%23123`

### 2. Verify .env File Format

Your `.env` file should look like:
```env
# Replace [USERNAME], [PASSWORD], and [CLUSTER] with your actual MongoDB Atlas credentials
MONGODB_URI=mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/saalik_tech_db?retryWrites=true&w=majority
```

**Important:**
- No quotes around the URI
- No spaces around the `=`
- Password should be URL-encoded if it has special characters

### 3. Restart Server Properly

1. **Stop the current server** (Ctrl+C)
2. **Kill any remaining processes:**
   ```bash
   pkill -f "node.*server.js"
   ```
3. **Start fresh:**
   ```bash
   npm run dev
   ```

### 4. Verify User Exists

1. Go to MongoDB Atlas
2. Security → Database & Network Access
3. Verify your database user exists in MongoDB Atlas
4. Check user has proper permissions (Read and write to any database)

### 5. Test Connection String

You can test your connection string format:
```bash
# From server directory
node -e "console.log(process.env.MONGODB_URI)" 
```

This will show if the .env is being read correctly (password will be visible, so be careful).

### 6. Common Issues

- **Password has `@` symbol**: Must be encoded as `%40`
- **Password has spaces**: Must be encoded as `%20` or removed
- **.env file has quotes**: Remove quotes around the URI
- **Wrong username**: Double-check your MongoDB Atlas username is correct
- **Database name wrong**: Verify `saalik_tech_db` exists

### Quick Test

Try creating a simple test connection string with a simple password first to verify the format works, then update with your actual password.

