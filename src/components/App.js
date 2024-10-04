import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import "../styles/App.css";

const App = () => {
  const [markdownText, setMarkdownText] = useState("# Hello World");

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
      <div className="preview">
        <h2>Preview:</h2>
        <ReactMarkdown>{markdownText}</ReactMarkdown> {/* Render markdown here */}
      </div>
    </div>
  );
};

export default App;
