// src/App.jsx
import React from 'react'; // Import React
import MarkdownApp from './MarkdownApp';
import './App.css'; // Optional: include CSS for styling

const App = () => {
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <MarkdownApp />
    </div>
  );
};

export default App;
