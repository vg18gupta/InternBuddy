import React from 'react';

const Footer = () => (
    <div id="footer">
      <div className="footer">
        <div className="wrapper">
          <div className="column">
            <img className="footer-logo" src="./images/logo.png" alt="Winsome Footer logo" />
            <p className="footer-info">Phone: +92 42 34567890</p>
            <p className="footer-info">Email: info@winsome.ed.pk</p>
            <p className="footer-info">Address: 12-C Madican Block,</p>
            <p className="footer-info">Bangalore.</p>
          </div>
          <div className="column-text">
            <h4 className="footer-buttons">ADMISSIONS</h4>
            <h4 className="footer-buttons">STAFF & FACULTY</h4>
            <h4 className="footer-buttons">NEWS/EVENTS</h4>
            <h4 className="footer-buttons">EDUCATION BLOG</h4>
          </div>
          <div className="column-text">
            <h4 className="footer-buttons">POLICIES</h4>
            <h4 className="footer-buttons">CAREERS</h4>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="footer-description">
        <div className="wrapper">
          <div className="social-icons">
            <a href="https://facebook.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-square" /></a>
            <a href="https://instagram.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" /></a>
            <a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square" /></a>
            <a href="https://google.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-google-plus-square" /></a>
          </div>
 
          <div className="clear" />
        </div>
      </div>
    </div>
  );

export default Footer;