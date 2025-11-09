# Security Guidelines

## Sensitive Information

The following files and information should **NEVER** be committed to the repository:

- `.env` files (both root and server directories)
- MongoDB connection strings with actual credentials
- API keys and secrets
- Database passwords
- Personal access tokens

## Protected Files

All sensitive files are automatically ignored via `.gitignore`:
- `server/.env` - Server environment variables
- `.env` - Frontend environment variables
- `*.log` - Log files that may contain sensitive data
- Database files (`*.db`, `*.sqlite`)

## Before Committing

✅ **Always verify:**
1. No `.env` files are staged
2. No actual credentials in code
3. All sensitive values use environment variables
4. Example files (`.example`) are used for documentation

## Environment Variables

Use `.env` files for local development and set environment variables in your deployment platform (Heroku, Vercel, etc.) for production.

## Reporting Security Issues

If you discover a security vulnerability, please report it privately rather than opening a public issue.

