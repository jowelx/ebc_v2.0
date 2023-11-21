import PropTypes from "prop-types";

const ChatMessage = ({ message }) => {
  return (
    <div className="d-flex my-3">
      <div className={`${message.isUser ? "me-auto" : "ms-auto"}`}>
        <div
          className={`card ${
            message.isUser ? "bg-primary text-white" : "bg-light"
          }`}
        >
          <div className="card-body p-2">{message.text}</div>
        </div>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ChatMessage;
