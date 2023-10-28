import React from 'react';
import { Link } from 'react-router-dom';

const Interview = () => {
  return (
    <div>
      <h1>Interview Page</h1>
      <p>This is the content of the Interview page.</p>
        <Link to="/report">
          <button>Finish</button>
        </Link>
    </div>
  );
};

export default Interview;