import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import './home.css'

function Home() {

  return (
    <div>
      <h1 className = "custome-h1"> blah blah blah something cool here </h1>
      <p className = "custom-p"> INTERVIEW.aiR </p>
        <Link to="/context">
          <MyButton text = "Start Interviewing"/>
        </Link>
    </div>
  );
};

export default Home;