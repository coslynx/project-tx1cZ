import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPopup = () => {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('GPT-4-API-URL', { userInput });
      setChatResponse(response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Logic to handle chat messages or responses
  
    // Example:
    // if (userInput === 'hello') {
    //   setChatResponse('Hi there! How can I assist you today?');
    // }
  }, [userInput]);

  return (
    <div className="chat-popup">
      <div className="chat-container">
        {/* Display chat messages */}
        <div className="chat-messages">
          {chatResponse && <div className="response">{chatResponse}</div>}
        </div>

        {/* Input field for user to type message */}
        <input 
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Type your message..."
        />

        {/* Button to send message */}
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPopup;