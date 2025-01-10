import React from 'react';
import'./hospital.css';

const ContactSection = () => {
  return (
    <div id="contact-id">
      <section className="contact-section">
        <div className="contact-container">
          <div className="form-section">
            <h2>GET IN TOUCH</h2>
            <form action="#" method="post">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="image-section">
            <img
              src="https://c8.alamy.com/comp/2C40J6J/doctor-woman-and-patient-are-sitting-at-a-table-in-the-office-of-a-medical-clinic-2C40J6J.jpg"
              alt="Doctor and Patient Illustration"
            />
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
const contactus = () => (
    <div>
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );

export default contactus;
