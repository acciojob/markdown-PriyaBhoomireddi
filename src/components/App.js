// src/App.jsx
import React from 'react'; // Import React
import MarkdownApp from './MarkdownApp';
import "../styles/App.css";
const App = () => {
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <MarkdownApp />
    </div>
  );
};

export default App;
