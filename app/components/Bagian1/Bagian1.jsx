import React from 'react';
import './Bagian1.css';
import Gam1 from "../../assets/img/gam1.svg";

const Bagian1 = () => {
  return (
    <div className="main-container">
      <div className="header">
        <br />
        <br />
        <br />
        <p className="greeting">Hello! I am <span className="highlight">Rafly</span></p>
        <img src="https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-users-icon-png-image_856952.jpg" alt="Memoji" className="memoji" />
        <div className="intro-text">
          <p className="designer">A Designer who</p>
          <p className="catchphrase">
            Judges a book <br />by its <span className="cover-highlight">cover</span>...
          </p>
          <p className="explanation">Because if the cover can’t captivate you, what else can?</p>
        </div>
      </div>
      <br />
      <div className="content">
        <h1 className="title">I'm a Software Engineer.</h1>
        <p className="work-info">
          Currently, I'm a Software Engineer at <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>.
        </p>
        <br />
        <p className="bio">
          A self-taught UI/UX designer, functioning in the industry for 3+ years now.<br />
          I make meaningful and delightful digital products that create an equilibrium <br />
          between user needs and business goals.
        </p>
      </div>
    </div>
  );
};

export default Bagian1;
