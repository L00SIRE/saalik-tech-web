# Idol Detector - Internal Tool

## Overview
A hidden internal webapp page for detecting and identifying Hindu deities/idols from uploaded images. Features a fake AI scanning animation for demonstration purposes.

## Access
**URL:** `/internal/idol-detector`  
**Note:** This route is NOT in the main navigation - it's hidden for internal use only.

## Features

### 1. Image Upload
- Drag & drop image upload
- Click to browse files
- Image preview before detection
- Supports all common image formats

### 2. AI Scanning Animation
- Realistic scanning animation with progress bar
- Grid overlay effect
- Scanning line animation
- Status messages during "processing"
- Takes 2-3 seconds to simulate AI processing

### 3. Detection System
- **Filename-based detection:** Matches idol name in filename (e.g., `krishna.jpg`)
- **Hash-based fallback:** If filename doesn't match, uses a simple hash algorithm
- **Pre-loaded database:** 8 deities with detailed information

### 4. Idol Information Display
- Name (English and Sanskrit)
- Detailed description
- Attributes/characteristics
- Religious significance
- Famous temples

## Pre-loaded Idols

1. **Lord Krishna** - Divine statesman and flute player
2. **Lord Shiva** - The destroyer and transformer
3. **Lord Ganesha** - Remover of obstacles
4. **Goddess Durga** - Warrior goddess
5. **Lord Vishnu** - The preserver
6. **Goddess Lakshmi** - Goddess of wealth
7. **Lord Hanuman** - Devotee of Rama
8. **Goddess Saraswati** - Goddess of knowledge

## How Detection Works

### Current Implementation (Fake AI)
1. User uploads an image
2. System checks filename for idol names
3. If found, displays that idol's information
4. If not found, uses hash-based selection from database

### To Make It Work with Your Images

1. **Prepare your images:**
   - Place images in `public/idols/` folder
   - Name them with the idol name: `krishna.jpg`, `shiva.png`, etc.

2. **Add idol data:**
   - Open `src/pages/IdolDetector.js`
   - Find the `idolDatabase` object
   - Add your idol information:
   ```javascript
   'your-idol-name': {
     name: 'Idol Name',
     sanskritName: 'संस्कृत',
     description: 'Description...',
     attributes: ['Attribute 1', 'Attribute 2'],
     significance: 'Significance...',
     temples: ['Temple 1', 'Temple 2'],
     image: '/idols/your-image.jpg'
   }
   ```

3. **Detection logic:**
   - When user uploads `krishna.jpg`, it will detect Krishna
   - When user uploads `shiva.png`, it will detect Shiva
   - For other filenames, it uses hash-based selection

## API Endpoint (Optional)

An API endpoint is available at `/api/idols` for:
- **GET** `/api/idols` - Get all idols
- **GET** `/api/idols?name=krishna` - Get specific idol
- **GET** `/api/idols?hash=abc123` - Get by image hash
- **POST** `/api/idols` - Add/update idol data

This can be used to store idol data in MongoDB instead of hardcoding.

## Future Enhancements

1. **Real Image Recognition:**
   - Integrate with TensorFlow.js or similar
   - Train model on idol images
   - Actual AI-based detection

2. **Database Integration:**
   - Store idol data in MongoDB
   - Store image hashes for matching
   - Admin panel to add/edit idols

3. **Image Processing:**
   - Image preprocessing
   - Feature extraction
   - Similarity matching

## Styling

The page uses a dark theme with:
- Green accent color (#00bf63) matching SAALIK brand
- Smooth animations and transitions
- Responsive design
- Modern UI with glassmorphism effects

## Security Note

This is an internal tool. The route is hidden from navigation but accessible via direct URL. For production, consider:
- Adding authentication
- Restricting access by IP
- Adding password protection

