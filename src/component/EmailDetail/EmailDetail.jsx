import React from "react";
import "./EmailDetail.css";

const EmailDetail = ({email, onclose}) =>
   {
    if (!email) return null;
        
    return(
    <dev class name = "email-detail">
      <button className="close-button" onClick={onclose}>
          &times</button>
      <h2 className="email-subject">{email.subject}</h2>
      <dev className = "email-info">
        <span className="email-sender">{email.sender}</span>
        <span className="email-date">{email.date}</span>
      </dev>
  <dev className = "email-content">
    <p>{email.body}</p>
  </dev>
  <dev className= "email-actions">
    <button>Reply</button>
    <button>forward</button>
  </dev>
    </dev>
);
} 

export default EmailDetail;