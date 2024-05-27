import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px 0',
      bottom: '0',
      position: 'relative',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <p>&copy; 2023 Pinterest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; // Keep only one default export statement
