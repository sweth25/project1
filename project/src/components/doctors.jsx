import React from 'react';
import './hospital.css'; 

  const Card = ({ imgSrc,name,degree}) => (
    <div className="card">
      <img src={imgSrc}  />
      <h3>{name}</h3>
      <p>{degree}</p>
    </div>
  );

  
  const Carousel = () => {
    const cardData = [
      {
        imgSrc: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
      name: "Hennry",
      degree: "MBBS",
      },
      {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      name: "Jenni",
      degree: "MBBS",
      },
      {
        imgSrc: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
        name: "Morco",
        degree: "MBBS",
      },
    ];

return (
        <div className="treatment-section">
          <h2>Hospital <span className="highlight">Doctors</span></h2>
          <div className="cards-container">
            {cardData.map((card, index) => (
              <Card 
                key={index}
                imgSrc={card.imgSrc}
                name={card.name}
                degree={card.degree}
              />
            ))}
          </div>
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
const DOCTORS= () => (
    <div>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );

export default DOCTORS;
