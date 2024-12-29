import React from 'react';
import './EmailList.css';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="email-list">
      <h2> Inbox</h2>
      <ul>
      {emails.map((email, index) => (
          <li key={index} onClick={() => onSelectEmail(email)}>
            <span className="email-subject">{email.subject}</span>
            <span className="email-sender">{email.sender}</span>
          </li>
      ))}
      </ul>
  
    </div>
  );
};

export default EmailList;