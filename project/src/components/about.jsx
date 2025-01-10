import React from 'react';
import './AboutPage.css'; 


const AboutPage = () => {
  return (
    <div id="about-page">
      <section className="about-section">
        <div className="about-container">
          <div className="text-section">
            <h1>About Our Hospital</h1>
            <p>
              Welcome to FLY LYFE , where compassion meets excellence. Our mission is to provide
              world-class healthcare services with a patient-first approach. With state-of-the-art
              facilities and a dedicated team of professionals, we are committed to ensuring the
              health and well-being of our community.
            </p>
            <p>
              Established in 2005 , our hospital has been a beacon of hope for thousands of patients.
              From advanced medical technology to personalized care, we strive to set the standard in
              healthcare services.
            </p>
          </div>
          <div className="image-section">
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/12/55/67/1000_F_512556760_HqMTv0wbLs7i2FjmJxm9Ic5lnnZSTCXR.jpg"
              alt="Hospital Building"
            />
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Compassion</h3>
            <p>
              We treat every patient with kindness, respect, and dignity, ensuring a supportive and
              understanding environment.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              By embracing cutting-edge medical advancements, we deliver effective and efficient
              treatments.
            </p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We are committed to achieving the highest standards in all aspects of healthcare.
            </p>
          </div>
        </div>
      </section>
      </div>
  );
};


const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Logo" />
        </div>
      
      
      <center><p>© 2025 ALL RIGHTS RESERVED.BY HTML</p></center>
      </div>
  </footer>
);
const Header = () => (
  <header className="top-header">
    <div className="contact-info">
    </div>
    <div className="logo-menu">
      <div className="logo">
        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Mico Logo" />
        <span>FLY LYFE</span>
      </div>
      
    </div>
  </header>
);
const aboutus= () => (
  <div>
    <Header />
    <AboutPage  />
    <Footer />
  </div>
);

export default aboutus;
