import React from "react";
import "./sidebar.css";

const Sidebar = ({ onSelectFolder }) => {
  return (
    <div className="sidebar">
      <h2>Welcome, Guest</h2>
      <ul>
        <li onClick={() => onSelectFolder("compose")}>Compose</li>
        <li onClick={() => onSelectFolder("inbox")}>Inbox</li>
        <li onClick={() => onSelectFolder("outbox")}>Outbox</li>
        <li onClick={() => onSelectFolder("draft")}>Draft</li>
        <li onClick={() => onSelectFolder("allmail")}>All Mail</li>
        <li onClick={() => onSelectFolder("logout")}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
