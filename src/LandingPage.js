// src/LandingPage.js
import React from 'react';
import './App.css'; // Import your CSS file

function LandingPage({ onContinue }) {
  return (
    <div className="landing-page">
      <h1>Welcome to Secure File Storage</h1>
      <p>Your data security is our priority.</p>
      <button onClick={onContinue}>Get Started</button>
      <style>{`
        .landing-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f9; /* Same as body background */
        }
        button {
          margin-top: 20px;
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
