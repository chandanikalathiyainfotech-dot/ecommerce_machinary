import React from 'react'
console.log(React);


function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            MECH<span>ZONE</span>
          </div>
          <p className="footer-tagline">
            Your trusted partner for premium industrial machinery solutions. Quality, reliability, and innovation since 2010.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#"><span>▸</span> Home</a></li>
            <li><a href="#"><span>▸</span> Machines</a></li>
            <li><a href="#"><span>▸</span> Spare Parts</a></li>
            <li><a href="#"><span>▸</span> Services</a></li>
            <li><a href="#"><span>▸</span> About Us</a></li>
            <li><a href="#"><span>▸</span> Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#"><span>▸</span> New Machinery</a></li>
            <li><a href="#"><span>▸</span> Used Equipment</a></li>
            <li><a href="#"><span>▸</span> Installation</a></li>
            <li><a href="#"><span>▸</span> Maintenance</a></li>
            <li><a href="#"><span>▸</span> Repair Services</a></li>
            <li><a href="#"><span>▸</span> Spare Parts</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Industrial Estate, Plot #123, Ahmedabad, Gujarat 380006</span>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span>info@mechzone.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 MECHZONE. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
