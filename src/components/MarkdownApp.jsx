// src/MarkdownApp.jsx
import React, { useState, useEffect } from 'react';

const MarkdownApp = () => {
  const [markdownText, setMarkdownText] = useState('');
  const [loading, setLoading] = useState(true);
  const [previewContent, setPreviewContent] = useState('');

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500 ms delay for loading state
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Function to convert markdown to HTML
    const convertMarkdownToHtml = (markdown) => {
      // Basic markdown parser (you can use a library like marked.js for full functionality)
      const html = markdown
        .replace(/(?:__|[*#])((?:.|\n)+?)(?:__|[*#])/g, '<strong>$1</strong>') // bold
        .replace(/(?:_)(.*?)_(?=\s|$)/g, '<em>$1</em>'); // italic
      return html;
    };

    if (markdownText) {
      setPreviewContent(convertMarkdownToHtml(markdownText));
    } else {
      setPreviewContent('');
    }
  }, [markdownText]);

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdownText}
        onChange={handleChange}
        placeholder="Write your markdown here..."
      />
      <div className="preview">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: previewContent }} />
        )}
      </div>
    </div>
  );
};

export default MarkdownApp;
