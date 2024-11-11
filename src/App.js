import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [editorContent, setEditorContent] = useState('');

  // Default markdown content
  const defaultMarkdown = `
  # Heading 1
  ## Sub-heading 2
  [Link to Google](https://www.google.com)
  \`Inline code\`
  \`\`\`javascript
  const hello = "Hello World!";
  console.log(hello);
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Image](https://via.placeholder.com/150)
  **Bold Text**
  Line 1 with a carriage return.
  Line 2 after a carriage return.
  `;

  useEffect(() => {
    setEditorContent(defaultMarkdown);  // Set the default markdown content
  }, []);

  // Handle the input change in the editor
  const handleEditorChange = (e) => {
    setEditorContent(e.target.value);
  };

  // Configure marked to interpret carriage returns as <br> elements
  const getPreviewMarkup = (markdown) => {
    return marked(markdown, { breaks: true });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <textarea
            id="editor"
            value={editorContent}
            onChange={handleEditorChange}
            className="form-control"
            rows="20"
          />
        </div>
        <div className="col-6">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: getPreviewMarkup(editorContent),
            }}
            className="preview"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
