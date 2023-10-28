import React from 'react'

function chat() {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...message, message]);
    }

    return (
        <div className = "chat">
            <MessageList messages = {messages} />
            <MessageInput addMessage = {addMessage} />
        </div>
    )
}

export default Chat;