import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Aata-allah Rchidi - {currentYear}</p>
    </footer>
  );
};

export default Footer;