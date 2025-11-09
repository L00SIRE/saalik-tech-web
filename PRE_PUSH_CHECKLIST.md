# Pre-Push Checklist

Before pushing to GitHub, verify the following:

## ✅ Security Checks

- [ ] No `.env` files are committed (check with `git status`)
- [ ] No hardcoded passwords or API keys in code
- [ ] MongoDB connection strings use environment variables only
- [ ] All sensitive data is in `.env` files (which are gitignored)

## ✅ Files to Commit

- [ ] `server/env.example` (with placeholder values)
- [ ] `.gitignore` (properly configured)
- [ ] `server/server.js` (no hardcoded credentials)
- [ ] `src/config/api.js` (uses environment variables)
- [ ] All source code files

## ✅ Documentation

- [ ] `README_REACT.md` updated
- [ ] `API_SETUP.md` created
- [ ] `server/README.md` created
- [ ] Security guidelines documented

## Quick Verification Commands

```bash
# Check for .env files in staging
git status | grep .env

# Verify .env is ignored
git check-ignore server/.env .env

# Search for potential secrets (should return no results)
grep -r "mongodb+srv://.*:.*@" --exclude-dir=node_modules --exclude="*.example" .
```

## Ready to Push! 🚀

Once all checks pass, you can safely push to GitHub.

