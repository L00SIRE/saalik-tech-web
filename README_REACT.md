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
│   ├── App.js            # Main application component
│   ├── index.js          # React entry point
│   └── index.css         # CSS imports
├── style.css             # Main stylesheet (all styles)
├── package.json          # React dependencies
├── index.html            # LEGACY - Original HTML (not used)
└── script.js             # LEGACY - Original JS (not used)
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

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

