import React from 'react';
import { Link } from 'react-router-dom';

const Context = () => {
  return (
    <div>
      <h1>Context Page</h1>
      <p>This is the content of the Context page.</p>
        <Link to="/interview">
          <button>Start</button>
        </Link>
    </div>
  );
};

export default Context;