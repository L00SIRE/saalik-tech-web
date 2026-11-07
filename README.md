# saalik.tech — company website

**Live:** https://saalik-tech-web.vercel.app

The website for **Saalik Tech**, the startup I co-founded. Saalik connects travelers with local guides ("Saaliks") in Nepal for free walking tours. Travelers book for free and tip the guide afterwards. The mobile app is in [Saalik_app](https://github.com/L00SIRE/Saalik_app).

## What's on the site

- Home page with an image slider, our initiative, and work we've done so far
- Stories: traveler and guide write-ups with detail pages
- Guide booking form
- Waitlist signup that saves to MongoDB through a serverless function
- An internal prototype page that matches uploaded temple deity images against a small reference set (placeholder matching for now, not a trained model)

## Stack

- **Frontend:** React 18, React Router, CRA
- **API:** Vercel serverless functions in `api/` (`waitlist`, `idols`, `health`), Mongoose
- **Database:** MongoDB Atlas
- **Local server:** `server/`, an Express version of the same API for development

## Run

```bash
npm install
cp server/env.example .env   # add your MONGODB_URI
npm start
```

For the serverless API locally:

```bash
npx vercel dev
```

## Environment

| Variable | Used by |
|---|---|
| `MONGODB_URI` | `api/db.js`, `server/server.js` |

Never commit `.env`. It's already in `.gitignore`.
