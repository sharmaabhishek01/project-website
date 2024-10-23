// src/components/ChatBot.js
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";  // Icon for Send button
import { IoChatbubblesOutline } from "react-icons/io5"; // Icon for chat message


import "./Chatboat.css";

const Chatboat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleBotReply = (userMessage) => {
    let botResponse = "Thanks for reaching out,How Can I help You!";
    
    // Add different responses based on user input
    if (userMessage.toLowerCase().includes("hello")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      botResponse = "I'm here to help! Please tell me what you're looking for.";
    } else if (userMessage.toLowerCase().includes("price")) {
      botResponse = "We offer a variety of services. For a detailed price list, visit our Pricing page.";
    } else if (userMessage.toLowerCase().includes("bye")) {
      botResponse = "Goodbye! Feel free to chat with me anytime!";
    } else if (userMessage.toLowerCase().includes("i want number of your team")) {
      botResponse = "Ok here is contact number of our team +7549091730 you can reach to our team. Thank you";
    } else if (userMessage.toLowerCase().includes("how to reach you")){
      botResponse = "Ok I'm sharing the contact number of our Team +91-7549091730";
    } else if (userMessage.toLowerCase().includes("by")){
      botResponse = "Goodbye! Feel free to chat with me anytime!";
    } else if (userMessage.toLowerCase().includes("hi")){
      botResponse = "Hi please tell how I can help you!"; 
    }else if (userMessage.toLowerCase().includes("how are you")){
        botResponse = "I am good Plaease tell me about you."; 
      }else if (userMessage.toLowerCase().includes("Fine")){
        botResponse = "That's greate."; 
      }else if (userMessage.toLowerCase().includes("fine")){
        botResponse = "That's greate."; 
      }else if (userMessage.toLowerCase().includes("what are you doing?")){
        botResponse = "Nothing.Please tell me how i can help you?"; 
      }else if (userMessage.toLowerCase().includes("no")){
        botResponse = "Ok!Feel free to chat with me anytime!"; 

    } else {
      // Unique response for unrecognized messages
      botResponse = "I'm not sure I understand. Can you please rephrase or ask something else?";
    }
    

    // Add bot's reply to chat log
    setTimeout(() => {
      setChatLog((prevLog) => [
        ...prevLog,
        { sender: "bot", text: botResponse },
      ]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatLog([...chatLog, { sender: "user", text: message }]);
      handleBotReply(message);  // Trigger bot response based on user message
      setMessage("");  // Clear input field after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if inside a form
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={toggleChat}>
        <IoChatbubblesOutline className="chat-icon" />
      </div>
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">Chat with Us</div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {chatLog.map((chat, index) => (
                <div key={index} className={`message ${chat.sender}`}>
                  {chat.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown} // Add onKeyDown event
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage}>
                <FiSend className="send-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatboat;







