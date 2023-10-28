import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages.jsx';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Pages/>
        </div>
      </Router>
    </>
  )
}

export default App
