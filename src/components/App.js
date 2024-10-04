import React, { useState, useEffect } from "react";
import "../styles/App.css"; // Ensure this path is correct

const App = () => {
  const [markdownText, setMarkdownText] = useState("# Hello World");

  return (
    <div className="app"> {/* Ensure this class name is correct */}
      <textarea
        className="textarea" // Ensure this class name is correct
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
      <div className="preview"> {/* You can add your preview component here */}
        <h2>Preview:</h2>
        <div>{markdownText}</div>
      </div>
    </div>
  );
};

export default App;
