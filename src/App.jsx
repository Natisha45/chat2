import React, { useState } from "react";
import Sidebar from "./component/sidebar/sidebar.jsx";
import EmailList from "./component/EmailList/EmailList.jsx";
import EmailDetail from "./component/EmailDetail/EmailDetail.jsx";
import ComposeEmail from "./component/ComposeEmail/ComposeEmail.jsx";
import "./App.css";

const App = () => {
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [emails, setEmails] = useState([]); // Stores email list
  const [selectedEmail, setSelectedEmail] = useState(null); // For detailed view
  const [isComposing, setIsComposing] = useState(false); // To show/hide compose form

  const fetchEmails = async (folder) => {
    try {
      const response = await fetch(`/api/emails?folder=${folder}`);
      const data = await response.json();
      setEmails(data);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  const handleFolderSelect = (folder) => {
    if (folder === "compose") {
      setIsComposing(true); // Show compose form
      setSelectedEmail(null); // Clear email detail view
    } else {
      setSelectedFolder(folder);
      fetchEmails(folder);
      setIsComposing(false); // Hide compose form
      setSelectedEmail(null); // Clear email detail view
    }
  };
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="app">
      <Sidebar onSelectFolder={handleFolderSelect} />
      <div className="main-content">
        {/* Show Compose Email form */}
        {isComposing && <ComposeEmail onClose={() => setIsComposing(false)} />}
        {!isComposing && !selectedEmail && (
        <EmailList emails={emails} onSelectEmail={handleEmailClick} />
      )}
      {!isComposing && selectedEmail && (
        <EmailDetail email={selectedEmail} onClose={() => setSelectedEmail(null)} />
      )}
        {/* Show Email List or Email Detail based on state */}
        {!isComposing && !selectedEmail && <EmailList emails={emails} onSelectEmail={setSelectedEmail} />}
        {!isComposing && selectedEmail && <EmailDetail email={selectedEmail} />}
      </div>
    </div>
  );
};

export default App;
