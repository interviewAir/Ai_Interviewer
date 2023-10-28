import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import Context from './pages/context';
import Interview from './pages/interview';
import Report from './pages/report';

const Pages = () => {
  return (
    <Routes> {}
      <Route path="/" element={<Home />} /> 
      <Route path="/context" element={<Context />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Pages;