import { useState } from "react";
import ChatMessage from "../ChatMessage";

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { isUser: false, text: "Cordial saludo, como puedo atenderlo?" },
  ]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setMessages([...messages, { isUser: true, text: message }]);
    event.target.reset();
  };

  return (
    <div className="container py-4">
      <div className="border rounded-3 p-3 mb-3 bg-light">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <div className="input-group">
          <input type="text" name="message" className="form-control" required />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatContainer;
