import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Interview() {
  return (
    <div>
      <h1>Interview</h1>
      
        <Link to="/report">
          <Button variant="contained" color="primary"> Finish </Button>
        </Link>
    </div>
  );
};

export default Interview;