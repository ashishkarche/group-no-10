import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './App.css';

import { FaGithub } from 'react-icons/fa';
import screenshot1 from './assets/Screenshot-1.png';
import screenshot2 from './assets/Screenshot-2.png';
import screenshot3 from './assets/Screenshot-3.png';
import LandingPage from './LandingPage'; // Import LandingPage component

const screenshots = [screenshot1, screenshot2, screenshot3];

function DotLoader() {
  return (
    <div className="dot-loader">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function DownloadApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change slide every 3 seconds
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false, // Disable dots on small screens
        },
      },
    ],
  };

  return (
    <section id="download">
      <h2>Download Secure File Storage App</h2>
      {loading ? (
        <DotLoader />
      ) : (
        <>
          <Slider {...settings} className="slider">
            {screenshots.map((screenshot, index) => (
              <div key={index}>
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="screenshot"
                />
              </div>
            ))}
          </Slider>
          <a href="https://drive.google.com/file/d/1tWGMLeVT6jrQKctoNzM4MTVRjmBap8a1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>Download Now</button>
          </a>
        </>
      )}
    </section>
  );
}


function AppInfo() {
  return (
    <section id="info">
      <h2>About the App</h2>
      <p>This app provides a secure solution for file storage using advanced cryptography techniques, allowing users to store secret data such as PDFs, images, executables, and any other type of file securely.</p>

    </section>
  );
}

function SystemRequirements() {
  return (
    <section id="requirements">
      <h2>System Requirements</h2>
      <ul>
        <li>Operating System: Windows 10 / macOS</li>
        <li>RAM: 4GB minimum</li>
        <li>Disk Space: 500MB available space</li>
        <li>Processor: Intel i3 or higher</li>
      </ul>
    </section>
  );
}

function EncryptionAlgorithms() {
  return (
    <section id="encryption">
      <h2>Encryption Algorithms</h2>
      <ul>
        <li>AES</li>
        <li>DES</li>
        <li>RC6</li>
        <li>SHA5</li>
      </ul>
      <a href="https://chat.openai.com/share/d4c200ff-e7d9-451e-aa48-9c005a703ec9" target="_blank" rel="noopener noreferrer">
        <p>Click to see explanation..</p>
      </a>
    </section>
  );
}

function MultipartyMethod() {
  return (
    <section id="multiparty">
      <h2>Multiparty Method</h2>
      <h3>Multiparty encryption with FHE</h3>
      <p>Encrypted data can be safely stored or transferred for analysis.</p>
      <p><strong>Fully homomorphic encryption:</strong> This method allows secure computation without limitations on operations.</p>
    </section>
  );
}

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleContinue = () => {
    setShowLanding(false);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  };

  return (
    <div className="App">
      {showLanding ? (
        <LandingPage onContinue={handleContinue} />
      ) : (
        <>
          <header>
            <h1>Secure File Storage on Cloud</h1>
            <a href="https://github.com/ashishkarche/SecureFileApp" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ fontSize: '24px', color: 'white', marginLeft: '10px' }} />
            </a>
          </header>
          {loading ? (
            <DotLoader />
          ) : (
            <main>
              <DownloadApp />
              <AppInfo />
              <SystemRequirements />
              <EncryptionAlgorithms />
              <MultipartyMethod />
            </main>
          )}
          <footer>
            <p>© 2024 Secure File Storage App. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;