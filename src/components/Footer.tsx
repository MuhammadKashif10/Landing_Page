import React from 'react';
import '../styles/footer.css';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">TechFlow</h3>
            <p className="footer-description">
              Creating digital experiences that inspire and deliver results.
            </p>
            <div className="social-links">
              <a href="https://web.facebook.com/kashif.bukhari.946521" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/Shahpu666Kashif" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-kashif-867223229/" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/masoombiologist/" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 TechFlow. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Dialog>
              <DialogTrigger asChild>
                <button style={{ background: 'none', border: 'none', color: '#4f3cc9', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>Privacy Policy</button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogDescription asChild>
                  <div style={{ maxHeight: '60vh', overflowY: 'auto', textAlign: 'left' }}>
                    <p><strong>Effective Date:</strong> June 2024</p>
                    <p>We value your privacy. This Privacy Policy explains how TechFlow collects, uses, and protects your information when you use our website and services.</p>
                    <h4>Information We Collect</h4>
                    <ul>
                      <li>Personal Information: Name, email address, phone number, and other contact details you provide via forms.</li>
                      <li>Usage Data: Information about how you use our website, including IP address, browser type, and pages visited.</li>
                    </ul>
                    <h4>How We Use Your Information</h4>
                    <ul>
                      <li>To provide and improve our services</li>
                      <li>To communicate with you about your inquiries</li>
                      <li>To analyze website usage and enhance user experience</li>
                    </ul>
                    <h4>Information Sharing</h4>
                    <p>We do not sell or rent your personal information. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
                    <h4>Security</h4>
                    <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
                    <h4>Contact Us</h4>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@techflow.com.</p>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button style={{ background: 'none', border: 'none', color: '#4f3cc9', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>Terms of Service</button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Terms of Service</DialogTitle>
                <DialogDescription asChild>
                  <div style={{ maxHeight: '60vh', overflowY: 'auto', textAlign: 'left' }}>
                    <p><strong>Effective Date:</strong> June 2024</p>
                    <h4>1. Acceptance of Terms</h4>
                    <p>By accessing or using the TechFlow website and services, you agree to be bound by these Terms of Service.</p>
                    <h4>2. Use of Services</h4>
                    <ul>
                      <li>You agree to use our services only for lawful purposes.</li>
                      <li>You must not misuse or interfere with the services or try to access them using a method other than the interface provided.</li>
                    </ul>
                    <h4>3. Intellectual Property</h4>
                    <p>All content, trademarks, and data on this website are the property of TechFlow or its licensors and are protected by copyright and intellectual property laws.</p>
                    <h4>4. Limitation of Liability</h4>
                    <p>TechFlow is not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
                    <h4>5. Changes to Terms</h4>
                    <p>We may update these Terms of Service from time to time. Continued use of the website means you accept the revised terms.</p>
                    <h4>Contact Us</h4>
                    <p>If you have any questions about these Terms, please contact us at info@techflow.com.</p>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
