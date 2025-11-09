# SAALIK Tech Web - React Application

This project has been converted from a vanilla HTML/CSS/JS website to a React application.

## Project Structure

```
Saalik_Tech_Web/
├── public/                 # Static assets and React entry HTML
│   ├── index.html         # React entry point
│   └── *.png, *.jpg       # Image assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.js     # Navigation bar with mobile menu
│   │   ├── ContactModal.js # Contact information modal
│   │   ├── ImageSlider.js # Hero image slider
│   │   ├── ContentSection.js # Reusable content section component
│   │   ├── CollaborationFooter.js # Collaboration partners section
│   │   ├── SaalikGroup.js # SAALIK group logos
│   │   └── Footer.js     # Main footer
│   ├── pages/            # Page components
│   │   ├── Home.js       # Home page
│   │   ├── Stories.js    # Stories listing page
│   │   ├── StoryDetail.js # Story detail page
│   │   └── GuideBooking.js # Guide booking page
│   ├── config/           # Configuration files
│   │   └── api.js        # API endpoint configuration
│   ├── App.js            # Main application component
│   ├── index.js          # React entry point
│   └── index.css         # CSS imports
├── server/                # Backend API server
│   ├── server.js         # Express server
│   ├── package.json      # Server dependencies
│   ├── env.example       # Environment variables example
│   └── README.md         # Server setup guide
├── style.css             # Main stylesheet (all styles)
├── package.json          # React dependencies
├── API_SETUP.md          # API setup instructions
├── index.html            # LEGACY - Original HTML (not used)
└── script.js             # LEGACY - Original JS (not used)
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Install frontend dependencies:**
```bash
npm install
```

2. **Set up backend API server:**
```bash
cd server
npm install
cp env.example .env
# Edit .env with your MongoDB connection string
```

3. **Start the backend server:**
```bash
cd server
npm run dev  # Development mode with auto-reload
# OR
npm start    # Production mode
```

The API server will run on `http://localhost:5000`

4. **Start the frontend development server:**
```bash
# From root directory
npm start
```

The app will open at `http://localhost:3000`

> **Note:** For detailed API setup instructions, see [API_SETUP.md](./API_SETUP.md)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Component Overview

### Navbar
- Fixed navigation bar with logo and menu items
- Mobile-responsive hamburger menu
- Contact modal trigger

### ImageSlider
- Auto-playing image carousel
- Touch/swipe support for mobile devices
- Navigation arrows and dot indicators

### ContentSection
- Reusable component for content sections
- Supports image placement (left/right)
- Customizable headings and descriptions

### ContactModal
- Modal dialog with contact information
- Social media links
- Keyboard navigation support (ESC to close)

## Legacy Files

The following files are kept for reference but are not used by the React application:
- `index.html` - Original HTML file (marked as legacy)
- `script.js` - Original JavaScript file (marked as legacy)

## Unused Code

The following CSS classes have been commented out as they're not currently used:
- Hero section styles (`.hero-content`, `.hero-title`, etc.)
- Button styles (`.btn-primary`, `.btn-secondary`)
- Utility classes (`.loading`, `.error`, `.success`, `.overlay`)

These can be uncommented if needed in the future.

## Notes

- All images are in the `public/` directory and referenced with `/filename.png`
- The original CSS file (`style.css`) is imported in `src/index.css`
- All functionality from the original JavaScript has been converted to React hooks (useState, useEffect)


