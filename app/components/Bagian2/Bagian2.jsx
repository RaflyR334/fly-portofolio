import React from 'react';
import './Bagian2.css'; // Import a CSS file for styling

const Bagian2 = () => {
  return (
    <div className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-cards-container">
        <div className="experience-card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Project 1" />
          </div>
          <h3>CIB on the Mobile</h3>
          <p>Stay connected with banking services from your mobile.</p>
          <button className="learn-more-button">Learn More</button>
        </div>

        <div className="experience-card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Project 2" />
          </div>
          <h3>CIB on the Mobile</h3>
          <p>Access your accounts and manage your banking anytime.</p>
          <button className="learn-more-button">Learn More</button>
        </div>

        <div className="experience-card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Project 3" />
          </div>
          <h3>CIB on the Mobile</h3>
          <p>Stay connected with banking services from your mobile.</p>
          <button className="learn-more-button">Learn More</button>
        </div>

        <div className="experience-card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Project 4" />
          </div>
          <h3>CIB on the Mobile</h3>
          <p>Manage your finances from the palm of your hand.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Bagian2;
