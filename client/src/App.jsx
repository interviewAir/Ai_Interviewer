import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages.jsx';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import axios from 'axios';
import './App.css'

function App() {

  useEffect(() => {
    // Make a GET request to the Express.js API endpoint
    axios.get('/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <>
      <Router>
        <div className="App">
          <Pages />
        </div>
      </Router>
    </>
  )
}

export default App
