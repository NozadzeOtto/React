import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
