import React from "react";
import "./ComposeEmail.css";

const ComposeEmail = ({ onClose }) => {
  return (
    <div className="compose-form">
      <h2>Compose Email</h2>
      <input type="text" placeholder="To" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Body"></textarea>
      <div>
        <button onClick={() => alert("Email Sent!")}>Send</button>
        <button className="cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
