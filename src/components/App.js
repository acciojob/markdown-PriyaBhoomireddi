import React, { useState } from "react";
import "../styles/App.css"; // Ensure this path is correct

const App = () => {
  const [markdownText, setMarkdownText] = useState("# Hello World");

  return (
    <div className="app">  {/* Ensure this class name matches the test */}
      <textarea
        className="textarea" // Ensure this class name matches the test
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
      <div className="preview">
        <h2>Preview:</h2>
        <div>{markdownText}</div>
      </div>
    </div>
  );
};

export default App;
