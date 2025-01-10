import React from 'react';
import './hospital.css';
import './treatment';
import './doctors';
import './contact';

const Header = () => (
  <header className="top-header">
    <div className="contact-info">
    </div>
    <div className="logo-menu">
      <div className="logo">
        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Mico Logo" />
        <span>FLY LYFE</span>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="\about">ABOUT</a></li>
          <li><a href="\treatment">TREATMENT</a></li>
          <li><a href="\doctors">DOCTORS</a></li>
          <li><a href="\contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="auth-search">
        <a href="#">LOGIN</a>
        <a href="#">SIGN UP</a>
        <a href="#">🔍</a>
      </div>
    </div>
  </header>
);

const HospitalSection = () => (
  <section className="hospital-section">
    <div className="left-content">
      <div className="play-button">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <h1><span>FLY LYFE</span> <br /> HOSPITAL</h1>
      <p>
        when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to
      </p>
      <a href='\contact'><button className="contact-button">Contact Us</button></a>
    </div>
    <div className="right-content">
      <img src="https://thumbs.dreamstime.com/b/nurse-providing-care-support-to-smiling-patient-hospital-bed-offering-illustrating-positive-healthcare-experience-327138907.jpg" alt="Hospital Illustration" />
    </div>
  </section>
);

const AppointmentSection = () => (
  <section className="appointment-section">
    <h2>BOOK <span>APPOINTMENT</span></h2>
    <hr className="underline" />
    <form className="appointment-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="patient-name">Patient Name</label>
          <input type="text" id="patient-name" placeholder="Enter Patient Name" />
        </div>
        <div className="form-group">
          <label htmlFor="doctor-name">Doctor's Name</label>
          <select id="doctor-name">
            <option value="default">Normal distribution</option>
            <option value="doctor-1">Dr. John Doe</option>
            <option value="doctor-2">Dr. Jane Smith</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department-name">Department's Name</label>
          <select id="department-name">
            <option value="default">Normal distribution</option>
            <option value="department-1">Cardiology</option>
            <option value="department-2">Orthopedics</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="phone-number" placeholder="XXXXXXXXXX" />
        </div>
        <div className="form-group">
          <label htmlFor="symptoms">Symptoms</label>
          <input type="text" id="symptoms" placeholder="Enter Symptoms" />
        </div>
        <div className="form-group">
          <label htmlFor="appointment-date">Choose Date</label>
          <input type="date" id="appointment-date" defaultValue="2025-01-04" />
        </div>
      </div>
      <button type="submit" className="submit-button">SUBMIT NOW</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Logo" />
        <p>Your email</p>
        <div className="subscribe">
          <input type="email" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-column">
        <h3>ADDRESS</h3>
        <p>📍 Location</p>
        <p>📞 Call +01 1234567890</p>
        <p>✉ mail@domain.com</p>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 ALL RIGHTS RESERVED.BY HTML</p>
      </div>
    </div>
  </footer>
);

const Apps= () => (
  <div>
    <Header />
    <HospitalSection />
    <AppointmentSection />
    <Footer />
  </div>
);

export default Apps;
