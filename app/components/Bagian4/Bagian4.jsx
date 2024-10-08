import React from 'react';
import './Bagian4.css';

const Bagian4 = () => {
  return (
    <div>
      <div className="container4">
        <div className="project-details">
          <h3 className="project-title">
            <span className="featured">Featured Project</span><br />PHP Project
          </h3>
          <p className="project-description">
            A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </p>
          <div className="project-icons">
            <span className="icon">⚙️</span>
            <span className="icon">✨</span>
          </div>
        </div>

        <div className="project-image">
          <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/256_Php-512.png"/>
        </div>
      </div>


      <div className="container42">
        <div className="project-image">
          <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"/>
        </div>
        
        <div className="project-details">
          <h3 className="project-title">
            <span className="featured">Featured Project</span><br />Laravel Project
          </h3>
          <p className="project-description">
            A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </p>
          <div className="project-icons">
            <span className="icon">⚙️</span>
            <span className="icon">✨</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="contact-section">
      <div className="contact-content">
        <h3>Contact</h3>
        <br />
        <br />
        <br />
        <br />
        <p>
          I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or have a project in mind? Let's connect.
        </p>
        <br />
        <br />
        <a href="mailto:muhammadraflyrasyidin@gmail.com" className="email-link">muhammadraflyrasyidin@gmail.com</a>
        <div className="social-icons">
          <a href="https://www.instagram.com"><span className="icon">📷</span></a>
          <a href="https://www.linkedin.com"><span className="icon">💼</span></a>
          <a href="https://www.github.com"><span className="icon">🐙</span></a>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
    </div>
  );
};

export default Bagian4;
