import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaApple, FaWindows } from 'react-icons/fa';
import screenshot1 from './assets/Screenshot-1.png';
import screenshot2 from './assets/Screenshot-2.png';
import screenshot3 from './assets/Screenshot-3.png';

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

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Secure File Storage App</h1>
        <p>Encrypt, store, and manage your files securely in the cloud.</p>
        <a href="#download">
          <button className="cta-button">Download Now</button>
        </a>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Advanced Encryption</h3>
          <p>We use AES, DES, and RC6 to keep your data secure at all times.</p>
        </div>
        <div className="feature-item">
          <h3>Multiparty Encryption</h3>
          <p>Collaborative encryption for added security in cloud file storage.</p>
        </div>
        <div className="feature-item">
          <h3>Fully Homomorphic Encryption</h3>
          <p>Allows computations on encrypted data without decryption.</p>
        </div>
      </div>
    </section>
  );
}

function ScreenshotCarousel() {
  return (
    <section className="screenshots">
      <h2>App Screenshots</h2>
      <div className="screenshots-grid">
        {screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
        ))}
      </div>
    </section>

  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <p>"The best file storage app I've ever used! So secure and easy."</p>
          <h3>- Sarah J.</h3>
        </div>
        <div className="testimonial-item">
          <p>"I trust this app with all my sensitive files, highly recommend."</p>
          <h3>- John D.</h3>
        </div>
        <div className="testimonial-item">
          <p>"Great user experience, the encryption methods are top-notch."</p>
          <h3>- Emma P.</h3>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <h2>Download Secure File Storage App</h2>
      <div className="download-buttons">
        <a
          href="https://github.com/ashishkarche/SecureFileApp/releases/download/v2.0/SecureFileAppSetup.exe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">
            <FaWindows /> Download for Windows
          </button>
        </a>
        <button className="download-button disabled">
          <FaApple /> Coming Soon for macOS
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Secure File Storage App. All rights reserved.</p>
      <a href="https://github.com/ashishkarche/SecureFileApp" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ fontSize: '24px', color: 'white' }} />
      </a>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <DotLoader />
      ) : (
        <>
          <HeroSection />
          <FeaturesSection />
          <ScreenshotCarousel />
          <TestimonialsSection />
          <DownloadSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
