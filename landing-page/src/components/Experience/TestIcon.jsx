// src/components/TestIcon.jsx
import React from 'react';
import { FaReact } from 'react-icons/fa';

const TestIcon = () => {
  console.log('FaReact:', FaReact, typeof FaReact);
  return (
    <div style={{ backgroundColor: '#ccc', padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: 'black' }}>TestIcon</h2>
      <FaReact style={{ color: 'blue', fontSize: '4rem' }} />
    </div>
  );
};

export default TestIcon;
