import React from "react";
import "./Bagian3.css";
import icon from "../../assets/img/nextjs-icon-svgrepo-com.svg";

const Bagian3 = () => {
  return (
    <div className="container">
      <div className="text-section">
        <p>
          I’m currently looking to join a <span className="highlight">cross-functional</span> team
        </p>
        <p>that values improving people's lives through accessible design</p>
      </div>

      <div className="icons">
          <div className="icon-row">
            <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="Icon 1" />
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/256_Php-512.png" alt="Icon 2" />
            <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="Icon 3" />
          </div>
          <div className="icon-row">
            <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="Icon 4" />
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/256_Php-512.png" alt="Icon 5" />
            <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="Icon 6" />
          </div>
        </div>

      <div className="icon-center">
        <div className="central-icon">
          <span>Σ</span> 
        </div>

      </div>
    </div>
  );
};

export default Bagian3;
