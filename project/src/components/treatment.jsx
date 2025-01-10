import React from 'react';
import './hospital.css'; 

const Card = ({ imageSrc, altText, title, description }) => (
  <div className="card">
    <img src={imageSrc} alt={altText} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#">READ MORE</a>
  </div>
);

const TreatmentSection = () => {
  const cardData = [
    {
      imageSrc: "https://atlas-content-cdn.pixelsquid.com/stock-images/symbol-syringe-red-icing-NxxVVyF-600.jpg",
      altText: "Nephrologist Care",
      title: "Nephrologist Care",
      description: "Alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything.",
    },
    {
      imageSrc: "https://t3.ftcdn.net/jpg/01/19/75/26/360_F_119752602_gm4OfWfuBRw8rOKaXqMgSSjNPjgyhNPE.jpg",
      altText: "Eye Care",
      title: "Eye Care",
      description: "Alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything.",
    },
    {
      imageSrc: "https://t3.ftcdn.net/jpg/04/32/31/52/360_F_432315285_Wv9ORjCeki3J4Sv5MwcVm1ErHAvC10CO.jpg",
      altText: "Pediatrician Clinic",
      title: "Pediatrician Clinic",
      description: "Alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything.",
    },
    {
    
       imageSrc:"https://surgicalshoppe.co.in/wp-content/uploads/2017/04/csm_M-000.09.942-HEINE-GAMMA-3.2-acoustic-stethoscope_e0da9caae6.webp" ,
       altText:"Parental Care",
       title:"Parental" ,
       description:"Alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything."
        

    },
  ];

  return (
    <div className="treatment-section">
      <h2>Hospital <span className="highlight">Treatment</span></h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
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
const Treatment = () => (
    <div>
      <Header />
      <TreatmentSection  />
      <Footer />
    </div>
  );

export default Treatment;
