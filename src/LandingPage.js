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
          padding: 20px;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2rem;
          text-align: center;
          margin-bottom: 20px;
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

        /* Responsive Design */
        @media (max-width: 1200px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          button {
            padding: 8px 16px;
          }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
          button {
            width: 100%; /* Full-width button for mobile */
            padding: 12px;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.8rem;
          }
          button {
            font-size: 0.9rem;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
