# How to Reset MongoDB Atlas Password

## Option 1: Reset Password for Existing User (Suman_Root)

1. **Log into MongoDB Atlas**: https://cloud.mongodb.com

2. **Go to Database Access**:
   - Click on "Database Access" in the left sidebar
   - Or go to: https://cloud.mongodb.com/v2#/security/database/users

3. **Find your user**:
   - Look for `Suman_Root` in the user list

4. **Edit the user**:
   - Click the "Edit" button (pencil icon) next to `Suman_Root`

5. **Reset password**:
   - Click "Edit Password" or "Change Password"
   - Enter a new password (or use "Autogenerate Secure Password")
   - **IMPORTANT**: Copy/save the password immediately - you won't be able to see it again!

6. **Save changes**:
   - Click "Update User" or "Save"

## Option 2: Create a New User (Recommended if you can't find Suman_Root)

1. **Go to Database Access** in MongoDB Atlas

2. **Click "Add New Database User"**

3. **Choose Authentication Method**: "Password"

4. **Set Username**: e.g., `saalik_app_user`

5. **Set Password**: 
   - Enter a strong password
   - Or click "Autogenerate Secure Password" and copy it

6. **Set User Privileges**: 
   - Select "Read and write to any database" (for development)
   - Or "Atlas admin" (full access)

7. **Click "Add User"**

8. **Update your .env file** with the new username and password

## After Resetting/Creating Password

1. **Update `server/.env`**:
   ```env
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:NEW_PASSWORD@YOUR_CLUSTER.mongodb.net/saalik_tech_db?retryWrites=true&w=majority
   ```

2. **Test the connection**:
   ```bash
   cd server
   npm run dev
   ```

## Security Tips

- Use a strong, unique password
- Save the password in a password manager
- Never commit passwords to git
- Consider using environment variables in production

