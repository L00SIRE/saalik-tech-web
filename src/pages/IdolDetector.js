import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './IdolDetector.css';

const IdolDetector = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if already authenticated in this session
    return sessionStorage.getItem('idolDetectorAuth') === 'true';
  });
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Hardcoded credentials (internal use only)
  const INTERNAL_USER_ID = 'saalik_internal_2024';
  const INTERNAL_PASSWORD = 'SAALIK@IdolDetector2024';

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedIdol, setDetectedIdol] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectionTime, setDetectionTime] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [detectionError, setDetectionError] = useState(null);
  const fileInputRef = useRef(null);

  // Pre-saved idol database (you can expand this)
  const idolDatabase = {
    'krishna': {
      name: 'Lord Krishna',
      sanskritName: 'कृष्ण',
      description: 'Lord Krishna is the eighth avatar of Vishnu and one of the most widely revered deities in Hinduism. He is known as the divine statesman, the flute-playing cowherd, and the supreme personality of Godhead.',
      attributes: ['Flute', 'Peacock Feather', 'Cow', 'Butter'],
      significance: 'Krishna represents divine love, compassion, and the path of devotion (Bhakti Yoga). He is the central figure of the Bhagavad Gita.',
      temples: ['Krishna Janmashtami Temple (Mathura)', 'ISKCON Temples worldwide'],
      image: '/idols/krishna.jpg'
    },
    'shiva': {
      name: 'Lord Shiva',
      sanskritName: 'शिव',
      description: 'Lord Shiva is one of the principal deities of Hinduism, known as "The Destroyer" in the Trimurti. He is the supreme being who creates, protects, and transforms the universe.',
      attributes: ['Trident (Trishula)', 'Third Eye', 'Snake', 'Crescent Moon', 'Damaru (Drum)'],
      significance: 'Shiva represents the cosmic consciousness, meditation, and the destruction of ignorance. He is the patron god of yoga and arts.',
      temples: ['Pashupatinath Temple (Kathmandu)', 'Kashi Vishwanath Temple (Varanasi)'],
      image: '/idols/shiva.jpg'
    },
    'ganesh': {
      name: 'Lord Ganesha',
      sanskritName: 'गणेश',
      description: 'Lord Ganesha is the elephant-headed god of wisdom, success, and good fortune. He is the remover of obstacles and the son of Shiva and Parvati.',
      attributes: ['Elephant Head', 'Modak (Sweet)', 'Mouse (Vehicle)', 'Broken Tusk'],
      significance: 'Ganesha is worshipped at the beginning of any new venture or journey. He represents intellect, wisdom, and the ability to overcome obstacles.',
      temples: ['Siddhivinayak Temple (Mumbai)', 'Ganesh Chaturthi celebrations'],
      image: '/idols/ganesh.jpg'
    },
    'durga': {
      name: 'Goddess Durga',
      sanskritName: 'दुर्गा',
      description: 'Goddess Durga is the warrior goddess who combats evil forces and protects the universe. She is the divine mother and the embodiment of feminine power (Shakti).',
      attributes: ['Multiple Arms', 'Lion (Vehicle)', 'Weapons', 'Trident', 'Lotus'],
      significance: 'Durga represents the victory of good over evil, divine feminine power, and protection. She is worshipped during Navratri.',
      temples: ['Durga Temple (Varanasi)', 'Kalighat Temple (Kolkata)'],
      image: '/idols/durga.jpg'
    },
    'vishnu': {
      name: 'Lord Vishnu',
      sanskritName: 'विष्णु',
      description: 'Lord Vishnu is the preserver and protector of the universe in the Hindu Trimurti. He maintains cosmic order and takes various avatars to restore dharma.',
      attributes: ['Conch Shell', 'Discus (Sudarshana Chakra)', 'Lotus', 'Mace', 'Garuda (Vehicle)'],
      significance: 'Vishnu represents preservation, protection, and the maintenance of cosmic order. He is known for his ten avatars including Rama and Krishna.',
      temples: ['Badrinath Temple', 'Tirupati Balaji Temple'],
      image: '/idols/vishnu.jpg'
    },
    'lakshmi': {
      name: 'Goddess Lakshmi',
      sanskritName: 'लक्ष्मी',
      description: 'Goddess Lakshmi is the goddess of wealth, fortune, power, beauty, and prosperity. She is the consort of Lord Vishnu and the embodiment of abundance.',
      attributes: ['Lotus', 'Gold Coins', 'Elephants', 'Owl (Vehicle)', 'Four Arms'],
      significance: 'Lakshmi represents material and spiritual wealth, prosperity, and good fortune. She is worshipped during Diwali and other festivals.',
      temples: ['Mahalakshmi Temple (Mumbai)', 'Lakshmi Narayan Temple'],
      image: '/idols/lakshmi.jpg'
    },
    'hanuman': {
      name: 'Lord Hanuman',
      sanskritName: 'हनुमान',
      description: 'Lord Hanuman is the monkey god known for his unwavering devotion to Lord Rama. He is the symbol of strength, courage, and selfless service.',
      attributes: ['Mace (Gada)', 'Monkey Form', 'Flying Ability', 'Rama\'s Name'],
      significance: 'Hanuman represents devotion, strength, and loyalty. He is worshipped for protection, courage, and overcoming challenges.',
      temples: ['Hanuman Dhoka (Kathmandu)', 'Sankat Mochan Temple'],
      image: '/idols/hanuman.jpg'
    },
    'saraswati': {
      name: 'Goddess Saraswati',
      sanskritName: 'सरस्वती',
      description: 'Goddess Saraswati is the goddess of knowledge, music, art, wisdom, and learning. She is the consort of Lord Brahma and the patron of arts and sciences.',
      attributes: ['Veena (Musical Instrument)', 'Book', 'Swan (Vehicle)', 'Lotus', 'White Sari'],
      significance: 'Saraswati represents knowledge, creativity, and wisdom. She is worshipped by students, artists, and scholars.',
      temples: ['Saraswati Temples across India', 'Basanta Panchami celebrations'],
      image: '/idols/saraswati.jpg'
    }
  };

  // Simulate AI detection based on filename or image hash
  const detectIdol = async (imageFile) => {
    const startTime = Date.now();
    setIsScanning(true);
    setScanProgress(0);
    setDetectedIdol(null);
    setDetectionTime(null);
    setConfidence(null);
    setDetectionError(null);

    // Simulate scanning animation with confidence calculation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          return 100;
        }
        const newProgress = prev + Math.random() * 12;
        
        // Calculate confidence based on progress (starts low, increases as progress increases)
        // Base confidence: 75-85% at start, 92-99% at end
        const baseConfidence = 75 + (newProgress / 100) * 20; // 75% to 95%
        const variation = (Math.random() - 0.5) * 4; // ±2% variation
        const calculatedConfidence = Math.min(99.9, Math.max(75, baseConfidence + variation));
        setConfidence(calculatedConfidence.toFixed(1));
        
        return newProgress;
      });
    }, 150);

    // Simulate AI processing delay (4-6 seconds for more realistic detection)
    const processingTime = 4000 + Math.random() * 2000; // 4-6 seconds
    await new Promise(resolve => setTimeout(resolve, processingTime));

    clearInterval(scanInterval);
    setScanProgress(100);

    // Detection based on filename only (fixed dataset)
    // Normalize filename: lowercase, remove spaces, remove special chars for matching
    const fileName = imageFile.name.toLowerCase()
      .replace(/\s+/g, '')           // Remove spaces
      .replace(/[_-]/g, '')          // Remove underscores and hyphens
      .replace(/\.(jpg|jpeg|png|gif|webp|heic|heif)$/i, ''); // Remove extension
    
    let detectedKey = null;

    // Check filename for idol names in database (case-insensitive, flexible matching)
    for (const key in idolDatabase) {
      const normalizedKey = key.toLowerCase();
      // Check if filename contains the key or vice versa
      if (fileName.includes(normalizedKey) || normalizedKey.includes(fileName)) {
        detectedKey = key;
        break;
      }
      
      // Also check for common variations and partial matches
      // e.g., "krishna" matches "krishna", "krishnaidol", "idolkrishna", etc.
      const keyPattern = new RegExp(normalizedKey, 'i');
      if (keyPattern.test(fileName)) {
        detectedKey = key;
        break;
      }
    }

    // Add small delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 500));

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds with 2 decimals
    
    setIsScanning(false);
    setDetectionTime(duration);
    
    // Log detection result for debugging
    console.log('Detection result:', {
      fileName: imageFile.name,
      normalizedFileName: fileName,
      detectedKey: detectedKey,
      availableKeys: Object.keys(idolDatabase)
    });
    
    if (detectedKey) {
      // Idol detected - calculate confidence (94-99% for exact match)
      const finalConfidence = (94 + Math.random() * 5).toFixed(1);
      setConfidence(finalConfidence);
      setDetectedIdol(idolDatabase[detectedKey]);
      setDetectionError(null);
    } else {
      // No match found - show error message with helpful info
      console.warn('No match found for filename:', imageFile.name);
      setDetectedIdol(null);
      setConfidence(null);
      setDetectionError(true);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDetectedIdol(null);
      setDetectionError(null);
      
      // Log filename for debugging (especially useful for mobile)
      console.log('Selected file:', file.name);
      console.log('File name (lowercase):', file.name.toLowerCase());
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);

      // Auto-start detection
      detectIdol(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      fileInputRef.current.files = e.dataTransfer.files;
      handleImageSelect({ target: { files: [file] } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');

    if (userId === INTERNAL_USER_ID && password === INTERNAL_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('idolDetectorAuth', 'true');
      setUserId('');
      setPassword('');
      setLoginAttempts(0);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setAuthError('You have no access. This is for company use only.');
      } else {
        setAuthError('Invalid credentials. Please retry or you have no access for company use only.');
      }
      
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('idolDetectorAuth');
    setUserId('');
    setPassword('');
    setAuthError('');
    setLoginAttempts(0);
    // Reset all detection state
    resetDetection();
  };

  const resetDetection = () => {
    setPreviewUrl(null);
    setDetectedIdol(null);
    setScanProgress(0);
    setIsScanning(false);
    setDetectionError(null);
    setConfidence(null);
    setDetectionTime(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="idol-detector-page">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <div className="auth-header">
              <div className="auth-lock-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h1>Internal Access Required</h1>
              <p className="auth-subtitle">AI Idol Detector - Company Use Only</p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
              <div className="auth-input-group">
                <label htmlFor="userId">Internal User ID</label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter user ID"
                  required
                  autoFocus
                  className={authError ? 'auth-input-error' : ''}
                />
              </div>

              <div className="auth-input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className={authError ? 'auth-input-error' : ''}
                />
              </div>

              {authError && (
                <div className="auth-error-message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {authError}
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                Access System
              </button>

              {loginAttempts > 0 && (
                <p className="auth-attempts">
                  Attempts: {loginAttempts}/3
                </p>
              )}
            </form>

            <div className="auth-footer">
              <p>🔒 Restricted Access - Authorized Personnel Only</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="idol-detector-page">
      <Navbar />
      
      <div className="detector-container">
        <div className="detector-header">
          <div className="header-top">
            <h1>AI <span className="accent">IDOL DETECTOR</span></h1>
            <button onClick={handleLogout} className="logout-btn" title="Logout">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logout
            </button>
          </div>
          <p className="subtitle">Advanced Image Recognition System for Hindu Deities</p>
          <p className="note">🔒 Internal Use Only</p>
        </div>

        <div className="detector-content">
          {/* Upload Section */}
          <div className="upload-section">
            <div
              className="upload-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {!previewUrl ? (
                <>
                  <div className="upload-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <p className="upload-text">Drag & drop an image here</p>
                  <p className="upload-subtext">or click to browse</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="file-input"
                  />
                </>
              ) : (
                <div className="preview-container">
                  <img src={previewUrl} alt="Selected" className="preview-image" />
                  <button onClick={resetDetection} className="reset-btn">
                    ✕ Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Scanning Animation */}
          {isScanning && previewUrl && (
            <div className="scanning-overlay">
              <div className="scanning-content">
                <div className="scan-animation">
                  <div className="scan-image-container">
                    <img src={previewUrl} alt="Scanning" className="scan-image" />
                    <div className="scan-overlay-effects">
                      {/* Single primary scanning line that follows progress */}
                      <div 
                        className="scan-line-horizontal" 
                        style={{ 
                          top: `${scanProgress}%`,
                          opacity: scanProgress > 5 && scanProgress < 95 ? 1 : 0.3
                        }}
                      ></div>
                      
                      {/* Subtle secondary scanning line */}
                      <div 
                        className="scan-line-horizontal" 
                        style={{ 
                          top: `${(scanProgress + 25) % 100}%`,
                          opacity: (scanProgress + 25) % 100 > 5 && (scanProgress + 25) % 100 < 95 ? 0.5 : 0.2
                        }}
                      ></div>
                      
                      {/* Corner markers - subtle frame */}
                      <div className="corner-marker top-left"></div>
                      <div className="corner-marker top-right"></div>
                      <div className="corner-marker bottom-left"></div>
                      <div className="corner-marker bottom-right"></div>
                      
                      {/* Subtle grid overlay for analysis reference */}
                      <div className="scan-grid-overlay">
                        <div className="grid-line horizontal" style={{ top: '25%' }}></div>
                        <div className="grid-line horizontal" style={{ top: '50%' }}></div>
                        <div className="grid-line horizontal" style={{ top: '75%' }}></div>
                        <div className="grid-line vertical" style={{ left: '25%' }}></div>
                        <div className="grid-line vertical" style={{ left: '50%' }}></div>
                        <div className="grid-line vertical" style={{ left: '75%' }}></div>
                      </div>
                      
                      {/* Subtle feature detection points - appear as analysis progresses */}
                      {scanProgress > 20 && (
                        <div className="detection-point" style={{ top: '30%', left: '35%', animationDelay: '0s' }}></div>
                      )}
                      {scanProgress > 40 && (
                        <div className="detection-point" style={{ top: '55%', left: '65%', animationDelay: '0.5s' }}></div>
                      )}
                      {scanProgress > 60 && (
                        <div className="detection-point" style={{ top: '75%', left: '45%', animationDelay: '1s' }}></div>
                      )}
                      {scanProgress > 80 && (
                        <div className="detection-point" style={{ top: '40%', left: '70%', animationDelay: '1.5s' }}></div>
                      )}
                    </div>
                  </div>
                </div>
                <h2>Analyzing Image...</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                {confidence && (
                  <div className="confidence-indicator">
                    Confidence: <span className="confidence-value">{confidence}%</span>
                  </div>
                )}
                <p className="scan-status">
                  {scanProgress < 30 && 'Initializing AI model...'}
                  {scanProgress >= 30 && scanProgress < 60 && 'Extracting features...'}
                  {scanProgress >= 60 && scanProgress < 90 && 'Matching patterns...'}
                  {scanProgress >= 90 && 'Finalizing detection...'}
                </p>
              </div>
            </div>
          )}

          {/* Detection Error */}
          {detectionError && !isScanning && (
            <div className="detection-error">
              <div className="error-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h2>Detection Failed</h2>
              <p className="error-message">
                Couldn't detect the idol. Please upload the statue of a god.
              </p>
              <p className="error-hint">
                Make sure the image filename contains the name of a Hindu deity (case-insensitive).<br/>
                Examples: krishna.jpg, Shiva.png, GANESH.jpg, durga-idol.png<br/>
                <br/>
                <strong>Available deities:</strong> Krishna, Shiva, Ganesh, Durga, Vishnu, Lakshmi, Hanuman, Saraswati
              </p>
              <button onClick={resetDetection} className="try-again-btn">
                Try Again
              </button>
            </div>
          )}

          {/* Detection Result */}
          {detectedIdol && !isScanning && (
            <div className="detection-result">
              <div className="result-header">
                <h2>AI Detection Complete</h2>
                <div className="result-metrics">
                  {confidence && (
                    <div className="confidence-badge">
                      {confidence}% Confidence
                    </div>
                  )}
                  {detectionTime && (
                    <div className="time-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {detectionTime}s
                    </div>
                  )}
                </div>
              </div>

              <div className="idol-info">
                <div className="idol-main">
                  <h1 className="idol-name">{detectedIdol.name}</h1>
                  <p className="idol-sanskrit">{detectedIdol.sanskritName}</p>
                </div>

                <div className="idol-details">
                  <div className="detail-section">
                    <h3>Description</h3>
                    <p>{detectedIdol.description}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Attributes</h3>
                    <div className="attributes-list">
                      {detectedIdol.attributes.map((attr, idx) => (
                        <span key={idx} className="attribute-tag">{attr}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Significance</h3>
                    <p>{detectedIdol.significance}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Famous Temples</h3>
                    <ul className="temples-list">
                      {detectedIdol.temples.map((temple, idx) => (
                        <li key={idx}>{temple}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button onClick={resetDetection} className="detect-another-btn">
                Detect Another Image
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdolDetector;

