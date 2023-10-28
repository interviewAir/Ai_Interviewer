import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div>
      <h1>interviewAIr</h1>
      <p> personalized interview prep </p>
        <Link to="/context">
          <button>Start</button>
        </Link>
    </div>
  );
};

export default Home;