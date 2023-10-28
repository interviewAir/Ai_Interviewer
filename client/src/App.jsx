import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages.jsx';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import './App.css'

function App() {
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
